import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const hamburgers = ref([
    {
      id: 1,
      title: 'Hamburguer Simples',
      cover: '/hamburger/comum.png',
      price: 23.24,
    },
    {
      id: 2,
      title: 'Hamburguer Simples',
      cover: '/hamburger/comum.png',
      price: 23.24,
    },
    {
      id: 3,
      title: 'Hamburguer Simples',
      cover: '/hamburger/comum.png',
      price: 23.24,
    },  
    {
      id: 4,
      title: 'Hamburguer Simples',
      cover: '/hamburger/comum.png',
      price: 23.24,
    },
    {
      id: 1,
      title: 'Hamburguer Simples',
      cover: '/hamburger/comum.png',
      price: 23.24,
    },
  ])

  const batatas = ref([
    {
      id: 1,
      title: 'Batata Simples',
      cover: '/batata/comum.png',
      price: 23.24,
    }
  ])

  return { hamburgers, batatas }
})

