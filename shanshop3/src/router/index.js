import Vue from 'vue'
import Router from 'vue-router'
import sindex from '../components/views/sindex'
import login from "../components/views/login";
import register from "../components/views/register";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'sindex',
      component: sindex
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
