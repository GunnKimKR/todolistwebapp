package com.app.todolist.config;

import com.app.todolist.domain.user.SnsUser;
import com.app.todolist.domain.user.SnsUserRepository;
import com.app.todolist.domain.user.User;
import com.app.todolist.domain.user.UserQdslRepository;
import com.app.todolist.domain.user.UserRepository;
import com.app.todolist.jwt.JwtService;
import com.app.todolist.web.dto.UserDTO;
import com.app.todolist.web.param.UserParams;
import java.util.Collections;
import javax.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional
@Service
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

  private final UserRepository userRepository;
  private final SnsUserRepository snsUserRepository;
  private final UserQdslRepository userQdslRepository;
  private final JwtService jwtService;
  private final HttpSession httpSession;

  @Override
  public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
    OAuth2UserService delegate = new DefaultOAuth2UserService();
    OAuth2User oAuth2User = delegate.loadUser(userRequest);

    String registrationId = userRequest.getClientRegistration().getRegistrationId();
    String userNameAttributeName = userRequest.getClientRegistration()
        .getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

    OAuthAttributes attributes = OAuthAttributes.
        of(registrationId, userNameAttributeName, oAuth2User.getAttributes());

    UserParams param = new UserParams();
    param.setEmail(attributes.getEmail());
    UserDTO findUser = userQdslRepository.findSnsUserByEmail(param);

    if (findUser == null) {
      User user = new User(attributes.getName(), attributes.getEmail(), attributes.getPicture());
      userRepository.saveAndFlush(user);

      String token = jwtService.create("user", user, "snsUser");
      SnsUser snsUser = new SnsUser(user.getUserId(), "google", token);
      snsUserRepository.save(snsUser);

      findUser = new UserDTO(user.getUserId(), attributes.getName(), attributes.getEmail(), null,
          token);
    } else {
      User user = userRepository.findByUserId(findUser.getUserId()).get();
      user.updateSnsInfo(attributes.getName(), attributes.getPicture());

      String token = jwtService.create("user", user, "snsUser");
      SnsUser snsUser = new SnsUser(user.getUserId(), "google", token);
      snsUserRepository.findByUserId(findUser.getUserId()).get().updateSnsInfo(token);
    }

    httpSession.setAttribute("user", findUser);

    return new DefaultOAuth2User(
        Collections.singleton(new SimpleGrantedAuthority("USER")),
        attributes.getAttributes(),
        attributes.getNameAttributeKey());
  }

}
