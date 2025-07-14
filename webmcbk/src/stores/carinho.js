import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref({
    items: [],
    total: 0,
  })

  function addToCart(product) {
    const existingProduct = cart.value.items.find((item) => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity++
    } else {
      cart.value.items.push({ ...product, quantity: 1 })
    }
    cart.value.total += product.price
    alert(`Adicionado ${product.title} ao carrinho!`)
  }

  function decrementProductToCart(product) {
    const existingProduct = cart.value.items.find((item) => item.id === product.id)
    if (existingProduct.quantity === 1) {
      cart.value.items = cart.value.items.filter((item) => item.id !== product.id)
    } else {
      existingProduct.quantity--
    }
    cart.value.total -= product.price
  }

  function incrementProductToCart(product) {
    const existingProduct = cart.value.items.find((item) => item.id === product.id)
    existingProduct.quantity++
    cart.value.total += product.price
  }

  const totalItems = computed(() => {
    return cart.value.items.reduce((acc, item) => acc + item.quantity, 0)
  })

  function removeFromCart(productId) {
    const productToRemove = cart.value.items.find((item) => item.id === productId)
    if (productToRemove) {
      cart.value.total -= productToRemove.price * productToRemove.quantity
      cart.value.items = cart.value.items.filter((item) => item.id !== productId)
    }
  }

  return {
    cart,
    addToCart,
    decrementProductToCart,
    incrementProductToCart,
    totalItems,
    removeFromCart,
  }
})
