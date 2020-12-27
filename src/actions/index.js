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

export const createDesk = (name) => {
  const db = firebase.firestore();

  return db.collection("desks")
    .add({ name })
    .then((docRef) => docRef.get());
};

export const getDesks = () => {
  const db = firebase.firestore();

  return db.collection("desks").get()
    .then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      return desks;
  });
};

export const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection("desks")
    .doc(id)
    .delete();
};

export const getColumns = (deskId) => {
  const db = firebase.firestore();

  return db.collection("columns").where('deskId', '==', deskId).get().then((querySnapshot) => {
    const columns = [];

    querySnapshot.forEach((doc) => {
      const {deskId, name} = doc.data();

      columns.push({
        id: doc.id,
        deskId,
        name,
      });
    });

    return columns;
  })
};

export const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns")
    .doc(id)
    .delete();
};

export const getCards = (columnId) => {
  const db = firebase.firestore();

  return db.collection('cards').where('columnId', '==', columnId)
  .get()
  .then((querySnapshot) => {
    const cards = [];

    querySnapshot.forEach((doc) => {
      const {columnId, name} = doc.data();

      cards.push({
        id: doc.id,
        columnId,
        name,
      });
    });

    return cards;
  });
};

export const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection("cards")
    .doc(id)
    .delete();
};

export const cardCreate = (name, columnId) => {
  const db = firebase.firestore();

  return db.collection("cards")
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};

export const createColumn = (name, deskId) => {
  const db = firebase.firestore();

  return db.collection("columns")
    .add({ name, deskId })
    .then((docRef) => docRef.get());
};


