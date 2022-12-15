import SearchModel from "./searchModel.js";

function updateFirebaseFromModel(list1, list2){
    for(var i = 0; i < list1.length; i++){
      console.log(list1[i] + " " + list2[i]);
      i++;
    }
    return;
}

function updateModelFromFirebase(model) {

}
export {updateFirebaseFromModel};
