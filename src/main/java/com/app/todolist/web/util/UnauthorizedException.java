package com.app.todolist.web.util;

import org.springframework.http.HttpStatus;

public class UnauthorizedException extends AbstractException {

  public UnauthorizedException() {
    super("Authorization is unvalid. Please Sign in Again.");
  }

  public UnauthorizedException(Throwable e) {
    super(e);
  }

  public UnauthorizedException(String errorMessage) {
    super(errorMessage);
  }

  public UnauthorizedException(String errorMessage, Throwable e) {
    super(errorMessage, e);
  }

  public HttpStatus getHttpStatus() {
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

}
