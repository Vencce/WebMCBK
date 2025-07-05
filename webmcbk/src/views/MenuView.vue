<script setup>
import TesteComponent from '../components/TesteComponent.vue'
</script>

<template>
  <main class="menu">
    <div class="lateral">
      <img src="/imagens/mcbk.png" alt="" />
      <div class="itens">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
    <div class="cardapio">
      <h1>HAMBURGUER</h1>
    </div>
  </main>
  <TesteComponent />
</template>

<style scoped>
main {
  background-color: white;
  display: flex;
  justify-content: space-between;
}

.cardapio h1 {
  width: 100%;
  color: black;
  font-weight: bold;
  padding: 2rem;
}
</style>
