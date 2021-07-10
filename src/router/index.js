import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/profile.vue'
import Detail from '../views/detail.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth:true,
    },
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component:SignUp,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requireAuth:true,
    },
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      requireAuth:true,
    },
    props:true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireAuth) && !store.state.auth
  ) {
    next({
      path: '/',
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
