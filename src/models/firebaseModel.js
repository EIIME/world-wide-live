//import SearchModel from "./searchModel.js"
import { ref, onMounted } from "vue"
import { collection, onSnapshot, addDoc } from "firebase/firestore"
import { db, auth } from '@/firebase'
import { search } from "../searchResults"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function signUpUser(email, password) {
  console.log("signUpUser called!!!! ")
  console.log("email: " + email)
  console.log("password: " + password)
  console.log("auth: ")
  console.log(auth)
  //const email = "hej@kth.se"
  //const password = "123456"

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      signInUser(email, password)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}

// Move to sign in presenter
function signInUser(email, password) {
  console.log("signInUser called!!!! ")
  console.log("email: " + email)
  console.log("password: " + password)
  console.log("auth: ")
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  console.log("signInUser finished!!!! ")
  console.log("Is user logged in? ::: " + isUserLoggedIn())
}

function isUserLoggedIn() {
  const user = auth.currentUser;
  if (user) {
    return true
  } else {
    return false
  }
}

function getCurrentUser() {
  const user = auth.currentUser;
  return user
}

const searchesCollectionRef = collection(db, "search history")
const allSearches = ref([])

async function searchesListenerCB() {
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

async function getSearchesFromFirebase() {
  console.log("getSearchesFromFirebase called");
  console.log("firebaseInitPromise pending");
  await searchesListenerCB();
  console.log("firebaseInitPromise fulfilled");
  const searchesArray = [];
  allSearches._rawValue.map(item => { searchesArray.data.push(item.search) })
  return searchesArray;
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
export { updateFirebaseFromModel, updateModelFromFirebase, allSearches, addSearchToFirebase, searchesListenerCB, getSearchesFromFirebase, isUserLoggedIn, getCurrentUser, signUpUser, signInUser };
