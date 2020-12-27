import firebase from "firebase/app";

export const createDesk = (name) => {
  const db = firebase.firestore();

  return db.collection("desks")
  .add({ name })
  .then((docRef) => docRef.get())
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
