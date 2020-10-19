package com.app.todolist.web.util;

import org.springframework.http.HttpStatus;

public abstract class AbstractException extends RuntimeException {

  public AbstractException() {
    super();
  }

  public AbstractException(String msg) {
    super(msg);
  }

  public AbstractException(Throwable e) {
    super(e);
  }

  public AbstractException(String errorMessge, Throwable e) {
    super(errorMessge, e);
  }

  public abstract HttpStatus getHttpStatus();

}
