package com.app.todolist.domain.user;

import com.app.todolist.web.util.Message;
import com.app.todolist.web.param.UserParams;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;
  private final JoinUserRepository joinUserRepository;

  public void signup(UserParams param) {
    User user = new User(param.getUsername(), param.getEmail());
    userRepository.saveAndFlush(user);

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    String password = passwordEncoder.encode(param.getPassword());
    JoinUser joinUser = new JoinUser(user.getUserId(), param.getEmail(), password);
    joinUserRepository.save(joinUser);
  }

  public int duplicateEmailCount(String email) {
    return userRepository.findByEmail(email).map(user -> 1).orElse(0);
  }

  public JoinUser login(UserParams param) {
    JoinUser joinUser = joinUserRepository.findByLoginId(param.getEmail())
        .orElseThrow(() -> new IllegalArgumentException(Message.EMAIL_NOT_EXIST));

    if(!BCrypt.checkpw(param.getPassword(), joinUser.getPassword())){
      throw new IllegalArgumentException(Message.WRONG_PASSWORD);
    }

    return joinUser;
  }
}
