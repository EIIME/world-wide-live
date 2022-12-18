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

   addRecentSearch(array) {

     this.mostSearched;
     this.secondMostSearched;
     this.thirdMostSearched;

     console.log("urheurheuhruehurhwifhuialehfguihuerhgiurhegui");

     //let array = this.searchArray;
     console.log(array.length);
     if(array.length < 3){
       this.mostSearched = {city: "null", freq: 0};
       this.secondMostSearched = {city: "null", freq: 0};
       this.thirdMostSearched = {city: "null", freq: 0};
       return;
       }
     this.mostSearched = decideTopSearchACB(array);
     this.secondMostSearched = decideTopSearchACB(array.filter(search => search != this.mostSearched.city));
     this.thirdMostSearched = decideTopSearchACB(array.filter(search => search != this.mostSearched.city).filter(search => search != this.secondMostSearched.city));
     console.log(this.mostSearched.city + " " + this.mostSearched.freq);
     console.log(this.secondMostSearched.city + " " + this.secondMostSearched.freq);
     console.log(this.thirdMostSearched.city + " " + this.thirdMostSearched.freq);
     }


}
function decideTopSearchACB(searches){
  var amountOfSearches = {};
  var topSearch = null;
  var numberOfSearches = 0;

  for(const search of searches){
    amountOfSearches[search] = (amountOfSearches[search]|| 0) + 1;
  }
  for(const search in amountOfSearches){
    if(numberOfSearches < amountOfSearches[search]){
      topSearch = search;
      numberOfSearches = amountOfSearches[search];
    }
  }
  return {city: topSearch, freq: numberOfSearches};
}

export default SearchModel;
