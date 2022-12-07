<script>
import {search} from '../searchResults.js';

export default {
  name: 'searchResults',
  methods: {
    search
  }
}
</script>


<template>
    <div class ="searchclass">
        <input id="searchInput" type = "text" placeholder="Look for your favorite spot">
        <button v-on:click.native=search id="searchBtn">Search!</button>
    </div>
    <div id="video"></div>
</template>

<style scoped>
.video {
    text-align: center;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}
.searchclass {
    text-align: center;
}
</style>