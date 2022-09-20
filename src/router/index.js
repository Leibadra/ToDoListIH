import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import SignUpView from '../views/SignUpView.vue';
// import Register from '../views/RegisterView.vue';
// import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
  },
  // {
  // path: '/register',
  // name: 'register',
  // component: Register,
  // },
  // {
  // path: '/login',
  // name: 'login',
  // component: Login,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
