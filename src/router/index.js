import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/layout'
    },
    {
      path: '/layout',
      component: () => import('../views/layout.vue'),
      //二级路由
      children: [
        {
          path: '/button',
          component: () => import('../components/Button/src/index.vue')
        },
        {
          path: '/container',
          component: () => import('../components/Container/src/index.vue')
        }
      ]
    }
  ]
})

export default router
