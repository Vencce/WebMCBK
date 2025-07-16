import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  const hamburgers = ref([
    {
      id: 1,
      title: 'Cheeseburger Clássico	',
      cover: '/hamburgers/1.png',
      description: 'Pão, hambúrguer de carne, queijo, alface, tomate e molho especial',
      price: 14.99,
    },
    {
      id: 2,
      title: 'Cheddar Bacon Deluxe',
      cover: '/hamburgers/2.png',
      description: 'Pão, hambúrguer de carne, cheddar, bacon, alface, tomate e molho especial',
      price: 22.99,
    },
    {
      id: 3,
      title: 'Smoky Bacon Burger',
      cover: '/hamburgers/3.png',
      description: 'Pão, hambúrguer de carne, queijo, bacon, alface, tomate e molho especial',
      price: 24.99,
    },
    {
      id: 4,
      title: 'Big Duplo Alface',
      cover: '/hamburgers/4.png',
      description: 'Pão, 2 hambúrgueres de carne, queijo, alface, tomate e molho especial',
      price: 25.99,
    },
    {
      id: 5,
      title: 'Cheddar Duplo Picles',
      cover: '/hamburgers/5.png',
      description: 'Pão, 2 hambúrgueres de carne, cheddar, picles, alface, tomate e molho especial',
      price: 21.99,
    },
    {
      id: 6,
      title: 'Duplo Cheddar Cebola',
      cover: '/hamburgers/6.png',
      description: 'Pão, 2 hambúrgueres de carne, cheddar, cebola, alface, tomate e molho especial',
      price: 23.99,
    },
    {
      id: 7,
      title: 'Triplo Cheeseburger',
      cover: '/hamburgers/7.png',
      description: 'Pão, 3 hambúrgueres de carne, queijo, alface, tomate e molho especial',
      price: 26.99,
    },
    {
      id: 8,
      title: 'Cheeseburger Simples',
      cover: '/hamburgers/8.png',
      description: 'Pão, hambúrguer de carne, queijo e molho especial',
      price: 10.99,
    },
    {
      id: 9,
      title: 'McBkChicken Clássico',
      cover: '/hamburgers/9.png',
      description: 'Pão, hambúrguer empanado de frango, cream cheese, alface, tomate e molho especial',
      price: 15.99,
    },
    {
      id: 10,
      title: 'Duplo McBkChicken',
      cover: '/hamburgers/10.png',
      description: 'Pão, 2 hambúrgueres empanado de frango, cream cheese, alface, tomate e molho especial',
      price: 18.99,
    },
  ])

  const batatas = ref([
    {
      id: 11,
      title: 'Batata Pequena',
      cover: '/batata/pequena.png',
      description: 'Batata frita 200g',
      price: 8.99,
    },
    {
      id: 12,
      title: 'Batata Media',
      cover: '/batata/media.png',
      description: 'Batata frita 400g',
      price: 10.99,
    },
    {
      id: 13,
      title: 'Batata Grande',
      cover: '/batata/grande.png',
      description: 'Batata frita 600g',
      price: 12.99,
    },
  ])

  const hotdogs = ref([
    {
      id: 14,
      title: 'Hot Dog Tradicional',
      cover: '/hotdogs/1.png',
      description: 'Pão, salsicha, ketchup, mostarda, maionese e molho especial',
      price: 8,
    },
    {
      id: 15,
      title: 'Hot Dog Americano',
      cover: '/hotdogs/2.png',
      description: 'Pão, salsicha, ketchup, mostarda e molho especial',
      price: 9,
    },
    {
      id: 16,
      title: 'Hot Dog Cheddar Bacon',
      cover: '/hotdogs/3.png',
      description: 'Pão, salsicha, cheddar, bacon, ketchup, mostarda, maionese e molho especial',
      price: 12,
    },
    {
      id: 17,
      title: 'Hot Dog Brasileiro',
      cover: '/hotdogs/4.png',
      description: 'Pão, salsicha, purê de batata, maionese, farofa, batata palha e molho especial',
      price: 13,
    },
  ])

  const bebidas = ref([
    {
      id: 18,
      title: 'Refil Refrigerante 500ml',
      cover: '/bebidas/4.png',
      price: 12.99,
    },
    {
      id: 19,
      title: 'Suco de Laranja 500ml',
      cover: '/bebidas/5.png',
      price: 5,
    },
    {
      id: 20,
      title: 'Suco de Uva 500ml',
      cover: '/bebidas/6.png',
      price: 5,
    },
    {
      id: 21,
      title: 'Agua McBk 500ml',
      cover: '/bebidas/7.png',
      price: 4.5,
    },
  ])

  const sobremesas = ref([
    {
      id: 22,
      title: 'Casquinha Clássica  McBk',
      cover: '/sobremesa/1.png',
      description: 'Sorvete de baunilha cremoso servido em casquinha crocante.',
      price: 3.5,
    },
    {
      id: 23,
      title: 'Cone ChocoMix',
      cover: '/sobremesa/2.png',
      description: 'Sorvete de baunilha em cone tipo waffle com calda de chocolate e biscoito wafer.',
      price: 6.0,
    },
    {
      id: 24,
      title: 'Sundae ChocoMania',
      cover: '/sobremesa/3.png',
      description: 'Copo de sorvete de baunilha com calda quente de chocolate.',
      price: 7.5,
    },
    {
      id: 25,
      title: 'Sundae MorangoPop',
      cover: '/sobremesa/4.png',
      description: 'Copo de sorvete de baunilha com calda de morango.',
      price: 7.5,
    },
    {
      id: 26,
      title: 'Shake ChocoPower 500mL',
      cover: '/sobremesa/5.png',
      description: 'Milkshake de chocolate batido com sorvete de baunilha.',
      price: 10,
    },
    {
      id: 27,
      title: 'Shake MorangoPowermL',
      cover: '/sobremesa/6.png',
      description: 'Milkshake de morango batido com sorvete de baunilha.',
      price: 10,
    },
  ])

  return { hamburgers, batatas, hotdogs, bebidas, sobremesas }
})
