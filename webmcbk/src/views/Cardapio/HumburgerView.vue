<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="tela-totem">
    <aside class="barra-lateral">
      <RouterLink to="/menu">
        <img class="logo" src="/imagens/mcbk.png" alt="Logo" />
      </RouterLink>

      <nav class="icones-menu">
        <RouterLink to="/humburger" class="icone ativo">
          <img src="/humburger/humb.png" />
        </RouterLink>
        <RouterLink to="/batata" class="icone ativo">
          <img src="/humburger/batata.png" />
        </RouterLink>
        <RouterLink to="/cachorro" class="icone ativo">
          <img src="/humburger/hotdog.png" />
        </RouterLink>
        <RouterLink to="/bebida" class="icone ativo">
          <img src="/humburger/coce.png" />
        </RouterLink>
        <RouterLink to="/sobremesa" class="icone ativo">
          <img src="/humburger/sundy.png" />
        </RouterLink>
      </nav>
    </aside>

    <main class="conteudo">
      <h1 class="titulo">HAMBURGERS</h1>
      <div class="grid-produtos">
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
        <div class="produto">
          <img src="/humburger/humb.png" />
          <p class="nome">Hambúrguer simples</p>
          <p class="preco">R$ 5,00</p>
        </div>
      </div>
    </main>

    <!-- Rodapé -->
    <footer class="rodape">
      <div class="resumo-pedido">
        <span><strong>Total:</strong> R$ 0,01</span>
        <span class="divisor">|</span>
        <span><strong>Itens:</strong> 1</span>
        <p>Ver meu pedido &gt;&gt;</p>
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

.icone.ativo {
  background-color: #e94444;
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
}

.resumo-pedido {
  width: 90%;
  max-width: 400px;
  padding: 1rem;
  border: 2px solid #d7e4dc;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  flex-wrap: wrap;
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
</style>
