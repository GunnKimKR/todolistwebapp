package com.app.todolist.domain.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JoinUserRepository extends JpaRepository<JoinUser, Long> {

  Optional<JoinUser> findByLoginId(String email);

}
