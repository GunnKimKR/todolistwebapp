<template>
  <div id="wrap">
    <NavMenu></NavMenu>
    <main id="main" class="main-container">
      <Calendar></Calendar>
      <ClipPlans></ClipPlans>
    </main>
  </div>
</template>

<script>
import NavMenu from '@/components/common/NavMenu.vue';
import Calendar from '@/components/common/Calendar.vue';
import ClipPlans from '@/components/main/ClipPlans.vue';

export default {
  components: {
    NavMenu,
    Calendar,
    ClipPlans,
  },
};
</script>

<style></style>
