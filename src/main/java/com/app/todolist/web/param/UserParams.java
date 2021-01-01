package com.app.todolist.web.param;


import lombok.Data;

@Data
public class UserParams {

  Long userId;
  String username;
  String email;
  String password;

}
