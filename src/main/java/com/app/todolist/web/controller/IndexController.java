package com.app.todolist.web.controller;

import com.app.todolist.web.dto.UserDTO;
import com.app.todolist.web.util.AppVariable;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
public class IndexController {

  private final HttpSession httpSession;

  @RequestMapping("/")
  public void index(HttpServletResponse response) throws IOException {
    Object user = httpSession.getAttribute("user");
    if(user != null){
      response.sendRedirect(AppVariable.FRONT_URL() + "?oAuthUserId=" + ((UserDTO)user).getUserId());
    }
  }

}
