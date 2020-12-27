import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '@vkontakte/vkui';
import CreateForm from '../CreateForm/CreateForm.js';
import { createColumn } from '../../actions';

import '../Column/Column.css';

const ColumnCreate = ({ onCreate, deskId }) => {
  const createItem = (name) => {
    return createColumn(name, deskId)
      .then((doc) => onCreate({id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

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

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
}

export default ColumnCreate;
