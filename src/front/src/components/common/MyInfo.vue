<template>
  <section id="myinfo" class="myinfo-container">
    <div class="myinfo-container__inner">
      <h2 class="blind">나의 정보</h2>
      <header class="myinfo-header">
        <div
          class="myinfo-header__profile"
          :class="{ exist_picture: isExistPicture() }"
        >
          <img
            v-if="!isExistPicture()"
            src="https://img.icons8.com/windows/124/333333/gender-neutral-user.png"
            alt="프로필"
          />
          <img v-else :src="user.picture" />
        </div>
        <div class="myinfo-header__info">
          <dl>
            <dt>name:</dt>
            <dd>{{ user.nickname }}</dd>
            <dt>Email:</dt>
            <dd>{{ user.email }}</dd>
          </dl>
        </div>
        <div class="button-area">
          <a href="#" @click="logout" class="btn-primary">Logout</a>
          <a
            href="#popup"
            class="btn-primary"
            @click="deleteAccountPopup"
            :disabled="isGuestUser() || isSnsUser()"
          >
            Delete Account
          </a>
        </div>
      </header>
      <div class="myinfo-body">
        <div class="myinfo-body__phrase">
          <strong>Wise Quotes</strong>
          <figure>
            <blockquote>
              <p>과거에서 교훈을 얻을 수는 있어도 과거 속에 살 수는 없다.</p>
              <p>
                <!--  -->We can draw lessons from the past, but we cannot live
                in it.<!--  -->
              </p>
            </blockquote>
            <figcaption>— 린든 B. 존슨(Lyndon B. Johnson)</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <a href="#;" class="btn-close">close</a>
  </section>
</template>

<script>
import myinfo from '@/scripts/myinfo';
export default myinfo;
</script>

<style scoped>
@import '~styles/myinfo.css';
</style>
