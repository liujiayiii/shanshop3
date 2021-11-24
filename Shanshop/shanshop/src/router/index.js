import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import Ssindex from "../views/Ssindex";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'ssindex',
      component:Ssindex
    }
  ]
})
