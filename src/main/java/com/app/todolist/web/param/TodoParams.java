package com.app.todolist.web.param;


import lombok.Data;

@Data
public class TodoParams {

  Long userId;
  String loc;
  String title;
  int completedYn;
  int labelCd;
  int clipYn;
  int sectionNo;
  int orderNo;
  int beginDate;
  int beginTime;
  int endTime;
  int recurYn;
  int recurOption;
  String recurContents;
  int recurSubIndex;
  int recurSubDayIndex;
  int recurSubValue;

}
