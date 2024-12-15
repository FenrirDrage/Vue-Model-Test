<template>
  <div>
    <h2>Produtos</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}€
        <button @click="addToCart(product)">Adicionar ao Carrinho</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'ProductsView',
  setup() {
    const cartStore = useCartStore()
    const products = [
      { id: 1, name: 'Produto 1', price: 10 },
      { id: 2, name: 'Produto 2', price: 20 },
    ]

    return {
      products,
      addToCart: cartStore.addToCart,
    }
  },
}
</script>
