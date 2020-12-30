package com.app.todolist.domain.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

  @Query("select u from User u where u.email = :email and u.stateNo = 0")
  Optional<User> findByEmail(@Param("email") String email);

  @Query("select u from User u where u.userId = :userId and u.stateNo = 0")
  Optional<User> findByUserId(@Param("userId") Long userId);

}
