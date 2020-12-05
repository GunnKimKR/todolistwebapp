package com.app.todolist.domain.user;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findUserByEmailLikeOrderByNickname(String email);
  List<User> findByEmail(String email);

}
