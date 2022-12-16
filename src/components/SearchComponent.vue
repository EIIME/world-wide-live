<script>
import {search} from '../presenters/searchPresenter.js';
import {topSearchesView} from '../views/topSearchesView.jsx';

export default {
  name: 'searchResults',
  methods: {
    search,
    reloadPage() {
        window.location.reload();
      }
  }

}
</script>

<template>
    <div class ="searchclass">
        <input id="searchInput" class="searchInput" type = "text" placeholder="Look for your favorite spot">
        <button v-on:click.native=search id="searchBtn" class="searchBtn">Search!</button>
        <button v-on:click.native=topSearchesView id="toppSearchBtn" class="toppSearchBtn">View Most Searched</button>
        <button @click="reloadPage">Log out</button>
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
.video {
  /* DEBUG */
  border: 1px solid red;
}
card {
  /* DEBUG */
  border: 1px solid blue;
}

</style>
