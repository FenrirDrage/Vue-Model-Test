<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'ProductsView',
  setup() {
    const cartStore = useCartStore()
    const { products } = cartStore

    return {
      products,
      addToCart: cartStore.addToCart,
    }
  },
}
</script>

<template>
  <div>
    <h1>Produtos</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}€
        <button @click="addToCart(product)">Adicionar ao Carrinho</button>
      </li>
    </ul>
  </div>
</template>
