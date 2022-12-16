import thisModel from "../presenters/searchPresenter.js";

export const topSearchesView = () => {
  return(
    <div class = "topSearches">
    <h1>{thisModel.mostSearched.city}</h1>
    <h1>{thisModel.mostSearched.freq}</h1>
    </div>
  );

}
