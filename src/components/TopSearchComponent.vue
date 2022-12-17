<script>
import thisModel from '../presenters/searchPresenter.js';
console.log(thisModel.thisModel.mostSearched.city)
export default {
  data() {
    return { thisModel: thisModel.thisModel }
  }

}

</script>

<template>

    <h1>Your most searched places</h1>
    <ol>
    <li>
    "You searched " + {{thisModel.mostSearched.city}} + " amount of times: " + {{thisModel.mostSearched.freq}}
    </li>
    <li>
    "You searched " + {{thisModel.secondMostSearched.city}} + " amount of times: " + {{thisModel.secondMostSearched.freq}}
    </li>
    <li>
    "You searched " + {{thisModel.thirdMostSearched.city}} + " amount of times: " + {{thisModel.thirdMostSearched.freq}}
    </li>
    </ol>

</template>
