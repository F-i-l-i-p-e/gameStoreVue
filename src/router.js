import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
