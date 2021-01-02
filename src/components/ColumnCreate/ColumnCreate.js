import React, { useContext } from 'react';
import { Div } from '@vkontakte/vkui';

import { createColumn } from '../../actions';
import '../Column/Column.css';
import Context from '../App/context.js';
import ColumnCreateForm from './ColumnCreateForm.js';

const ColumnCreate = () => {
  const {addColumn, activeDesk} = useContext(Context);

  const createItem = (name) => (
    createColumn(name, activeDesk.id)
      .then((doc) => addColumn({id: doc.id, ...doc.data() }))
      .catch(console.error)
  );

  return (
    <Div className="Column">
      <ColumnCreateForm onSubmit={createItem} />
    </Div>
  );
}

export default ColumnCreate;
