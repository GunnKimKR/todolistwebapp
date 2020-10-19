package com.app.todolist.domain.todo;

import com.app.todolist.web.dto.TodoDTO;
import com.app.todolist.web.param.TodoParams;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class TodoService {

  private final TodoQdslRepository todoQdslRepository;
  private final TodoRepository todoRepository;

  public List<TodoDTO> selectTodoDto(TodoParams param) {
    return todoQdslRepository.selectTodoDTO(param);
  }

  public TodoDTO selectTodoDtoById(Long todoId) {
    return todoQdslRepository.selectTodoDtoById(todoId);
  }

  public void save(Todo todo) {
    todoRepository.save(todo);
  }

  public Optional<Todo> findById(Long todoId) {
    return todoRepository.findById(todoId);
  }

  public void updateTodo(Todo todo, TodoParams param) {
    todo.updateTodo(param.getTitle(), param.getCompletedYn());
  }

  public void deletedTodo(Todo todo) {
    todo.deleteTodo();
  }
}
