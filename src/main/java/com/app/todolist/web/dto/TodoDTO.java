package com.app.todolist.web.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class TodoDTO {

  Long todoId;
  String nickname;
  String title;
  int completedYn;
  LocalDateTime createdDt;

  @QueryProjection
  public TodoDTO(Long todoId, String nickname, String title, int completedYn,
      LocalDateTime createdDt) {
    this.todoId = todoId;
    this.nickname = nickname;
    this.title = title;
    this.completedYn = completedYn;
    this.createdDt = createdDt;
  }
}
