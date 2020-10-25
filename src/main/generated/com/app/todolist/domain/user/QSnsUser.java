package com.app.todolist.domain.user;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QSnsUser is a Querydsl query type for SnsUser
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSnsUser extends EntityPathBase<SnsUser> {

    private static final long serialVersionUID = -1277964422L;

    public static final QSnsUser snsUser = new QSnsUser("snsUser");

    public final com.app.todolist.domain.util.QBaseEntity _super = new com.app.todolist.domain.util.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDt = _super.createdDt;

    public final StringPath snsType = createString("snsType");

    //inherited
    public final NumberPath<Integer> stateNo = _super.stateNo;

    public final StringPath token = createString("token");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedDt = _super.updatedDt;

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QSnsUser(String variable) {
        super(SnsUser.class, forVariable(variable));
    }

    public QSnsUser(Path<? extends SnsUser> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSnsUser(PathMetadata metadata) {
        super(SnsUser.class, metadata);
    }

}

