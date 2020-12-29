import React, { useContext } from 'react';
import { Div } from '@vkontakte/vkui';

import CreateForm from '../CreateForm/CreateForm.js';
import { createColumn } from '../../actions';
import '../Column/Column.css';
import Context from '../App/context.js';

const ColumnCreate = () => {
  const {addColumn, activeDesk} = useContext(Context);

  const createItem = (name) => (
    createColumn(name, activeDesk.id)
      .then((doc) => addColumn({id: doc.id, ...doc.data() }))
      .catch(console.error)
  );

  return (
    <Div className="Column">
      <CreateForm
        onSubmit={createItem}
        placeholder="Введите название колонки"
        actionTitle="Создать колонку"
      />
    </Div>
  );
}

export default ColumnCreate;
