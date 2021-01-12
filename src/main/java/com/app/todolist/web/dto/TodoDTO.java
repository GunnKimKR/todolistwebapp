package com.app.todolist.web.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class TodoDTO {

  Long userId;
  String nickname;
  Long todoId;
  String title;
  int completedYn;
  String labelCd;
  int clipYn;
  int sectionNo;
  int orderNo;
  String beginDate;
  String beginTime;
  String endTime;
  int recurYn;
  int recurOption;
  String recurContents;
  int recurSubIndex;
  int recurSubDayIndex;
  String recurSubValue;

  @QueryProjection
  public TodoDTO(Long userId, String nickname, Long todoId, String title, int completedYn,
      String labelCd, int clipYn, int sectionNo, int orderNo, String beginDate,
      String beginTime, String endTime, int recurYn, int recurOption, String recurContents,
      int recurSubIndex, int recurSubDayIndex, String recurSubValue) {
    this.userId = userId;
    this.nickname = nickname;
    this.todoId = todoId;
    this.title = title;
    this.completedYn = completedYn;
    this.labelCd = labelCd;
    this.clipYn = clipYn;
    this.sectionNo = sectionNo;
    this.orderNo = orderNo;
    this.beginDate = beginDate;
    this.beginTime = beginTime;
    this.endTime = endTime;
    this.recurYn = recurYn;
    this.recurOption = recurOption;
    this.recurContents = recurContents;
    this.recurSubIndex = recurSubIndex;
    this.recurSubDayIndex = recurSubDayIndex;
    this.recurSubValue = recurSubValue;
  }
}
