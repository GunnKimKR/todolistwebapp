package com.app.todolist.web.util;

import org.springframework.http.HttpStatus;

public class InvalidRequestException extends AbstractException {

  public InvalidRequestException() {
    super();
  }

  public InvalidRequestException(Throwable e) {
    super(e);
  }

  public InvalidRequestException(String errorMessage) {
    super(errorMessage);
  }

  public InvalidRequestException(String errorMessage, Throwable e) {
    super(errorMessage, e);
  }

  public HttpStatus getHttpStatus() {
    return HttpStatus.BAD_REQUEST;
  }

}
