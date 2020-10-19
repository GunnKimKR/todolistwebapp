package com.app.todolist.web.util;

import static org.springframework.http.HttpStatus.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class Response {

  private int code;
  private boolean success;
  private String message;
  private Date timestamp;
  private Map<String, Object> data;
  private ErrorMessage error;

  public Response() {
    this(OK);
  }

  public Response(HttpStatus httpStatus) {
    this.data = new HashMap<>();
    this.code = httpStatus.value();
    this.success = (httpStatus.isError()) ? false : true;
    this.message = httpStatus.getReasonPhrase();
    this.timestamp = new Date();
  }

  public Response(AbstractException ex, String referredUrl) {
    this(ex, ex.getMessage(), referredUrl);
  }

  public Response(AbstractException ex, String message, String referredUrl) {
    this(ex.getHttpStatus());
    this.error = new ErrorMessage(code, message, referredUrl);
  }

  public Response(String key, Object result) {
    this(key, result, OK);
  }

  public Response(String key, Object result, HttpStatus status) {
    this(status);
    this.add(key, result);
  }

  public void add(String key, Object result) {
    this.data.put(key, result);
  }

  public void remove(String key) {
    this.data.remove(key);
  }

}
