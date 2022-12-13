import { API_KEY_GEOCODE, API_KEY_YOUTUBE } from "./apiConfig.js";

export const search = () => {
  var element = document.getElementById("video")
  var newLine = "\r\n"
  var searchInput = document.getElementById("searchInput").value
  const coordinates = fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + searchInput + "&key=" + API_KEY_GEOCODE)
    .then(response => { return response.json() })
    .then(data => { return data.results[0].geometry.location });

  console.log(coordinates)

  var x = undefined;
  var y = undefined;
  var radius = 100;
  var radiusType = "km";
  var maxResults = 5;

  const printAddress = () => {
    coordinates.then((data) => {
      console.log(data);
      x = String(data.lat);
      y = String(data.lng);
      console.log(x);
      console.log(y);

      fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&location=" + x + "%2C%20" + y
        + "&locationRadius=" + radius + radiusType + "&maxResults=" + maxResults + "&type=video&key=" + API_KEY_YOUTUBE)
        .then((result) => { return result.json() })
        .then((data) => {
          console.log(data)
          let videos = data.items
          for (var video of videos) {

            var card = document.createElement('div');
            var thumbnail = document.createElement('img');
            var title = document.createElement('h3');
            var description = document.createElement('p');
            var location = document.createElement('span');
            var channel = document.createElement('span');
            var stream_source = document.createElement('span');

            var url = "https://www.youtube.com/watch?v=" + video.id.videoId;
            var a = document.createElement('a');

            // Create the text node for anchor element.
            var link = document.createTextNode(video.snippet.title);

            // Append the text node to anchor element.
            a.appendChild(link);

            // Set the title.
            a.title = "Stream";

            // Set the href property.
            a.href = url;

            // Append the anchor element to the body.
            // element.appendChild(card);
            element.appendChild(a);
            // element.appendChild(newLine);
          }

        })
    });
  };

  printAddress();

}