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

/********************* Calendar drop button *********************/
if(document.querySelector('.btn-calendar-drop')) {
    const calendarDropBtn = document.querySelector('.btn-calendar-drop');
    const calendarBodyGroup = document.querySelector('.calendar-body-group');

    calendarDropBtn.addEventListener('click', () => {
        calendarDropBtn.classList.toggle('active');
        calendarBodyGroup.classList.toggle('active');
    });
}

/********************* Plan Details *********************/
if(document.querySelector('.plan-details-container')) {
    const planDetailsCnt = document.querySelector('.plan-details-container');
    const closeBtn = document.querySelector('.btn-close');

    closeBtn.addEventListener('click', () => {
        planDetailsCnt.classList.remove('active');
    });

    const planListItem = document.querySelector('.clip-plans-list');
    planListItem.addEventListener('click', () => {
        planDetailsCnt.classList.add('active');
    })
}

/********************* Task Add Button *********************/
if(document.querySelector('.task-input-form-container')) {
    const taskInputCnt = document.querySelector('.task-input-form-container');
    const taskAddBtn = document.querySelector('.task-input-btn');

    taskAddBtn.addEventListener('click', () => {
        taskInputCnt.classList.toggle('active');
        taskAddBtn.classList.toggle('active');
    })
}