package com.app.todolist;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
@EnableEncryptableProperties
public class TodolistApplication {

  public static void main(String[] args) {
    SpringApplication.run(TodolistApplication.class, args);
  }

}
