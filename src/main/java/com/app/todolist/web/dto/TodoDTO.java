package com.app.todolist.web.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.time.LocalDateTime;
import lombok.Data;

@Data
public class TodoDTO {

  //todo번호, 닉네임, todo 제목, 완료여부, 작성일자 조회

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
