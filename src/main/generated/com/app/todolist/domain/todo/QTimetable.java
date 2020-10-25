package com.app.todolist.domain.todo;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTimetable is a Querydsl query type for Timetable
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTimetable extends EntityPathBase<Timetable> {

    private static final long serialVersionUID = 380044339L;

    public static final QTimetable timetable = new QTimetable("timetable");

    public final com.app.todolist.domain.util.QBaseEntity _super = new com.app.todolist.domain.util.QBaseEntity(this);

    public final NumberPath<Integer> clipYn = createNumber("clipYn", Integer.class);

    public final StringPath contents = createString("contents");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDt = _super.createdDt;

    public final DateTimePath<java.time.LocalDateTime> endDt = createDateTime("endDt", java.time.LocalDateTime.class);

    public final StringPath labelCd = createString("labelCd");

    public final NumberPath<Integer> orderNo = createNumber("orderNo", Integer.class);

    public final StringPath sectionNo = createString("sectionNo");

    public final DateTimePath<java.time.LocalDateTime> startDt = createDateTime("startDt", java.time.LocalDateTime.class);

    //inherited
    public final NumberPath<Integer> stateNo = _super.stateNo;

    public final StringPath title = createString("title");

    public final NumberPath<Long> todoId = createNumber("todoId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedDt = _super.updatedDt;

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QTimetable(String variable) {
        super(Timetable.class, forVariable(variable));
    }

    public QTimetable(Path<? extends Timetable> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTimetable(PathMetadata metadata) {
        super(Timetable.class, metadata);
    }

}

