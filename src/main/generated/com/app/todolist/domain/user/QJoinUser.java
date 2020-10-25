package com.app.todolist.domain.user;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QJoinUser is a Querydsl query type for JoinUser
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QJoinUser extends EntityPathBase<JoinUser> {

    private static final long serialVersionUID = 1155804382L;

    public static final QJoinUser joinUser = new QJoinUser("joinUser");

    public final com.app.todolist.domain.util.QBaseEntity _super = new com.app.todolist.domain.util.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDt = _super.createdDt;

    public final StringPath loginId = createString("loginId");

    public final StringPath password = createString("password");

    //inherited
    public final NumberPath<Integer> stateNo = _super.stateNo;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedDt = _super.updatedDt;

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QJoinUser(String variable) {
        super(JoinUser.class, forVariable(variable));
    }

    public QJoinUser(Path<? extends JoinUser> path) {
        super(path.getType(), path.getMetadata());
    }

    public QJoinUser(PathMetadata metadata) {
        super(JoinUser.class, metadata);
    }

}

