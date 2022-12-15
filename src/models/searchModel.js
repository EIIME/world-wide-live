class SearchModel{
  constructor(theSearchArray){
    /*if(this.searchArray == undefined){
        this.searchArray = [];
    }
    if(this.topLocation == undefined){
      this.topLocation = 0;
    }*/
    this.searchArray = theSearchArray;
    this.topLocation = 0;
    //else{
    //  this.searchArray = [...this.searchArray, currentSearch];
    //}



  }

   addRecentSearch(theSearch) {
    if (!theSearch) return;
     this.searchArray = [...this.searchArray, theSearch];
     this.topLocation = decideTopSearchesACB(this.searchArray);
     return this.topLocation;

  }


}
function decideTopSearchesACB(searches){

  var recentSearches = [];
  var recentTotal = 0;
  var mostHits = null;
  var final = [];

  if(searches === []){

    return null;
  }
  for(var i = 0; i < parseInt(searches.length); i++){
    var totalHits = 1;

    if(!recentSearches.includes(searches[i])){

    for(var j = 1; j < searches.length; j++){
      if(searches[i] === searches[j]){
        totalHits++;
      }
    }
    if(recentTotal < totalHits){
      recentTotal = totalHits;
      mostHits = searches[i];
    }
  }
    recentSearches = [...recentSearches, searches[i]];
  }
  final[0] = mostHits;
  final[1] = recentTotal;
  console.log(final[0] + final[1]);

  return final;




}
export default SearchModel;
