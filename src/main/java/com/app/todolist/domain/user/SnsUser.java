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
public class SnsUser{

  @Id
  private Long userId;
  private String snsType;
  private String token;

  public void updateSnsInfo(String token) {
    this.token = token;
  }

}
