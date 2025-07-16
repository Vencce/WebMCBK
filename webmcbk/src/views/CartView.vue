<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/carinho'
import { ref } from 'vue'
import PixQrCode from '@/components/PixQrCode.vue'

const cartStore = useCartStore()
const mostrarQR = ref(false)
</script>

<template>
  <div class="cart-container">
    <header class="cabecalho-cart">
      <img src="/imagens/mcbk.png" alt="Logo" class="logo-cart" />
    </header>

    <div>
      <h2 class="titulo-cart">Seu pedido está correto?</h2>
    </div>

    <div class="item-carrinho" v-for="item in cartStore.cart.items" :key="item.id">
      <div class="info-item">
        <div class="titulo-valor">
          <img :src="item.cover" />
          <strong>{{ item.quantidade }} - {{ item.title }}</strong>
          <span class="preco">R$ {{ item.price.toFixed(2) }}</span>
        </div>
      </div>

      <div class="acoes-item">
        <button class="remover" @click="cartStore.removeFromCart(item.id)">Remover</button>
        <button class="menos" @click="cartStore.decrementProductToCart(item)">-</button>
        <span>{{ item.quantity }}</span>
        <button class="mais" @click="cartStore.incrementProductToCart(item)">+</button>
        <button class="alterar">Alterar</button>
      </div>
    </div>

    <div class="final">
      <div class="total">
        <span>Total a pagar: </span>
        <strong>R$ {{ cartStore.cart.total.toFixed(2) }}</strong>
      </div>
      <div class="botoes">
        <RouterLink to="/menu">
          <button class="retomar">Retomar</button>
        </RouterLink>
        <button class="pagar" @click="mostrarQR = true">Pagar</button>
      </div>
    </div>

    <PixQrCode
      v-if="mostrarQR"
      :valor="cartStore.cart.total"
      nome="Burger Donald's"
      chavePix="vitor.ferreira.sbs@gmail.com"
    />
  </div>
</template>

<style scoped>
.cart-container {
  padding-bottom: 220px;
  min-height: 100vh;
}

.cabecalho-cart {
  text-align: center;
  padding: 1rem;
}
.logo-cart {
  max-width: 120px;
}
.titulo-cart {
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.item-carrinho {
  border: 2px solid #ccc;
  border-radius: 12px;
  margin: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
}
.titulo-valor {
  color: black;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  justify-content: space-between;
}
.titulo-valor img {
  width: 120px;
  height: auto;
}
.acoes-item {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}
.acoes-item button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
}

.acoes-item span {
  color: black;
  font-size: 1.5rem;
}
.remover {
  background: #e94444;
  color: white;
}
.alterar {
  background: #00b894;
  color: white;
}
.total {
  color: black;
  background-color: #f5f5f5;
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  border: 2px solid #ccc;
}
.botoes {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}
.botoes button {
  flex: 1;
  padding: 2rem;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
  color: white;
}
.retomar {
  background-color: #c0392b;
  margin: 0 1rem 1rem 1rem;
}
.pagar {
  background-color: #27ae60;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.final {
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background-color: white;
  padding-top: 1rem;
}
</style>