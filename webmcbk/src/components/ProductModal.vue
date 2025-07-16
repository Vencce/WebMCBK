<script setup>
import { ref } from 'vue'

const props = defineProps({
  produto: Object,
})

const emit = defineEmits(['fechar', 'adicionar'])

const mensagem = ref(false)

function fechar() {
  emit('fechar')
}

function adicionarAoCarrinho() {
  emit('adicionar', props.produto)
  mensagem.value = true
  setTimeout(() => {
    mensagem.value = false
    fechar()
  }, 1000)
}
</script>

<template>
  <div class="backdrop" @click.self="fechar">
    <div class="conteudo">
      <img :src="produto.cover" class="imagem" alt="Produto" />
      <h1>{{ produto.title }}</h1>
      <p class="descricao">{{ produto.description }}</p>
      <p class="preco">R$ {{ produto.price.toFixed(2) }}</p>

      <div class="botoes">
        <button class="adicionar" @click="adicionarAoCarrinho">Adicionar ao Pedido</button>
        <button class="voltar" @click="fechar">Voltar</button>
      </div>

      <transition name="fade">
        <p v-if="mensagem" class="confirmacao">✔ Adicionado ao pedido!</p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.conteudo {
  background: white;
  color: black;
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 450px;
  text-align: center;
  position: relative;
}

.imagem {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.descricao {
  color: #333;
  font-size: 1.2rem;
  margin: 1rem 0;
}

.preco {
  font-size: 1.5rem;
  font-weight: bold;
  color: green;
  margin-bottom: 1rem;
}

.botoes {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

.adicionar {
  background-color: #27ae60;
  color: white;
  border: none;
}

.voltar {
  background-color: #ccc;
  border: none;
}

.confirmacao {
  color: green;
  font-weight: bold;
  margin-top: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
