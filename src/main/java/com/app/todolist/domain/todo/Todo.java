package com.app.todolist.domain.todo;

import com.app.todolist.domain.util.BaseEntity;
import com.app.todolist.web.param.TodoParams;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Todo extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long todoId;
  private Long userId;
  private String title;
  private String contents;
  private String labelCd;
  private int clipYn;
  private int sectionNo;
  private int completedYn;
  private int orderNo;
  private String beginDate;
  private String beginTime;
  private String endTime;
  private int recurYn;
  private int recurOption;
  private String recurContents;
  private int recurSubIndex;
  private int recurSubDayIndex;
  private String recurSubValue;

  public Todo(TodoParams param) {
    this.userId = param.getUserId();
    this.title = param.getTitle();
    this.labelCd = param.getLabelCd();
    this.clipYn = param.getClipYn();
    this.beginDate = param.getBeginDate();
    this.beginTime = param.getBeginTime();
    this.endTime = param.getEndTime();
    this.recurYn = param.getRecurYn();
    this.recurOption = param.getRecurOption();
    this.recurContents = param.getRecurContents();
    this.recurSubIndex = param.getRecurSubIndex();
    this.recurSubDayIndex = param.getRecurSubDayIndex();
    this.recurSubValue = param.getRecurSubValue();
  }

  public void updateTodo(String title, int completedYn) {
    this.title = title;
    this.completedYn = completedYn;
  }

  public void deleteTodo() {
    this.stateNo = 1;
  }
}
