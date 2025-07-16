<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <main>
    <RouterLink to="/">
      <div class="voltar">
        <button>Voltar</button>
      </div>
    </RouterLink>
    <div class="escolha">
      <div>
        <RouterLink to="/menu">
          <button class="comer">
            <img src="/imagens/bandeja.png" alt="" />
            <p>Para comer aqui</p>
          </button>
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/menu">
          <button class="comer">
            <img src="/imagens/pacote.png" alt="" />
            <p>Para levar</p>
          </button>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  background-color: white;
}

main .voltar {
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 2rem;
  padding-right: 2rem;
}

main div.voltar button {
  border: none;
  background-color: #e63946;
  color: white;
  padding: 10px 40px;
  font-size: 1.5rem;
  border-radius: 5px;
}

main div.escolha button {
  border: none;
  background-color: #e63946;
  color: white;
  border-radius: 20px;
}

main div.escolha button p {
  font-size: 1.2rem;
  padding: 10px 0;
}

main .escolha {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 50%;
}

img {
  width: 10rem;
  height: 10rem;
}
</style>
