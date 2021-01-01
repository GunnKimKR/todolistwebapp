package com.app.todolist.domain.user;

import static com.app.todolist.domain.user.QJoinUser.joinUser;
import static com.app.todolist.domain.user.QSnsUser.snsUser;
import static com.app.todolist.domain.user.QUser.user;

import com.app.todolist.util.QdslSupport;
import com.app.todolist.web.dto.QUserDTO;
import com.app.todolist.web.dto.UserDTO;
import com.app.todolist.web.param.UserParams;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.dsl.Expressions;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@Repository
public class UserQdslRepository extends QdslSupport {

  final Expression<String> emptyValue = Expressions.stringTemplate("''");

  public UserQdslRepository() {
    super(User.class);
  }

  public UserDTO findByEmail(String email) {
    return select(
        new QUserDTO(user.userId, user.nickname, user.email, user.picture, joinUser.password))
        .from(user)
        .join(joinUser)
        .on(user.userId.eq(joinUser.userId))
        .where(
            user.email.eq(email),
            user.stateNo.eq(0)
        )
        .fetchOne();
  }

  public UserDTO findSnsUserByEmail(UserParams param) {
    return select(
        new QUserDTO(user.userId, user.nickname, user.email, user.picture,
            emptyValue, snsUser.snsType, snsUser.token))
        .from(user)
        .join(snsUser)
        .on(user.userId.eq(snsUser.userId))
        .where(
            !StringUtils.isEmpty(param.getUserId()) ?
              user.userId.eq(param.getUserId()) : null,
            !StringUtils.isEmpty(param.getEmail()) ?
              user.email.eq(param.getEmail()) : null,
            user.stateNo.eq(0)
        )
        .fetchOne();
  }

}
