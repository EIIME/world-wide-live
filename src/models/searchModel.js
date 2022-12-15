class SearchModel{
  constructor(currentSearch){
    this.searchArray = [];


  }

   addRecentSearch(theSearch) {
    if (!theSearch || this.currentSearch == theSearch) return;
     this.searches = [...this.searchArray, theSearch];
     this.currentSearch = theSearch;
     console.log(theSearch + "hello");
  }

}
export default SearchModel;
