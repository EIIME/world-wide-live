import thisModel from "../presenters/searchPresenter.js";
import {updateFirebaseFromModel} from "../models/firebaseModel.js";

class SearchModel{
  constructor(theSearchArray){
    /*if(this.searchArray == undefined){
        this.searchArray = [];
    }
    if(this.topLocation == undefined){
      this.topLocation = 0;
    }*/
    this.searchArray = theSearchArray;

    const mostSearched = new Object();
    const secondMostSearched = new Object();
    const thirdMostSearched = new Object();
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
     mostSearched = decideTopSearchACB(array);
     secondMostSearched = decideTopSearchACB(array.filter(search => search == mostSearched.city));
     thirdMostSearched = decideTopSearchACB(array.filter(search => search == mostSearched.city || search ==secondMostSearched.city));
     //updateFirebaseFromModel(data.topListFreq, data.topListName);
     console.log(mostSearched.city + " " + mostSearched.freq);
     console.log(secondMostSearched.city + " " + secondMostSearched.freq);
     console.log(thirdMostSearched.city + " " + thirdMostSearched.freq);
     return;
     }

    /* currentTopListACB(freq, name){
       this.topListFreq = [...this.topListFreq, freq];
       this.topListName = [...this.topListName, name];
     }*/




}
function decideTopSearchACB(searches){
  const amountOfSearches = {};
  const topSearch = null;
  const numberOfSearches = 0;

  for(const search of searches){
    amountOfSearches[search] = (amountOfSearches[search]|| 0) + 1;
  }
  for(const search in amountOfSearches){
    if(numberOfSearches < amountOfSearches[search]){
      numberOfSearches = amountOfSearches[search];
      topSearch = search;
    }
  }
  return {city: topSearch, freq: numberOfSearches};
}

export default SearchModel;
