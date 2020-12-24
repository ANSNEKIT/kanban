import React, { Fragment, useEffect } from 'react';
import { PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import firebase from "firebase/app";
import PropTypes from 'prop-types'

import Column from '../../Column/Column.js';
import './Columns.css';
import ColumnCreate from '../../ColumnCreate/ColumnCreate.js';

const Columns = ({ desk, goToDesks, addColumn, removeColumn, columns, setColumns  }) => {
  // Запрос в базу данных за колонками
  useEffect(() => {

    const db = firebase.firestore();

    db.collection("columns").where('deskId', '==', desk.id).get().then((querySnapshot) => {
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
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>Доска {desk.name}</PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({ id, name }) => <Column name={name} key={id} id={id} onDelete={removeColumn} />)}
        <ColumnCreate deskId={desk.id} onCreate={addColumn} />
      </Gallery>
			
    </Fragment>
  )
}

Columns.propTypes = {
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  goToDesks: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  setColumns: PropTypes.func.isRequired,
}

export default Columns
