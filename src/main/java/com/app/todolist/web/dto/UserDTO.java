package com.app.todolist.web.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;

@Getter
public class UserDTO {

  Long userId;
  String nickname;
  String email;
  String password;
  String token;

  @QueryProjection
  public UserDTO(Long userId, String nickname, String email, String password) {
    this.userId = userId;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }

  public void setToken(String token) {
    this.token = token;
  }
}
