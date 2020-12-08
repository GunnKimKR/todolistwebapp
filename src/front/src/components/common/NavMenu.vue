<template>
  <nav id="nav">
    <h2 class="blind">메뉴</h2>
    <ul class="nav__tabmenu">
      <li class="nav__tabmenu__item" :class="tabmenuActiveClass[0]">
        <router-link to="/main">
          <img
            src="https://img.icons8.com/fluent-systems-regular/124/333333/clipboard.png"
            alt="클립보드"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item" :class="tabmenuActiveClass[1]">
        <router-link to="/timeTable">
          <img
            src="https://img.icons8.com/fluent-systems-regular/124/333333/overtime.png"
            alt="타임테이블"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item" :class="tabmenuActiveClass[2]">
        <router-link to="/todo">
          <img
            src="https://img.icons8.com/material-rounded/124/333333/list.png"
            alt="투두 리스트"
          />
        </router-link>
      </li>
      <li class="nav__tabmenu__item">
        <a href="#;">
          <img
            src="https://img.icons8.com/fluent-systems-regular/124/333333/search.png"
            alt="검색"
          />
        </a>
      </li>
      <li class="nav__tabmenu__item">
        <a href="#;">
          <img
            src="https://img.icons8.com/windows/124/333333/gender-neutral-user.png"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tabmenuActiveClass: [null, null, null],
    };
  },
  created() {
    const pageName = this.$router.currentRoute.name;
    const activeIdx = this.getPageIdx(pageName);
    this.tabmenuActiveClass[activeIdx] = 'active';
  },
  methods: {
    getPageIdx(pageName) {
      return pageName == 'main'
        ? 0
        : pageName == 'timeTable'
        ? 1
        : pageName == 'todo'
        ? 2
        : null;
    },
  },
};
</script>

<style scoped>
@import '~styles/navmenu.css';
</style>
