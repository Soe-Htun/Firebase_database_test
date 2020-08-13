import Vue from 'vue'
import VueRouter from 'vue-router'
import dbtest from '../views/dbtest.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dbtest',
    component: dbtest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
