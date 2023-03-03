<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Rating 1:</h1>
  <StarRating @rating-changed="onRatingChanged" id="rating__1"></StarRating>
  <h1>Rating 2:</h1>
  <StarRating :stars-count=10 @rating-changed="onRatingChanged" id="rating__2"></StarRating>
</template>

<script>
import StarRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    StarRating
  },
  methods: {
    onRatingChanged(sender) {
      alert(`Rating: ${sender.$attrs.id}; Value: ${sender.ratingValue}`);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
