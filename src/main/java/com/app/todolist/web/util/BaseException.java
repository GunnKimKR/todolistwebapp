package com.app.todolist.web.util;

import org.springframework.http.HttpStatus;

public class BaseException extends AbstractException {

  public BaseException() {
    super();
  }

  public BaseException(Throwable e) {
    super(e);
  }

  public BaseException(String errorMessge) {
    super(errorMessge);
  }

  public BaseException(String errorMessge, Throwable e) {
    super(errorMessge, e);
  }

  public HttpStatus getHttpStatus() {
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

}
