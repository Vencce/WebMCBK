<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/escolha">
    <main>
      <div>
        <p>Faça aqui <b>seu pedido!</b></p>
      </div>
      <div>
        <img src="/imagens/tudocomida.png" alt="" />
      </div>
      <div>
        <button>Toque na tela para começar</button>
      </div>
    </main>
  </RouterLink>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #e6917c;
  line-height: 1;
  margin: 5rem auto 3rem auto;
  text-align: center;
  max-width: 60%;
}

p b {
  font-weight: bold;
}

img {
  width: 100%;
}

button {
  background-color: #E63946;
  border: none;
  border-radius: 5px;
  padding: 1.5rem 2rem;
  margin-top: 2rem;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
