'use strict'


const toggleBtnBg = document.querySelector('.btn-toggle-bg');
const toggleBtn = document.getElementsByClassName('btn-toggle');
const loginContainer = document.getElementsByClassName('login-container');

toggleBtn[1].addEventListener('click', () => {
    toggleBtnBg.style.left = '50%';
    toggleBtn[0].classList.remove('active');
    toggleBtn[1].classList.add('active');
    for(var slide of loginContainer) {
        slide.classList.add('active');
    }
});

toggleBtn[0].addEventListener('click', () => {
    toggleBtnBg.style.left = '0';
    toggleBtn[1].classList.remove('active');
    toggleBtn[0].classList.add('active');
    for(var slide of loginContainer) {
        slide.classList.remove('active');
    }
});