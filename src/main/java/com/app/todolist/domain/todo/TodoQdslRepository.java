package com.app.todolist.domain.todo;

import static com.app.todolist.domain.todo.QTodo.todo;
import static com.app.todolist.domain.user.QUser.user;

import com.app.todolist.util.QdslSupport;
import com.app.todolist.web.dto.QTodoDTO;
import com.app.todolist.web.dto.TodoDTO;
import com.app.todolist.web.param.TodoParams;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.Expressions;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@Repository
public class TodoQdslRepository extends QdslSupport {

  final Expression<String> emptyValue = Expressions.stringTemplate("''");

  public TodoQdslRepository() {
    super(Todo.class);
  }

  public List<TodoDTO> selectTodoDTO(TodoParams param) {
    return select(
        new QTodoDTO(user.userId, user.nickname, todo.todoId, todo.title, todo.completedYn,
            todo.labelCd, todo.clipYn, todo.sectionNo, todo.orderNo, todo.beginDate,
            todo.beginTime, todo.endTime, todo.recurYn, todo.recurOption, todo.recurContents,
            todo.recurSubIndex, todo.recurSubDayIndex, todo.recurSubValue))
        .from(user)
        .join(todo)
        .on(user.userId.eq(todo.userId))
        .where(
            StringUtils.isEmpty(param.getUserId()) ? null : user.userId.eq(param.getUserId()),
            StringUtils.isEmpty(param.getLoc()) ? null :
                param.getLoc().equals("main") ?
                    todo.clipYn.eq(1)
                    .and(todo.beginDate.eq(emptyValue)
                      .or(todo.beginDate.eq(param.getBeginDate()))
                    ) :
                param.getLoc().equals("timeTable") ? todo.beginDate.eq(param.getBeginDate()) :
                param.getLoc().equals("todo") ? todo.beginTime.eq(emptyValue) : null,
            todo.stateNo.eq(0)
        )
        .orderBy(todo.beginDate.asc(), todo.beginTime.asc(), todo.todoId.asc())
        .fetch();
  }

  public TodoDTO selectTodoDtoById(Long todoId) {
    return null;
  }
}
