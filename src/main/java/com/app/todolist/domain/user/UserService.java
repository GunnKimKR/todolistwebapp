package com.app.todolist.domain.user;

import com.app.todolist.web.param.UserParams;
import lombok.RequiredArgsConstructor;
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
    JoinUser joinUser = new JoinUser(user.getUserId(), param.getUsername(), param.getPassword());
    joinUserRepository.save(joinUser);
  }

}
