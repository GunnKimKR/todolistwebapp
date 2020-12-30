package com.app.todolist.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MailService {

  @Autowired
  public JavaMailSender javaMailSender;

  @Async
  public void sendMail(String email, String verifyCode) {
    SimpleMailMessage simpleMessage = new SimpleMailMessage();
    simpleMessage.setTo(email);
    simpleMessage.setSubject("To-Do-List-App Verification Code");
    simpleMessage.setText("Verification Code : " + verifyCode);
    try {
      javaMailSender.send(simpleMessage);
    }catch(Exception e){}
  }

}
