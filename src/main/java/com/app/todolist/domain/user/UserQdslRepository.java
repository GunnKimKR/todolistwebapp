package com.app.todolist.domain.user;

import static com.app.todolist.domain.user.QUser.user;

import com.app.todolist.util.QdslSupport;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public class UserQdslRepository extends QdslSupport {

  public UserQdslRepository() {
    super(User.class);
  }

  List<User> findUserByEmail(String email){
    return select(user)
        .from(user)
        .where(user.email.contains(email))
        .orderBy(user.nickname.asc())
        .fetch();
  }

}
