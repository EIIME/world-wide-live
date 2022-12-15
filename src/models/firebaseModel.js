//import SearchModel from "./searchModel.js"
import { ref, onMounted } from "vue"
import { collection, onSnapshot, addDoc } from "firebase/firestore"
import { db } from '@/firebase'
import { search } from "../searchResults"

const searchesCollectionRef = collection(db, "search history")
const allSearches = ref([])

function searchesListenerCB() {
  onSnapshot(searchesCollectionRef, (querySnapshot) => {
    const fbSearchHistory = []
    querySnapshot.forEach((doc) => {
      const search = {
        id: doc.id,
        search: doc.data().search
      }
      fbSearchHistory.push(search)
    })
    allSearches.value = fbSearchHistory
    console.log("allSearches below")
    console.log(allSearches)
  })
}

function getSearchesFromFirebaseACB() {
  console.log("allSearches.value below")
  var searchArray = [];
  allSearches._rawValue.map(item => { searchArray.push(item.search) })
  return searchArray;
}

// onMounted(searchesListnerCB)

const addSearchToFirebase = (city) => {
  const newSearch = ref(city)
  addDoc(searchesCollectionRef, {
    search: newSearch.value,

  })
  newSearch.value = ""
}

function updateFirebaseFromModel(list1, list2) {
  for (var i = 0; i < list1.length; i++) {
    console.log(list1[i] + " " + list2[i]);
    i++;
  }
  return;
}

function updateModelFromFirebase(model) {

}
export { updateFirebaseFromModel, updateModelFromFirebase, allSearches, addSearchToFirebase, searchesListenerCB, getSearchesFromFirebaseACB };
