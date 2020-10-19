package com.app.todolist.domain.todo;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTodo is a Querydsl query type for Todo
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTodo extends EntityPathBase<Todo> {

    private static final long serialVersionUID = 837607924L;

    public static final QTodo todo = new QTodo("todo");

    public final com.app.todolist.domain.util.QBaseEntity _super = new com.app.todolist.domain.util.QBaseEntity(this);

    public final StringPath completedYn = createString("completedYn");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDt = _super.createdDt;

    public final NumberPath<Integer> orderNo = createNumber("orderNo", Integer.class);

    //inherited
    public final NumberPath<Integer> stateNo = _super.stateNo;

    public final StringPath title = createString("title");

    public final NumberPath<Long> todoId = createNumber("todoId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedDt = _super.updatedDt;

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QTodo(String variable) {
        super(Todo.class, forVariable(variable));
    }

    public QTodo(Path<? extends Todo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTodo(PathMetadata metadata) {
        super(Todo.class, metadata);
    }

}

