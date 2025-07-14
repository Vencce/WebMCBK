<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/carinho'

const cartStore = useCartStore()
</script>

<template>
  <div class="tela-totem">
    <aside class="barra-lateral">
      <RouterLink to="/menu">
        <img class="logo" src="/imagens/mcbk.png" alt="Logo" />
      </RouterLink>

      <nav class="icones-menu">
        <RouterLink to="/humburger" class="icone ativo">
          <img src="/menulateral/humb.png" />
        </RouterLink>
        <RouterLink to="/batata" class="icone ativo">
          <img src="/menulateral/batata.png" />
        </RouterLink>
        <RouterLink to="/cachorro" class="icone ativo">
          <img src="/menulateral/hotdog.png" />
        </RouterLink>
        <RouterLink to="/bebida" class="icone ativo">
          <img src="/menulateral/coce.png" />
        </RouterLink>
        <RouterLink to="/sobremesa" class="icone ativo">
          <img src="/menulateral/sundy.png" />
        </RouterLink>
      </nav>
    </aside>

    <main class="conteudo">
      <h1 class="titulo">SOBRE NÓS</h1>
      <div class="grid-produtos">
        <div>
          <img class="loja" src="/imagens/fora.jpeg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.</p>
        </div>
        <div>
          <img class="loja" src="/imagens/dentro.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.</p>
        </div>
      </div>
    </main>

    <footer class="rodape">
      <div class="resumo-pedido">
        <span><strong>Total:</strong> R$ {{ cartStore.cart.total.toFixed(2) }}</span>
        <span class="divisor">|</span>
        <span><strong>Itens:</strong> {{ cartStore.totalItems }}</span>
        <RouterLink to="/pedido" class="pedido">
          <p>Ver meu pedido</p>
        </RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Estrutura principal */
.tela-totem {
  display: flex;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
  background-color: #fff;
}

/* Barra lateral esquerda */
.barra-lateral {
  width: 26%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-right: 2px solid #e0e0e0;
}

.logo {
  width: 100%;
  margin-bottom: 0.1rem;
}

.icones-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.icone img {
  width: 120px;
  transition: transform 0.3s;
}

.icone.ativo {
  background-color: #e94444;
  padding: 0.5rem;
  border-radius: 8px;
}

.grid-produtos p {
  color: black;
  font-size: 1.5rem;
}

/* Área principal */
.conteudo {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.titulo {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 2rem;
  color: black;
  text-align: center;
}

.loja {
  width: 100%;
  padding-top: 3rem;
}

/* Rodapé */
.rodape {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #e94444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.resumo-pedido {
  width: 100%;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  background-color: transparent;
  color: white;
  gap: 1rem;
  box-sizing: border-box;
}

.resumo-pedido .divisor {
  color: #bbb;
}

.ver-pedido {
  color: #2ecc71;
  font-weight: bold;
  text-decoration: none;
  margin-left: auto;
}

.ver-pedido:hover {
  text-decoration: underline;
}

.pedido {
  color: white;
}
</style>
