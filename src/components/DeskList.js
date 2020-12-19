import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

// import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";
import DeskItem from "./DeskItem";

const DeskList = () => {
  const [desks, setDesk] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("desks").get().then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      setDesk(desks);
    });

  }, []);


  if (!desks.length) {
    return null;
  }
  
  return (
    <CardGrid>
      {desks.map(({ name }) => (
        <DeskItem key={name}>{name}</DeskItem>
      ))}
    </CardGrid>
  );
};

export default DeskList;
