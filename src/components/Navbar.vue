<template>
  <nav>
    <div class="logo">Game Store</div>
    <div class="cart" @click="addToCart">
      <i class="fas fa-shopping-cart"></i>
      <span>{{ cartItemCount }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: 0
    };
  },
  methods: {
    addToCart() {
      // Simulate adding an item to the cart
      // Increase the cart item count by 1
      this.cartItemCount++;
    }
  }
};
</script>

<style>
@import '@/styles/Navbar.css';
</style>
