package com.app.todolist.web.param;


import lombok.Data;

@Data
public class TodoParams {

  Long userId;
  String title;
  String completedYn;

}
