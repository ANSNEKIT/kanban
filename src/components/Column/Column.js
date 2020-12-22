import React from 'react';
import PropTypes from 'prop-types'
import firebase from "firebase/app";
import { Button, Card, Div, Header } from '@vkontakte/vkui';

import './Column.css';
import Cards from '../../Cards';

const Column = ({ name, id, onDelete }) => {
  const deleteColumn = () => {
    const db = firebase.firestore();

    db.collection("columns")
    .doc(id)
    .delete()
    .then(() => onDelete(id))
    .catch(console.error);
  };

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header>{name}</Header>
        <Button mode="destructive" onClick={deleteColumn} >Удалить</Button>
      </div>
      <Card className="Column__wrapper">
        <Cards />
      </Card>
    </Div>
  )
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Column
