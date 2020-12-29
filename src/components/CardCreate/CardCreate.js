import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateForm from '../CreateForm/CreateForm.js';
import { cardCreate } from '../../actions/index.js';
import Context from '../App/context.js';

const CardCreate = ({ columnId }) => {
  const {addCard} = useContext(Context);
  const createItem = (name) => {
    return cardCreate(name, columnId)
      .then((doc) => addCard({id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название карточки"
      actionTitle="Создать карточку"
    />
  );
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
