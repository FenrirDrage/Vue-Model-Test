import { createRouter, createWebHistory } from 'vue-router'
import { useCartStore } from '../stores/cartStore' // Importa a store do Pinia
import Home from '../views/HomeView.vue'
import Products from '../views/ProductsView.vue'
import Cart from '../views/CartView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guarda de navegação
router.beforeEach((to, from, next) => {
  if (to.path === '/cart') {
    const cartStore = useCartStore() // Usa a store do Pinia
    const cartIsEmpty = cartStore.cart.length === 0
    if (cartIsEmpty) {
      alert('O carrinho está vazio!')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
