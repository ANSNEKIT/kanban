import React, { useContext } from 'react';
import { Div } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';

import { createColumn } from '../../actions';
import '../Column/Column.css';
import Context from '../App/context.js';
import ColumnCreateForm from './ColumnCreateForm.js';


const ColumnCreate = () => {
  const { desks, addColumn } = useContext(Context);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  const createItem = (name) => (
    createColumn(name, desk.id)
      .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
      .catch(console.error)
  );

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
