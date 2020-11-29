'use strict'

const calendarDropBtn = document.querySelector('.btn-calendar-drop');
const calendarBody = document.querySelector('.calendar-body-group');

calendarDropBtn.addEventListener('click', function(){
  this.classList.toggle('active');
  calendarBody.classList.toggle('active');
})
