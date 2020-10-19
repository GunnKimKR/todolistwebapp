package com.app.todolist.web.util;

import org.springframework.http.HttpStatus;

public class BaseException extends AbstractException {

  public BaseException() {
    super();
  }

  public BaseException(Throwable e) {
    super(e);
  }

  public BaseException(String errorMessage) {
    super(errorMessage);
  }

  public BaseException(String errorMessage, Throwable e) {
    super(errorMessage, e);
  }

  public HttpStatus getHttpStatus() {
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

}
