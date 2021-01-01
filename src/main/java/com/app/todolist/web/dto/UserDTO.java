package com.app.todolist.web.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UserDTO {

  Long userId;
  String nickname;
  String email;
  String picture;
  String password;
  String snsType;
  String token;

  @QueryProjection
  public UserDTO(Long userId, String nickname, String email, String picture, String password) {
    this.userId = userId;
    this.nickname = nickname;
    this.email = email;
    this.picture = picture;
    this.password = password;
  }

  @QueryProjection
  public UserDTO(Long userId, String nickname, String email, String picture, String password, String snsType, String token) {
    this.userId = userId;
    this.nickname = nickname;
    this.email = email;
    this.picture = picture;
    this.password = password;
    this.snsType = snsType;
    this.token = token;
  }

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
