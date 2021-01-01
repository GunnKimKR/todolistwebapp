package com.app.todolist.domain.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SnsUserRepository extends JpaRepository<SnsUser, Long> {

  @Query("select su from SnsUser su where su.userId = :userId")
  Optional<SnsUser> findByUserId(@Param("userId") Long userId);

}
