package com.app.todolist.domain.todo;

import com.app.todolist.domain.util.BaseEntity;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Timetable extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long todoId;
  private Long userId;
  private String title;
  private String contents;
  private String labelCd;
  private int clipYn;
  private int sectionNo;
  private LocalDateTime startDt;
  private LocalDateTime endDt;
  private int orderNo;

}
