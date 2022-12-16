<script>

import {thisModel} from '../presenters/searchPresenter.js';





export default {

  data: function(){return{isHidden: false}},


}



</script>

<template>

    <div class ="searchclass">
        <button v-on:click.native=topSearchesView id="toppSearchBtn" class="toppSearchBtn">View Most Searched</button>
        <div class="topSearchessss">
        <button v-on:click="isHidden = true">Hide the text below</button>
        <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>
        <h1 v-if="!isHidden">{{TheResult}}</h1>
        </div>


    </div>
</template>
