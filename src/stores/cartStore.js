import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    products: [
      { id: 1, name: 'Sumersby', price: 5 },
      { id: 2, name: 'Vodka', price: 20 },
      { id: 3, name: 'Pinna Colada', price: 15 },
    ],
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    },
  },
})
