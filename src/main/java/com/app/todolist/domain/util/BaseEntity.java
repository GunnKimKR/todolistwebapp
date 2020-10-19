package com.app.todolist.domain.util;

import java.time.LocalDateTime;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
// 여러 테이블에서 상속받아 공통 컬럼으로 사용할 수 있게 해준다.
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {

  // 데이터가 INSERT될 때 created_dt가 자동으로 현재시간으로 들어간다.
  @CreatedDate
  private LocalDateTime createdDt;

  // 데이터가 UPDATE될 때 updated_dt가 자동으로 현재시간으로 들어간다.
  @LastModifiedDate
  private LocalDateTime updatedDt;

  public int stateNo;

}
