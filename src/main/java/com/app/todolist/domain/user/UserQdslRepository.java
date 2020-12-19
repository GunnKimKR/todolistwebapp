package com.app.todolist.domain.user;

import static com.app.todolist.domain.user.QJoinUser.joinUser;
import static com.app.todolist.domain.user.QUser.user;

import com.app.todolist.util.QdslSupport;
import com.app.todolist.web.dto.QUserDTO;
import com.app.todolist.web.dto.UserDTO;
import org.springframework.stereotype.Repository;

@Repository
public class UserQdslRepository extends QdslSupport {

  public UserQdslRepository() {
    super(User.class);
  }

  UserDTO findUserByEmail(String email) {
    return select(new QUserDTO(user.userId, user.nickname, user.email, joinUser.password))
        .from(user)
        .join(joinUser)
        .on(user.userId.eq(joinUser.userId))
        .where(user.email.contains(email))
        .fetchOne();
  }

}
