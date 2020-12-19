package com.app.todolist.web.controller.api;

import static org.springframework.http.HttpStatus.CREATED;

import com.app.todolist.domain.user.UserService;
import com.app.todolist.jwt.JwtService;
import com.app.todolist.mail.MailService;
import com.app.todolist.web.controller.util.AbstractRestController;
import com.app.todolist.web.dto.UserDTO;
import com.app.todolist.web.param.UserParams;
import com.app.todolist.web.util.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController extends AbstractRestController {

  private final UserService userService;
  private final JwtService jwtService;
  private final MailService mailService;

  @PostMapping
  public Response signup(@RequestBody UserParams param) {
    userService.signup(param);
    return new Response(CREATED);
  }

  @GetMapping("/duplicateEmailCount")
  public Response duplicateEmailCount(String email) {
    int duplicateEmailCount = userService.duplicateEmailCount(email);
    return new Response("duplicateEmailCount", duplicateEmailCount);
  }

  @PostMapping("/login")
  public Response login(@RequestBody UserParams param) {
    UserDTO user = userService.login(param);
    String token = jwtService.create("user", user, "joinUser");
    user.setToken(token);
    return new Response("user", user);
  }

  @GetMapping("/sendVerifyCode")
  public Response sendVerifyCode(String email){
    String verifyCode = "T-";
    for(int i = 0; i < 6; i++) {
      double dValue = Math.random() * 10;
      verifyCode += (int)dValue;
    }
    mailService.sendMail(email, verifyCode);
    return new Response("verifyCode", verifyCode);
  }

  @PutMapping("/resetPassword")
  public Response resetPassword(@RequestBody UserParams param){
    UserDTO user = userService.resetPassword(param);
    return new Response("user", user);
  }

}
