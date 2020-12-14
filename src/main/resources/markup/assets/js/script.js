'use strict'

/******************** Login page *********************/
if(document.querySelector('.member-registration')) {

    // Toggle Button
    const toggleBtnGroup = document.querySelector('.toggle-btn-group');
    const toggleBtnBg = document.querySelector('.toggle-btn-bg');

    toggleBtnGroup.addEventListener('click', (e) => {
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
    const signFormSlider = document.querySelector('.sign-form-slider');
    const popWrap = document.querySelector('.pop-wrap');

    inputPlaceholderAnim(signFormSlider);
    inputPlaceholderAnim(popWrap);

    function inputPlaceholderAnim(form) {
        form.addEventListener('focusin', (e) => {
            const signFormInput = e.target;
            if(signFormInput.localName === 'input') {
                if(signFormInput.value === '' || signFormInput.value) {
                    signFormInput.parentElement.classList.add('active');
                }
            }
        });
        form.addEventListener('focusout', (e) => {
            const signFormInput = e.target;
            if(signFormInput.localName === 'input') {
                if(signFormInput.value === ''){
                    signFormInput.parentElement.classList.remove('active');
                }
            }
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