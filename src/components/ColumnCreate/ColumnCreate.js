import React, { useContext } from 'react';
import { Div } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useDispatch, useSelector } from 'react-redux';

import '../Column/Column.css';
import { createColumn } from '../../actions/index';
import ColumnCreateForm from './ColumnCreateForm.js';
import { addColumn } from '../../actions/actions';


const ColumnCreate = () => {
  const dispatch = useDispatch();
  const desks = useSelector((state) => state.desks);

  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  const createItem = (name) => (
    createColumn(name, desk.id)
      .then((doc) => dispatch(addColumn({ id: doc.id, ...doc.data() })))
      .catch(console.error)
  );

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
};

export default ColumnCreate;
