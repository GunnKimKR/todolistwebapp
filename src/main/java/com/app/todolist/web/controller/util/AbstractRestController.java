package com.app.todolist.web.controller.util;

import com.app.todolist.web.util.AbstractException;
import com.app.todolist.web.util.InvalidRequestException;
import com.app.todolist.web.util.Response;
import com.app.todolist.web.util.BaseException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class AbstractRestController {

  private final String DEFAULT_ERROR_MSG = "Internal Server Error";

  @ExceptionHandler(AbstractException.class)
  public Response AbstractException(HttpServletRequest req, HttpServletResponse res,
      final AbstractException exception) {
    log.error("AbstractException : " + exception.getMessage());
    res.setStatus(exception.getHttpStatus().value());
    String errorMsg = exception.getMessage() == null ? DEFAULT_ERROR_MSG : exception.getMessage();
    return new Response(exception, errorMsg, req.getRequestURL().toString());
  }

  @ExceptionHandler(IllegalArgumentException.class)
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public Response illegalArgumentException(HttpServletRequest req,
      final IllegalArgumentException exception) {
    log.error("IllegalArgumentException : " + exception.getMessage());
    return new Response(new InvalidRequestException(exception.getMessage(), exception),
        req.getRequestURL().toString());
  }

  @ExceptionHandler(Exception.class)
  @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
  public Response exception(HttpServletRequest req, final Exception exception) {
    log.error("Exception : " + exception.getMessage());
    return new Response(new BaseException(exception.getMessage(), exception),
        req.getRequestURL().toString());
  }

}
