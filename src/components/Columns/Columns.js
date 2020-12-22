import React, { Fragment, useEffect, useState } from 'react';
import { PanelHeader, Gallery } from '@vkontakte/vkui';
import firebase from "firebase/app";

import Column from '../Column/Column.js';
import './Columns.css';
import ColumnCreate from '../ColumnCreate.js';

const Columns = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (newColumn) => setColumns([...columns, newColumn]);
  const removeColumn = (removeId) => setColumns(columns.filter(({ id }) => id !== removeId))
  // Запрос в базу данных за колонками
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("columns").get().then((querySnapshot) => {
      const columns = [];

      querySnapshot.forEach((doc) => {
        const {deskId, name} = doc.data();

        columns.push({
          id: doc.id,
          deskId,
          name,
        });
      });

      setColumns(columns);
    });
  }, []);

  return (
    <Fragment>
      <PanelHeader >Доска</PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({ id, name }) => <Column name={name} key={id} id={id} onDelete={removeColumn} />)}
        <ColumnCreate onCreate={addColumn} />
      </Gallery>
			
    </Fragment>
  )
}

export default Columns
