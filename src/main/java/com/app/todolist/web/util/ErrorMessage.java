package com.app.todolist.web.util;

import lombok.Data;

@Data
public class ErrorMessage {

  private int code;
  private String errorMessage;
  private String referredUrl;

  public ErrorMessage(int code, String errorMessage, String referredUrl) {
    super();
    this.code = code;
    this.errorMessage = errorMessage;
    this.referredUrl = referredUrl;
  }

}
