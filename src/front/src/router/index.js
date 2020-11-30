import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/timeTable',
      component: () => import('@/views/TimeTablePage.vue'),
    },
    {
      path: '/todo',
      component: () => import('@/views/TodoPage.vue'),
    },
  ],
});

export default router;
