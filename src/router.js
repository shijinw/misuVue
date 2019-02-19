import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from './views/About.vue'
import press from './views/Press.vue'
import product from './views/Product.vue'
import stores from './views/Stores.vue'
import join from './views/Join.vue'
// 详情页的子路由
import Map from './views/PaPg/map.vue'
import detais from './views/PaPg/detais.vue'
import newsD from './views/PaPg/newsD.vue'
// about的子路由
import Course from './views/aboutC/course.vue'
import honor from './views/aboutC/honor.vue'
import Intro from './views/aboutC/intro.vue'
// product的子路由
import convering from './views/peoductC/covering.vue'
import curain from './views/peoductC/curain.vue'
import mural from './views/peoductC/mural.vue'
import wallpaper from './views/peoductC/wallpaper.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      redirect: '/about/intro',
      children: [{
          path: 'course',
          name: 'course',
          component: Course,
        },
        {
          path: 'honor',
          name: 'honor',
          component: honor,
        },
        {
          path: 'intro',
          name: 'intro',
          component: Intro,
        }
      ]
    },
    {
      path: '/press',
      name: 'press',
      component: press,
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      redirect: '/product/convering',
      children: [{
          path: 'convering',
          name: 'convering',
          component: convering
        },
        {
          path: 'curain',
          name: 'curain',
          component: curain,
        },
        {
          path: 'mural',
          name: 'mural',
          component: mural,
        },

        {
          path: 'wallpaper',
          name: 'wallpaper',
          component: wallpaper,
        }
      ]
    },
    {
      path: '/stores',
      name: 'stores',
      component: stores
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/detais',
      name: 'detais',
      component: detais
    },
    {
      path: '/newsD',
      name: 'newsD',
      component: newsD
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }

})