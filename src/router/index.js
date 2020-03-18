import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: 
    {
      default: {darkMode: false},
      isDarkMode: {darkMode: false}
    }
  },
  {
    path: '/country-detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
