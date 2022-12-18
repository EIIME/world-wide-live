<script>
import { search } from '../presenters/searchPresenter.js';
import { isUserLoggedIn } from '../models/firebaseModel.js';


export default {
  name: 'searchResults',
  methods: {
    search
  }
}
</script>

<template>
  <div class="searchclass">
    <input id="searchInput" class="searchInput" type="text" placeholder="Look for your favorite spot">
    <button v-on:click.native=search id="searchBtn" class="searchBtn">Search!</button>
    <router-link to="/yourtopsearches">
      <button v-on:click.native=topSearchesView id="toppSearchBtn" class="toppSearchBtn">View Your Most
        Searched Locations</button>
    </router-link>
    <div>
      <template v-if="isUserLoggedIn">
        <!-- render something else here if the user is not logged in -->
        <button id="LogOutButton" class="LogOutButton">Log Out</button>
      </template>
      <template v-else>
        <!-- render something else here if the user is not logged in -->
        <!-- <router-link to="/signup">
          <button id="signUpButton" class="signUpButton">Sign Up</button>
          <button id="logInButton" class="logInButton">Log In</button>
        </router-link> -->
      </template>
    </div>
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
