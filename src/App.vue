<template>
  <div id="app">
    <!-- Navegação -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Produtos</router-link>
      <router-link to="/cart">Carrinho</router-link>
    </nav>

    <!-- Conteúdo das páginas (views) -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilo simples para a navegação */
nav {
  background-color: #f4f4f4;
  padding: 10px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
