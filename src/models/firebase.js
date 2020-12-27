import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

export const initialize = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDm_arhtdgr3lDRHkY977dEdNJoq-x_lPw",
    authDomain: "kanban-ce2ec.firebaseapp.com",
    databaseURL: "https://kanban-ce2ec-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kanban-ce2ec",
    storageBucket: "kanban-ce2ec.appspot.com",
    messagingSenderId: "314022319056",
    appId: "1:314022319056:web:526432704c8ace5128dfd5",
    measurementId: "G-0EJ37ZMP41"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};
