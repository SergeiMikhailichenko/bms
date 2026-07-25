import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/MainPage.vue') },
  { path: '/smarthome', name: 'SmartHome', component: () => import('@/views/SmartHome.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
