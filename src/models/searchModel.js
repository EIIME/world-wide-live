import thisModel from "../presenters/searchPresenter.js";
import {getUserSearchesFromFirebase} from "../models/firebaseModel.js";

class SearchModel{
  constructor(theSearchArray){
    /*if(this.searchArray == undefined){
        this.searchArray = [];
    }
    if(this.topLocation == undefined){
      this.topLocation = 0;
    }*/
    this.searchArray = theSearchArray;

    this.mostSearched = {city: "null", freq: 0};
    this.secondMostSearched = {city: "null", freq: 0};
    this.thirdMostSearched = {city: "null", freq: 0};




  }

   addRecentSearch() {
     let array = this.searchArray;
     if(array.length < 3){
       this.mostSearched = {city: "null", freq: 0};
       this.secondMostSearched = {city: "null", freq: 0};
       this.thirdMostSearched = {city: "null", freq: 0};
       }
    else{
     this.mostSearched = decideTopSearchACB(array);
     this.secondMostSearched = decideTopSearchACB(array.filter(search => search == mostSearched.city));
     this.thirdMostSearched = decideTopSearchACB(array.filter(search => search == mostSearched.city || search ==secondMostSearched.city));
     console.log(mostSearched.city + " " + mostSearched.freq);
     console.log(secondMostSearched.city + " " + secondMostSearched.freq);
     console.log(thirdMostSearched.city + " " + thirdMostSearched.freq);
     }
     }


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
