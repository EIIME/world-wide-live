import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  onChildAdded,
  onChildRemoved,
  onValue,
} from "firebase/database";
import { getAuth } from "firebase/auth";

function searchResultsView(element, a, card, thumbnail, title, description, location, channel, stream_source){

  a.appendChild(thumbnail);
  a.appendChild(title);
  card.appendChild(a);
  card.appendChild(description);
  card.appendChild(location);
  card.appendChild(channel);
  card.appendChild(stream_source);
  // card.appendChild(a);

  element.appendChild(card);

}
export {searchResultsView};
