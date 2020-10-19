package com.app.todolist.web.controller.test;

import com.app.todolist.domain.user.User;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class TestController {

  @GetMapping
  public String test(Model model){

    User user1 = new User("geon", "geon@gmail.com");
    User user2 = new User("boram", "boram@gmail.com");

    List<User> userList = new ArrayList();
    userList.add(user1);
    userList.add(user2);

    model.addAttribute("message", "TEST 페이지 입니다.");
    model.addAttribute("userList", userList);

    return "test"; //templates/test.html
  }

  @GetMapping("/ajaxTest")
  @ResponseBody
  public String ajaxTest(){
    return "방통대 4.5학점 가즈아~~";
  }

  @GetMapping("/apiTest")
  public String apiTest(){
    return "apiTest";
  }

}
