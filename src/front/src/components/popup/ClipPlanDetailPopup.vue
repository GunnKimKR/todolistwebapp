<template>
  <PopupContainer>
    <a slot="btn" href="#;" class="pop-btn-close">
      <i class="fas fa-times"></i>
    </a>
    <button slot="btn" type="button" class="btn-remove">
      <i class="fas fa-trash"></i>
    </button>

    <div slot="header" class="date-box">
      <span class="date-box__date">15</span>
      <span class="date-box__month">
        September
        <span class="date-box__year">2020</span>
      </span>
      <span class="date-box__day">Monday</span>
    </div>

    <ul class="task-details" slot="body">
      <li class="task-details__item">
        <div class="label-square"></div>
        <strong class="task-detail-title">
          To do List Webapp Project
        </strong>
        <button type="button" class="btn-pin pin-icon">
          <i class="fas fa-feather-alt"></i>
        </button>
      </li>
      <li class="task-details__item">
        <div class="task-detail-icon">
          <i class="far fa-clock"></i>
        </div>
        <div class="task-detail-date">9월 15일(월) 09:00 - 12:00</div>
      </li>
      <li class="task-details__item">
        <div class="task-detail-icon">
          <i class="fas fa-redo"></i>
        </div>
        <div class="task-detail-recur">3</div>
      </li>
      <li class="task-details__item note">
        <div class="task-detail-icon">
          <i class="far fa-edit"></i>
        </div>
        <div class="task-detail-note">
          웹앱 기획(화면 레이아웃, 기능)<br />
          메인 페이지 와이어프레임<br />
          투두 웹앱 벤치마킹<br />
          웹앱 기획(화면 레이아웃, 기능)<br />
          메인 페이지 와이어프레임<br />
        </div>
      </li>
    </ul>
  </PopupContainer>
</template>

<script>
import PopupContainer from '@/components/common/PopupContainer.vue';

export default {
  components: {
    PopupContainer,
  },
};
</script>
