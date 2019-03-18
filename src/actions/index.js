import firebase from "firebase";
import Moment from "moment";
import constants from "./../constants";
const { firebaseConfig, constant } = constants;

firebase.initializeApp(firebaseConfig);
const comments = firebase.database().ref("comments");

export function addComment(_name, _comment) {
  return () =>
    comments.push({
      name: _name,
      comment: _comment,
      addTime: new Date().getTime()
    });
}

export function watchFirebaseCommentsRef() {
  return function(dispatch) {
    comments.on("child_added", data => {
      const newComment = Object.assign({}, data.val(), {
        id: data.key,
        formattedAddTime: new Moment(data.val().addTime).from(new Moment())
      });
      dispatch(receiveComment(newComment));
    });
  };
}

function receiveComment(commentFromFirebase) {
  return {
    type: constant.RECEIVE_COMMENT,
    comment: commentFromFirebase
  };
}
