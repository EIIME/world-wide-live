<script setup>

import { RouterLink, RouterView } from "vue-router"
import { searchesListenerCB } from "./models/firebaseModel"
import { onMounted } from "vue";

onMounted(searchesListenerCB)
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
