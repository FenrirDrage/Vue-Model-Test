<script>
import { useCartStore } from '../stores/cartStore'

export default {
  name: 'CartView',
  setup() {
    const cartStore = useCartStore()
    const { cart, cartItemCount, cartTotal } = cartStore

    return {
      cart,
      cartItemCount,
      cartTotal,
      addToCart: cartStore.addToCart,
      removeFromCart: cartStore.removeFromCart,
    }
  },
}
</script>

<template>
  <div>
    <h1>Carrinho</h1>
    <p>Total de itens: {{ cartItemCount }}</p>
    <p>Valor total: {{ cartTotal }}€</p>
    <div v-if="cart.length === 0">
      <p>O carrinho está vazio.</p>
    </div>
    <ul v-else>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }}€
        <button @click="removeFromCart(item.id)">Remover</button>
      </li>
    </ul>
  </div>
</template>
