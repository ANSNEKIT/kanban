import React from 'react';
import PropTypes from 'prop-types';

import CreateForm from '../CreateForm/CreateForm.js';
import { cardCreate } from '../../actions/index.js';

const CardCreate = ({ onCreate, columnId }) => {
  const createItem = (name) => {
    return cardCreate(name, columnId)
      .then((doc) => onCreate({id: doc.id, ...doc.data() }))
      .catch(console.error);
  };


  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название карточки"
      actionTitle="Создать карточку"
    />
  )
}

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
}

export default CardCreate
