package com.app.todolist.web.util;

public class AppVariable {

  private final static String profile = System.getProperty("profile");

  public final static String FRONT_URL(){
    if (profile != null && profile.equals("local")) {
      return "http://localhost:8080";
    } else {
      return "http://todo-spring-app.s3-website.ap-northeast-2.amazonaws.com";
    }
  }

}
