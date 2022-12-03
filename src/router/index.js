import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegView from '../views/RegView.vue'
import ForgotView from '../views/ForgotView.vue'
import DashBoardView from '../views/DashBoardView.vue'
import SuccessfulPageViews from '../views/SuccessfulPageViews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reg',
      name: 'Login',
      component: RegView
    },
    {
      path: '/find-account',
      name: 'forgotPassword',
      component: ForgotView

    },
     

     {
     path: '/dashboard',
     name: 'dashboard',
     component: DashBoardView

     },

     {
      path: '/success',
      name: 'success',
      component: SuccessfulPageViews
 
      },
    {
      path: '/about',
      name: 'about',
      // component: SignUpView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
