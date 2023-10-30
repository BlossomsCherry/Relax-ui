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
          path: '/home',
          component: () => import('../views/home.vue')
        },
        {
          path: '/componentsUI',
          redirect: '/componentsUI/button',
          component: () => import('../components/componentsUI/index.vue'),
          children: [
            {
              path: 'layout',
              name: 'Layout',
              component: () => import('../../packages/Layout/doc/doc.md')
            },
            {
              path: 'color',
              name: 'Color',
              component: () => import('../../packages/Color/doc/doc.md')
            },
            {
              path: 'icon',
              name: 'Icon',
              component: () => import('../../packages/Icon/doc/doc.md')
            },
            {
              path: 'button',
              name: 'Button',
              component: () => import('../../packages/Button/doc/doc.md')
            },
            {
              path: 'input',
              name: 'Input',
              component: () => import('../../packages/Input/doc/doc.md')
            },
            {
              path: 'switch',
              name: 'Switch',
              component: () => import('../../packages/Switch/doc/doc.md')
            },
            {
              path: 'loading',
              name: 'Loading',
              component: () => import('../../packages/Loading/doc/doc.md')
            },
            {
              path: 'Dropdown',
              name: 'Dropdown',
              component: () => import('../../packages/Dropdown/doc/show.vue')
            },
            {
              path: 'Link',
              name: 'Link',
              component: () => import('../../packages/Link/doc/show.vue')
            },
            {
              path: 'Message',
              name: 'Message',
              component: () => import('../../packages/Message/doc/doc.md')
            },
            {
              path: 'Rate',
              name: 'Rate',
              component: () => import('../../packages/Rate/doc/doc.md')
            }
          ]
        }
      ]
    }
  ]
})

export default router
