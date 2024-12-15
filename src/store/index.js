import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      { id: 1, name: 'Maçã', price: 1.2 },
      { id: 2, name: 'Banana', price: 0.8 },
      { id: 3, name: 'Cenoura', price: 0.5 },
    ],
    cart: [],
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
    cartCount(state) {
      return state.cart.length;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
  },
});

export default store;
