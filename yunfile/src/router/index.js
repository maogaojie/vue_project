import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'
import lost_password from '@/components/lost_password'
import information from '@/components/information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/lost_password',
      name: 'lost_password',
      component: lost_password
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/index*',
      name: 'index',
      component: index
    },
  ]
})
