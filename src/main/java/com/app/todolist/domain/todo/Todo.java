package com.app.todolist.domain.todo;

import com.app.todolist.domain.util.BaseEntity;
import java.time.LocalDateTime;
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
  private String labelCd;
  private int clipYn;
  private int completedYn;
  private LocalDateTime startDt;
  private LocalDateTime endDt;
  private int orderNo;

  public Todo(Long userId, String title, int completedYn) {
    this.userId = userId;
    this.title = title;
    this.completedYn = completedYn;
  }

  public void updateTodo(String title, int completedYn) {
    this.title = title;
    this.completedYn = completedYn;
  }

  public void deleteTodo() {
    this.stateNo = 1;
  }
}
