import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const hamburgers = ref([
    {
      id: 1,
      title: 'Cheeseburger Clássico	',
      cover: '/hamburgers/1.png',
      price: 14.99,
    },
    {
      id: 2,
      title: 'Cheddar Bacon Deluxe',
      cover: '/hamburgers/2.png',
      price: 22.99,
    },
    {
      id: 3,
      title: 'Smoky Bacon Burger',
      cover: '/hamburgers/3.png',
      price: 24.99,
    },
    {
      id: 4,
      title: 'Big Duplo Alface',
      cover: '/hamburgers/4.png',
      price: 25.99,
    },
    {
      id: 5,
      title: 'Cheddar Duplo Picles',
      cover: '/hamburgers/5.png',
      price: 21.99,
    },
    {
      id: 6,
      title: 'Duplo Cheddar Cebola',
      cover: '/hamburgers/6.png',
      price: 23.99,
    },
    {
      id: 7,
      title: 'Triplo Cheeseburger',
      cover: '/hamburgers/7.png',
      price: 26.99,
    },
    {
      id: 8,
      title: 'Cheeseburger Simples',
      cover: '/hamburgers/8.png',
      price: 10.99,
    },
    {
      id: 9,
      title: 'McBkChicken Clássico',
      cover: '/hamburgers/9.png',
      price: 15.99,
    },
    {
      id: 10,
      title: 'Duplo McBkChicken',
      cover: '/hamburgers/10.png',
      price: 18.99,
    },
  ])

  const batatas = ref([
    {
      id: 1,
      title: 'Batata Pequena',
      cover: '/batata/pequena.png',
      price: 8.99,
    },
    {
      id: 2,
      title: 'Batata Media',
      cover: '/batata/media.png',
      price: 10.99,
    },
    {
      id: 3,
      title: 'Batata Grande',
      cover: '/batata/grande.png',
      price: 12.99,
    },
  ])

  const hotdogs = ref([
    {
      id: 1,
      title: 'Hot Dog Tradicional',
      cover: '/hotdogs/1.png',
      price: 8,
    },
    {
      id: 2,
      title: 'Hot Dog Americano',
      cover: '/hotdogs/2.png',
      price: 9,
    },
    {
      id: 3,
      title: 'Hot Dog Cheddar Bacon',
      cover: '/hotdogs/3.png',
      price: 12,
    },
    {
      id: 4,
      title: 'Hot Dog Brasileiro',
      cover: '/hotdogs/4.png',
      price: 13,
    },
  ])

  const bebidas = ref([
    {
      id: 1,
      title: 'Refil Refrigerante 500ml',
      cover: '/bebidas/4.png',
      price: 12.99,
    },
    {
      id: 2,
      title: 'Suco de Laranja 500ml',
      cover: '/bebidas/5.png',
      price: 5,
    },
    {
      id: 3,
      title: 'Suco de Uva 500ml',
      cover: '/bebidas/6.png',
      price: 5,
    },
    {
      id: 4,
      title: 'Agua McBk 500ml',
      cover: '/bebidas/7.png',
      price: 4.5,
    },
  ])

  const sobremesas = ref([
    {
      id: 1,
      title: 'Casquinha Clássica Burger Donald’s',
      cover: '/sobremesa/1.png',
      price: 3.5,
    },
    {
      id: 2,
      title: 'Cone ChocoMix',
      cover: '/sobremesa/2.png',
      price: 6.0,
    },
    {
      id: 3,
      title: 'Sundae ChocoMania',
      cover: '/sobremesa/3.png',
      price: 7.5,
    },
    {
      id: 4,
      title: 'Sundae MorangoPop',
      cover: '/sobremesa/4.png',
      price: 7.5,
    },
    {
      id: 5,
      title: 'Shake ChocoPower',
      cover: '/sobremesa/5.png',
      price: 10,
    },
    {
      id: 6,
      title: 'Shake MorangoPower',
      cover: '/sobremesa/6.png',
      price: 10,
    },
  ])

  return { hamburgers, batatas, hotdogs, bebidas, sobremesas }
})
