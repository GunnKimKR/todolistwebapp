package com.app.todolist.domain.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface JoinUserRepository extends JpaRepository<JoinUser, Long> {

  @Query("select ju"
      + " from User u"
      + " join JoinUser ju"
      + " on u.userId = ju.userId"
      + " where ju.loginId = :email"
      + " and u.stateNo = 0")
  Optional<JoinUser> findByLoginId(@Param("email") String email);

}
