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
    {
      path: '/humburger',
      name: 'humburger',
      component: () => import('../views/Cardapio/HumburgerView.vue'),
    },
    {
      path: '/batata',
      name: 'batata',
      component: () => import('../views/Cardapio/BatataView.vue'),
    },
    {
      path: '/cachorro',
      name: 'cachorro',
      component: () => import('../views/Cardapio/CachorroView.vue'),
    },
    {
      path: '/bebida',
      name: 'bebida',
      component: () => import('../views/Cardapio/BebidaView.vue'),
    },
    {
      path: '/sobremesa',
      name: 'sobremesa',
      component: () => import('../views/Cardapio/SobremesaView.vue'),
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: () => import('../views/CartView.vue'),
    },
  ],
})

export default router
