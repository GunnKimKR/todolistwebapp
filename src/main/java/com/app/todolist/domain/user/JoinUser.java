package com.app.todolist.domain.user;

import com.app.todolist.domain.util.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class JoinUser extends BaseEntity {

  @Id
  private Long userId;
  private String loginId;
  private String password;

}
