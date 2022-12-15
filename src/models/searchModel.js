import thisModel from "../presenters/searchPresenter.js";
import { updateFirebaseFromModel } from "../models/firebaseModel.js";

class SearchModel {
  constructor(theSearchArray) {
    /*if(this.searchArray == undefined){
        this.searchArray = [];
    }
    if(this.topLocation == undefined){
      this.topLocation = 0;
    }*/
    this.searchArray = theSearchArray;
    this.topLocation = 0;
    this.topListName = [];
    this.topListFreq = [];

    let mostSearched = new Object();
    let secondMostSearched = new Object();
    let thirdMostSearched = new Object();
    //else{
    //  this.searchArray = [...this.searchArray, currentSearch];
    //}



  }

  addRecentSearch(theSearch, data) {
    if (!theSearch) return;
    /*data.topListFreq = [];
    data.topListFreq = [];*/
    this.searchArray = [...this.searchArray, theSearch];
    let array = this.searchArray;
    mostSearched = decideTopSearchesACB(array, data);
    secondMostSearched = decideTopSearchesACB(array.filter(search => search == mostSearched.city), data);
    thirdMostSearched = decideTopSearchesACB(array.filter(search => search == mostSearched.city || search == secondMostSearched.city), data);
    //updateFirebaseFromModel(data.topListFreq, data.topListName);
    return;
  }

  /* currentTopListACB(freq, name){
     this.topListFreq = [...this.topListFreq, freq];
     this.topListName = [...this.topListName, name];
   }*/




}
function decideTopSearchesACB(searches, data) {

  var recentSearches = [];
  var recentTotal = 0;
  var mostHits = null;
  var final = [];

  if (searches === []) {

    return null;
  }
  for (var i = 0; i < parseInt(searches.length); i++) {
    var totalHits = 1;

    if (!recentSearches.includes(searches[i])) {

      for (var j = 0; j < searches.length; j++) {
        if (searches[i] === searches[j] && i !== j) {
          totalHits++;
        }
      }
      if (recentTotal < totalHits) {
        recentTotal = totalHits;
        mostHits = searches[i];
      }
    }
    recentSearches = [...recentSearches, searches[i]];

  }

  //currentTopListACB(recentTotal, mostHits, data);

  /*if(recentSearches.length > 3){
    decideTopSearchesACB(recentSearches.filter(search => search == mostHits), data);
  }
  else{
    if(data.topListFreq == []) return;
    updateFirebaseFromModel(data.topListFreq, data.topListName);
  }*/
  //console.log(recentTotal + mostHits);

  return { city: mostHits, freq: recentTotal };
  //return recentSearches.filter(search => search == mostHits);

}

function currentTopListACB(freq, name, data) {
  if (data.topListFreq == []) {
    data.topListFreq = [freq];
    data.topListName = [name];
  }
  else {
    data.topListFreq = [...data.topListFreq, freq];
    data.topListName = [...data.topListName, name];
  }

}
export default SearchModel;
