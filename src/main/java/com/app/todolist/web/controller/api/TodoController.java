package com.app.todolist.web.controller.api;

import static org.springframework.http.HttpStatus.CREATED;

import com.app.todolist.domain.todo.Todo;
import com.app.todolist.domain.todo.TodoService;
import com.app.todolist.web.controller.util.AbstractRestController;
import com.app.todolist.web.dto.TodoDTO;
import com.app.todolist.web.param.TodoParams;
import com.app.todolist.web.util.BaseException;
import com.app.todolist.web.util.InvalidRequestException;
import com.app.todolist.web.util.Response;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todo")
public class TodoController extends AbstractRestController {

  private final TodoService todoService;


  private Response todoListResponse(TodoParams param) {
    List<TodoDTO> todoList = todoService.selectTodoDto(param);

    return new Response("todoList", todoList);
  }

  private Todo findTodo(Long todoId) {
    return todoService.findById(todoId)
        .orElseThrow(() -> new BaseException("존재하지 않는 Todo입니다."));
  }


  @GetMapping
  public Response selectTodoAll() {

    TodoParams param = new TodoParams();

    return todoListResponse(param);
  }

  @GetMapping("/{todoId}")
  public Response selectTodoById(@PathVariable Long todoId) {

    if (todoId < 1) {
      throw new InvalidRequestException("유효하지 않은 Todo번호입니다.");
    }

    TodoDTO todo = todoService.selectTodoDtoById(todoId);

    if (todo == null) {
      throw new BaseException("데이터가 존재하지 않습니다.");
    }

    return new Response("todo", todo);
  }

  @GetMapping("/user/{userId}")
  public Response selectTodoByUserId(@PathVariable Long userId, TodoParams param) {
    if (userId < 1) {
      throw new InvalidRequestException("유효하지 않은 회원번호입니다.");
    }

    return todoListResponse(param);
  }

  @PostMapping
  public Response writeTodo(@RequestBody TodoParams param) {
    Todo todo = new Todo(param);
    todoService.save(todo);
    return new Response(CREATED);
  }

  @PutMapping("/{todoId}")
  public Response updateTodo(@PathVariable Long todoId, TodoParams param) {

    Todo todo = findTodo(todoId);
    todoService.updateTodo(todo, param);

    return new Response();
  }

  @DeleteMapping("/{todoId}")
  public Response deleteTodo(@PathVariable Long todoId) {

    Todo todo = findTodo(todoId);
    todoService.deleteTodo(todo);

    return new Response();
  }

}
