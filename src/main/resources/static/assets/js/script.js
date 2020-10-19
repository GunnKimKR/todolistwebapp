'use strict'

/******************** Login page *********************/
if(document.querySelector('.sign-form-group')) {
    const toggleBtnBg = document.querySelector('.btn-toggle-bg');
    const toggleBtn = document.querySelectorAll('.btn-toggle');
    const sginForm = document.querySelectorAll('.sign-form');

    toggleBtn[1].addEventListener('click', () => {
        toggleBtnBg.style.left = '50%';
        toggleBtn[0].classList.remove('active');
        toggleBtn[1].classList.add('active');
        for(var slide of sginForm) {
            slide.classList.add('active');
        }
    });

    toggleBtn[0].addEventListener('click', () => {
        toggleBtnBg.style.left = '0';
        toggleBtn[1].classList.remove('active');
        toggleBtn[0].classList.add('active');
        for(var slide of sginForm) {
            slide.classList.remove('active');
        }
    });
}

/********************* Nav tabmenu *********************/
if(document.querySelector('#nav')) {
    const nav = document.querySelector('#nav');
    const tabMenuUnderline = document.querySelector('.tabmenu-underline');

    nav.addEventListener('click', (e) => {
        const tabMenuIndex = e.target.parentNode.dataset.index;
        tabMenuUnderline.style.left = 33.33 * tabMenuIndex + '%';
    });
}


/********************* Timetable, To do Page *********************/

if(document.querySelector('.btn-calendar-drop')) {
    const calendarDropBtn = document.querySelector('.btn-calendar-drop');
    const calendarBodyGroup = document.querySelector('.calendar-body-group.timetable');
    
    calendarDropBtn.addEventListener('click', () => {
        calendarDropBtn.classList.toggle('active');
        calendarBodyGroup.classList.toggle('active');
    });
}