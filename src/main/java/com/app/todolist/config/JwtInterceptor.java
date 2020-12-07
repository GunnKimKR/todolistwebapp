package com.app.todolist.config;

import com.app.todolist.jwt.JwtService;
import com.app.todolist.web.util.UnauthorizedException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

public class JwtInterceptor implements HandlerInterceptor {
  private static final String HEADER_AUTH = "Authorization";

  @Autowired
  private JwtService jwtService;

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
      throws Exception {
    final String token = request.getHeader(HEADER_AUTH).split(" ")[1];

    if(token != null && jwtService.isUsable(token)){
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
