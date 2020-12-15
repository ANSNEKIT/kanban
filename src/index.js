import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var db = firebase.firestore();
db.collection("desks").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(doc.data());
  });
});

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
