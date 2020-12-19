package com.app.todolist.domain.user;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class JoinUser{

  @Id
  private Long userId;
  private String loginId;
  private String password;

  public void updatePassword(String password) {
    this.password = password;
  }
}
