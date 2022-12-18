

class SearchModel {
  constructor(theSearchArray) {

    this.mostSearched = { city: "null", freq: 0 };
    this.secondMostSearched = { city: "null", freq: 0 };
    this.thirdMostSearched = { city: "null", freq: 0 };
    this.addRecentSearches(theSearchArray);

  }

  addRecentSearches(searches) {

    this.mostSearched;
    this.secondMostSearched;
    this.thirdMostSearched;

    var string = searches.toString();
    var array = string.split(",");


    if (array == undefined) {
      this.mostSearched = { city: "null", freq: 0 };
      this.secondMostSearched = { city: "null", freq: 0 };
      this.thirdMostSearched = { city: "null", freq: 0 };
      return;
    }

    if (array.length == 0) {
      this.mostSearched = { city: "null", freq: 0 };
      this.secondMostSearched = { city: "null", freq: 0 };
      this.thirdMostSearched = { city: "null", freq: 0 };
      return;
    }
    if (array.length == 1) {
      this.mostSearched = decideTopSearchACB(array);
      return;
    }
    if (array.length == 2) {
      this.mostSearched = decideTopSearchACB(array);
      this.secondMostSearched = decideTopSearchACB(array.filter(search => search != this.mostSearched.city));
      return;
    }

    this.mostSearched = decideTopSearchACB(array);
    this.secondMostSearched = decideTopSearchACB(array.filter(search => search != this.mostSearched.city));
    this.thirdMostSearched = decideTopSearchACB(array.filter(search => search != this.mostSearched.city).filter(search => search != this.secondMostSearched.city));


  }
}
function decideTopSearchACB(searches) {
  var amountOfSearches = {};
  var topSearch = null;
  var numberOfSearches = 0;

  for (const search of searches) {

    amountOfSearches[search] = (amountOfSearches[search] || 0) + 1;
  }
  for (const search in amountOfSearches) {
    if (numberOfSearches < amountOfSearches[search]) {
      topSearch = search;
      numberOfSearches = amountOfSearches[search];
    }
  }
  return { city: topSearch, freq: numberOfSearches };
}

export default SearchModel;
