<script setup>
import { ref, onMounted } from "vue"
import { RouterLink, RouterView } from "vue-router"
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from '@/firebase'

const searchesCollectionRef = collection(db, "search history")
const searches = ref([])

onMounted(() => {

  onSnapshot(searchesCollectionRef, (querySnapshot) => {
    const fbSearchHistory = []
    querySnapshot.forEach((doc) => {
      const search = {
        id: doc.id,
        search: doc.data().search
      }
      fbSearchHistory.push(search)
    })
    searches.value = fbSearchHistory
    console.log(searches)
  })
})
//const newSearch = ref (" Doha ")
//const newSearch = "install"
const addsearch = (city) => {
  const newSearch = ref(city)
  addDoc(searchesCollectionRef, {
    search: newSearch.value,

  })
  newSearch.value = ""
}
// addsearch("Göteborg")
//

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
