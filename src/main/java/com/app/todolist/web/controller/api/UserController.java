package com.app.todolist.web.controller.api;

import static org.springframework.http.HttpStatus.CREATED;

import com.app.todolist.domain.user.UserService;
import com.app.todolist.web.controller.util.AbstractRestController;
import com.app.todolist.web.param.UserParams;
import com.app.todolist.web.util.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/user")
public class UserController extends AbstractRestController {

  private final UserService userService;

  @PostMapping
  public Response signup(@RequestBody UserParams param) {

    userService.signup(param);

    return new Response(CREATED);
  }

}
