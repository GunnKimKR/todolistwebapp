//package com.app.todolist.domain.user;
//
//import com.app.todolist.domain.todo.Todo;
//import com.app.todolist.domain.todo.TodoQdslRepository;
//import com.app.todolist.domain.todo.TodoRepository;
//import com.app.todolist.web.dto.TodoDTO;
//import com.app.todolist.web.param.TodoParams;
//import java.util.List;
//import javax.transaction.Transactional;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.annotation.Commit;
//import org.springframework.test.context.junit4.SpringRunner;
//
//@SpringBootTest
//@RunWith(SpringRunner.class)
//@Transactional
//@Commit
//public class UserRepositoryTest {
//
//  @Autowired
//  UserRepository userRepository;
//
//  @Autowired
//  TodoRepository todoRepository;
//
//  @Autowired
//  UserQdslRepository userQdslRepository;
//
//  @Autowired
//  TodoQdslRepository todoQdslRepository;
//
//  @Test
//  public void saveUser(){
//
//    User user1 = new User("geon1", "geon@gmail.com");
//    User user2 = new User("geon2", "geon@gmail.com");
//    User user3 = new User("boram1", "boram@gmail.com");
//    User user4 = new User("boram2", "boram@gmail.com");
//
//    userRepository.save(user1);
//    userRepository.save(user2);
//    userRepository.save(user3);
//    userRepository.save(user4);
//
//  }
//
//  @Test
//  public void findAllUser(){
//    //모든 회원 조회
//    List<User> allUserList = userRepository.findAll();
//
//    for (User user : allUserList) {
//      System.out.println("##allUser = " + user.toString());
//    }
//
//  }
//
//  @Test
//  public void findUser(){
//    //메일에 '@gmail'이 포함된 회원을 이름순으로 조회
////    List<User> userList = userRepository.findUserByEmailLikeOrderByNickname("%@gmail%");
//    final List<User> userList = userQdslRepository.findUserByEmail("@gmail");
//
//    for (User user : userList) {
//      System.out.println("##user = " + user.toString());
//    }
//  }
//
//  @Test
//  public void updateUser(){
//    //  1번 회원의 닉네임을 kimgeon으로 수정
//    userRepository.findById(Long.valueOf(1)).get().updateNickname("kimgeon");
//  }
//
//  @Test
//  public void saveTodo(){
//    Todo todo1 = new Todo(Long.valueOf(1), "투두리스트 마크업", 1);
//    Todo todo2 = new Todo(Long.valueOf(1), "텝스공부", 0);
//    Todo todo3 = new Todo(Long.valueOf(3), "백엔드설정", 1);
//    Todo todo4 = new Todo(Long.valueOf(3), "토익공부", 0);
//
//    todoRepository.save(todo1);
//    todoRepository.save(todo2);
//    todoRepository.save(todo3);
//    todoRepository.save(todo4);
//  }
//
//
//  @Test
//  public void selectTodoDto(){
//
//    TodoParams param = new TodoParams();
//    param.setUserId(Long.valueOf(1));
//
//    List<TodoDTO> todoList = todoQdslRepository.selectTodoDTO(param);
//    for (TodoDTO todoDTO : todoList) {
//      System.out.println("##########todoDTO = " + todoDTO.toString());
//    }
//
//  }
//
//}
//
