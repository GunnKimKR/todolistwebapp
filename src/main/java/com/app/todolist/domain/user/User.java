package com.app.todolist.domain.user;

import com.app.todolist.domain.util.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class User extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long userId;
  private String nickname;
  private String email;
  private int stateNo;

  public User(String nickname, String email) {
    this.nickname = nickname;
    this.email = email;
  }

  public void deleteUser(){
    this.email = "["+ this.userId + "-DELETED]" + this.email;
    this.stateNo = 1;
  }

}
