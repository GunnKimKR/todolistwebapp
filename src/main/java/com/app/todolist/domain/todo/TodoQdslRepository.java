package com.app.todolist.domain.todo;

import static com.app.todolist.domain.todo.QTodo.todo;
import static com.app.todolist.domain.user.QUser.user;

import com.app.todolist.util.QdslSupport;
import com.app.todolist.web.dto.QTodoDTO;
import com.app.todolist.web.dto.TodoDTO;
import com.app.todolist.web.param.TodoParams;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@Repository
public class TodoQdslRepository extends QdslSupport {

  public TodoQdslRepository() {
    super(Todo.class);
  }

  public List<TodoDTO> selectTodoDTO(TodoParams param) {
    return select(new QTodoDTO(todo.todoId, user.nickname,
        todo.title, todo.completedYn, todo.createdDt))
        .from(user)
        .join(todo)
        .on(user.userId.eq(todo.userId))
        .where(
            StringUtils.isEmpty(param.getUserId()) ? null : user.userId.eq(param.getUserId()),
            StringUtils.isEmpty(param.getLoc()) ? null :
                param.getLoc().equals("main") ? todo.clipYn.eq(1) :
                    param.getLoc().equals("timeTable") ? todo.startDt.isNotNull() : null,
            todo.stateNo.eq(0)
        )
        .fetch();
  }

  public TodoDTO selectTodoDtoById(Long todoId) {
    return select(new QTodoDTO(todo.todoId, user.nickname,
        todo.title, todo.completedYn, todo.createdDt))
        .from(user)
        .join(todo)
        .on(user.userId.eq(todo.userId))
        .where(
            todo.todoId.eq(todoId),
            todo.stateNo.eq(0)
        )
        .fetchOne();
  }
}
