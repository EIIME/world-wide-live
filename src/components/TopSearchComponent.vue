<script>
import { thisModel } from '../models/firebaseModel.js';

export default {
  data() {
    return { thisModel: thisModel }
  }

}

</script>

<template>

  <h1>Your most searched places</h1>
  <ol>
    <li>
      Your most searched: {{ thisModel.mostSearched.city }}. Amount of times: {{ thisModel.mostSearched.freq }}
    </li>
    <li>
      Your second most searched: {{ thisModel.secondMostSearched.city }}. Amount of times:
      {{ thisModel.secondMostSearched.freq }}
    </li>
    <li>
      Your third most searched: {{ thisModel.thirdMostSearched.city }}. Amount of times:
      {{ thisModel.thirdMostSearched.freq }}
    </li>
  </ol>

  <router-link to="/home">
    <button id="homeBtn" class="homeBtn">Back to search</button>
  </router-link>

</template>
