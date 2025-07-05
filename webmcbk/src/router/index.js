import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/escolha',
      name: 'escolha',
      component: () => import('../views/EscolhaView.vue'),
    },
    {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue'),
    },
  ],
})

export default router
