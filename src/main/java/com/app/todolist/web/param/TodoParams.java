package com.app.todolist.web.param;


import lombok.Data;

@Data
public class TodoParams {

  Long userId;
  String loc;
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

}
