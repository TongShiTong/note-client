import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const components = {
  layout: () => import('@/views/layout'),
  index: () => import('@/views/index/index')
}

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '首页'
      },
      name: 'layout',
      component: components.layout,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: components.index
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
