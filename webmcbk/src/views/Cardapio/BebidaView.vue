<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/produtos'
import { useCartStore } from '@/stores/carinho'
import ProductModal from '@/components/ProductModal.vue'

const productsStore = useProductStore()
const cartStore = useCartStore()

const produtoSelecionado = ref(null)
const mostrarModal = ref(false)

function abrirModal(produto) {
  produtoSelecionado.value = produto
  mostrarModal.value = true
}

function adicionarAoCarrinho(produto) {
  cartStore.addToCart(produto)
  mostrarModal.value = false
}
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
        <RouterLink to="/bebida" class="icone local">
          <img src="/menulateral/coce.png" />
        </RouterLink>
        <RouterLink to="/sobremesa" class="icone ativo">
          <img src="/menulateral/sundy.png" />
        </RouterLink>
      </nav>
    </aside>

    <main class="conteudo">
      <h1 class="titulo">BEBIDAS</h1>
      <ul class="grid-produtos">
        <li
          v-for="item in productsStore.bebidas"
          :key="item.id"
          class="produto"
          @click="abrirModal(item)"
        >
          <img :src="item.cover" />
          <p class="nome">{{ item.title }}</p>
          <p class="preco">R$ {{ item.price }}</p>
        </li>
        <ProductModal
          v-if="mostrarModal"
          :produto="produtoSelecionado"
          @fechar="mostrarModal = false"
          @adicionar="adicionarAoCarrinho"
        />
      </ul>
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
  height: 100%;
  flex-direction: row;
  overflow: hidden;
  background-color: #fff;
  display: block;
}

/* Barra lateral esquerda */
.barra-lateral {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 170px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border-right: 2px solid #e0e0e0;
  z-index: 1000;
  overflow-y: auto;
  padding-bottom: 120px;
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

.icone.local {
  background-color: #e94444;
  padding: 0.5rem;
  border-radius: 8px;
}

.icone.ativo {
  background-color: #d6cece;
  padding: 0.5rem;
  border-radius: 8px;
}

.grid-produtos p.nome {
  color: black;
  font-size: 1.5rem;
}

/* Área principal */
.conteudo {
  margin-left: 170px;
  padding: 2rem;
  overflow-y: auto;
  padding-bottom: 140px;
}

.titulo {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: black;
  text-align: center;
}

.loja {
  width: 100%;
  padding-top: 3rem;
}

.grid-produtos {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  height: 100%;
}

.produto {
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.5rem;
  background-color: #f5f5f5;
}

.produto.suco-uva {
  justify-content: space-between;
}

.produto img {
  width: 120px;
  height: auto;
}

.produto.vazio {
  background-color: #f5f5f5;
  border: 1px dashed #ccc;
  height: 140px;
}

.preco {
  color: green;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: end;
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
