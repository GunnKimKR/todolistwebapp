package com.app.todolist.domain.user;

import com.app.todolist.web.dto.UserDTO;
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
  private final UserQdslRepository userQdslRepository;

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

  public UserDTO login(UserParams param) {
    UserDTO user = userQdslRepository.findUserByEmail(param.getEmail());
    if (user == null) {
      throw new IllegalArgumentException(Message.WRONG_EMAIL);
    }

    if (!BCrypt.checkpw(param.getPassword(), user.getPassword())) {
      throw new IllegalArgumentException(Message.WRONG_PASSWORD);
    }

    return user;
  }

  public UserDTO resetPassword(UserParams param) {
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    String password = passwordEncoder.encode(param.getPassword());
    joinUserRepository.findByLoginId(param.getEmail()).get().updatePassword(password);

    UserDTO user = userQdslRepository.findUserByEmail(param.getEmail());
    return user;
  }
}
