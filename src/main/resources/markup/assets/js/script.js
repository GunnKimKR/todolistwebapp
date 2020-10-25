'use strict'

/******************** Login page *********************/
if(document.querySelector('.sign-form-group')) {
    
    // Toggle Button
    const toggleBtnBox = document.querySelector('.toggle-btn-box');
    const toggleBtnBg = document.querySelector('.toggle-btn-bg');
    
    toggleBtnBox.addEventListener('click', (e) => {
        if(e.target.nextElementSibling === null) {
            e.target.previousElementSibling.classList.remove('active');
            e.target.classList.add('active');
            toggleBtnBg.classList.add('active');
            document.querySelector('.sign-in-form').classList.add('active');
            document.querySelector('.sign-up-form').classList.add('active');
        } else {
            e.target.nextElementSibling.classList.remove('active');
            e.target.classList.add('active');
            toggleBtnBg.classList.remove('active');
            document.querySelector('.sign-in-form').classList.remove('active');
            document.querySelector('.sign-up-form').classList.remove('active');
        }
    });

    // Input Placeholder
    const signFormContainer = document.querySelector('.sign-form-slider-container');
    const popFormContainer = document.querySelector('.pop-container');

    signFormContainer.addEventListener('focusin', inputPlaceholderAnim(this));
    popFormContainer.addEventListener('focusin', inputPlaceholderAnim(this));

    function inputPlaceholderAnim(form) {
        form.addEventListener('focusin', (e) => {
            const signFormInput = e.target;
            if(signFormInput.className.includes('input-sign-form') && e.target.value === '') {
                signFormInput.parentElement.classList.add('active');
            }
    
            signFormInput.addEventListener('focusout', () => {
                if(signFormInput.value === ''){
                    signFormInput.parentElement.classList.remove('active');
                }
            });
        });
    }
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


/********************* Calendar drop button *********************/
if(document.querySelector('.btn-calendar-drop')) {
    const calendarDropBtn = document.querySelector('.btn-calendar-drop');
    const calendarBodyGroup = document.querySelector('.calendar-body-group');
    
    calendarDropBtn.addEventListener('click', () => {
        calendarDropBtn.classList.toggle('active');
        calendarBodyGroup.classList.toggle('active');
    });
}