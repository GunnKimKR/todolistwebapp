package com.app.todolist.web.dto;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.ConstructorExpression;
import javax.annotation.Generated;

/**
 * com.app.todolist.web.dto.QTodoDTO is a Querydsl Projection type for TodoDTO
 */
@Generated("com.querydsl.codegen.ProjectionSerializer")
public class QTodoDTO extends ConstructorExpression<TodoDTO> {

    private static final long serialVersionUID = -1484353696L;

    public QTodoDTO(com.querydsl.core.types.Expression<Long> todoId, com.querydsl.core.types.Expression<String> nickname, com.querydsl.core.types.Expression<String> title, com.querydsl.core.types.Expression<String> compeledYn, com.querydsl.core.types.Expression<java.time.LocalDateTime> createdDt) {
        super(TodoDTO.class, new Class<?>[]{long.class, String.class, String.class, String.class, java.time.LocalDateTime.class}, todoId, nickname, title, compeledYn, createdDt);
    }

}

