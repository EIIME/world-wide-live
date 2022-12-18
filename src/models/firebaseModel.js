//import SearchModel from "./searchModel.js"
import { ref } from "vue"
import { collection, onSnapshot, addDoc, doc, getDoc, updateDoc, setDoc } from "firebase/firestore"
import { db, auth } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import SearchModel from "../models/searchModel.js";

var thisModel;

function createModelWithoutData() {
  thisModel = new SearchModel([]);
}

function createModelWithData() {
  console.log("modelCreated");
  getUserSearchesFromFirebase().then((array) => { thisModel = new SearchModel(array) });
}


function signUpUser(email, password) {
  console.log("User has been signed up")

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      addUserToFirebase(email)
      signInUser(email, password)
      // ...
    })
    .catch((error) => {
      console.log(error)
      // ...
    });
  createModelWithoutData();

}

// Move to sign in presenter
function signInUser(email, password) {
  console.log("User has been signed in")
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in...
      // const user = userCredential.user;

    })
    .catch((error) => {
      console.log(error)
    });
  createModelWithData();
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
  })
}


async function getSearchesFromFirebase() {
  await searchesListenerCB();
  const searchesArray = [];
  allSearches._rawValue.map(item => { searchesArray.data.push(item.search) })
  return searchesArray;
}

async function getUserSearchesFromFirebase() {
  const usersCollectionRef = doc(db, "users", getCurrentUser().email);
  const docSnap = await getDoc(usersCollectionRef);

  if (docSnap.exists()) {
    return await docSnap.data().searchHistory;
  } else {
    return
  }
}

const addSearchToFirebase = (city) => {
  const newSearch = ref(city)
  addDoc(searchesCollectionRef, {
    search: newSearch.value,

  })
  newSearch.value = ""
}

const addUserToFirebase = (email) => {
  const newUser = ref(email)
  setDoc(doc(db, "users", email), {
    email: newUser.value,
    searchHistory: []
  })
  newUser.value = ""
}

const addSearchToUserFirebase = (city, existingSearches = []) => {
  if (isUserLoggedIn()) {
    const email = getCurrentUser().email;
    if (Array.isArray(existingSearches)) {
      var oldArray = existingSearches;
    } else {
      var oldArray = ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Stockholm", "Stockholm"];
    }
    oldArray.push(city);
    updateDoc(doc(db, "users", email), {
      searchHistory: oldArray
    });
    console.log("Search added to user history")
  }
}

export {
  allSearches,
  addSearchToFirebase,
  searchesListenerCB,
  getSearchesFromFirebase,
  isUserLoggedIn, getCurrentUser,
  signUpUser,
  signInUser,
  addSearchToUserFirebase,
  getUserSearchesFromFirebase,
  thisModel
};
