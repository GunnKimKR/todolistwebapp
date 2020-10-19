package com.app.todolist.domain.todo;

import com.app.todolist.domain.util.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Todo extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long todoId;
  private Long userId;
  private String title;
  private String completedYn;
  private int orderNo;

  public Todo(Long userId, String title, String completedYn) {
    this.userId = userId;
    this.title = title;
    this.completedYn = completedYn;
  }

  public void updateTodo(String title, String completedYn) {
    this.title = title;
    this.completedYn = completedYn;
  }

  public void deleteTodo() {
    this.stateNo = 1;
  }
}
