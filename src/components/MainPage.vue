<template>
  <div class="main-page">
    <div class="carousel">
      <carousel :data="newReleaseGames" @click="goToGameDetail"></carousel>
    </div>
    <div class="game-cards">
      <div v-for="game in newReleaseGames" :key="game.id" class="game-card" @click="goToGameDetail(game.id)">
        <img :src="require(`@/assets/${game.imagePoster}`)" alt="Game Poster">
        <div class="info">
          <h3>{{ game.title }}</h3>
          <p>Regular Price: ${{ game.regularPrice.toFixed(2) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gamesData from '@/assets/games.json';

export default {
  data() {
    return {
      newReleaseGames: []
    };
  },
  mounted() {
    // Simulate fetching data from JSON file
    // In a real application, you would fetch data from an API
    this.newReleaseGames = gamesData;
  },
  methods: {
    goToGameDetail(gameId) {
      // Navigate to game detail page with the selected game's ID
      this.$router.push({ name: 'GameDetail', params: { id: gameId } });
    }
  }
};
</script>

<style>
@import '@/styles/MainPage.css';
</style>
