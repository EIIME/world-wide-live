import { API_KEY_GEOCODE, API_KEY_YOUTUBE } from "../apiConfig.js";
import { searchResultsView } from "../views/searchResultsView.js";
import { thisModel } from "../models/firebaseModel.js";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import { addSearchToUserFirebase, getUserSearchesFromFirebase } from "../models/firebaseModel.js";

export const search = () => {
  var element = document.getElementById("video")
  // remove all child nodes of element
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  var error_code = "No location with that name found"
  var error_code2 = "No streams found for that location"
  var searchInput = document.getElementById("searchInput").value

  const coordinates = fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + searchInput + "&key=" + API_KEY_GEOCODE)
    .then(response => { return response.json() })
    .then(data => { return data.results[0].geometry.location }).catch((error) => { console.log(error) });

  var x = undefined;
  var y = undefined;
  var radius = 100;
  var radiusType = "km";
  var maxResults = 5;

  const printAddress = () => {
    coordinates.then((data) => {
      if (!data) {
        console.log(error_code);
        element.appendChild(document.createTextNode(error_code));

        return;
      }
      x = String(data.lat);
      y = String(data.lng);

      // update firebase and get the new list of searches
      getUserSearchesFromFirebase().then((previousSearches) => {
        addSearchToUserFirebase(searchInput, previousSearches);
        getUserSearchesFromFirebase().then((array) => { thisModel.addRecentSearches(array) });
      });

      fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&location=" + x + "%2C%20" + y
        + "&locationRadius=" + radius + radiusType + "&maxResults=" + maxResults + "&type=video&key=" + API_KEY_YOUTUBE)
        .then((result) => { return result.json() })
        .then((data) => {
          if (data.items.length == 0) {
            console.log("No streams found for near " + searchInput);
            element.appendChild(document.createTextNode(error_code2));
            return;
          } else {
            let videos = data.items
            for (var video of videos) {

              var card = document.createElement('div')
              card.className = "card";

              var thumbnail = document.createElement('img')
              thumbnail.className = "card-thumbnail";

              var title = document.createElement('h3')
              title.className = "card-title";

              var description = document.createElement('p')
              description.className = "card-description";

              var location = document.createElement('span')
              location.className = "card-location";

              var channel = document.createElement('span')
              channel.className = "card-channel";

              var stream_source = document.createElement('span')
              stream_source.className = "card-stream-source";

              var url = "https://www.youtube.com/watch?v=" + video.id.videoId;
              var a = document.createElement('a');

              // Create the text node for anchor element.
              var video_title = document.createTextNode(video.snippet.title);

              // Append the text node to anchor element.
              thumbnail.src = video.snippet.thumbnails.medium.url;
              title.appendChild(video_title);
              description.appendChild(document.createTextNode(video.snippet.description));
              // location.appendChild(document.createTextNode(video.snippet.liveBroadcastContent));
              channel.appendChild(document.createTextNode(video.snippet.channelTitle));
              stream_source.appendChild(document.createTextNode(video.snippet.liveBroadcastContent));

              // Set the title.
              a.title = "Stream";

              // Set the href property.
              a.href = url;

              // Append the anchor element to the body.
              searchResultsView(element, a, card, thumbnail, title, description, location, channel, stream_source);
            }
          }
        })
        .catch((error) => { console.log(error) });
    });
  };

  printAddress();

}
