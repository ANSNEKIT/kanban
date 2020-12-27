import React from 'react';
import PropTypes from 'prop-types';

import CreateForm from '../CreateForm/CreateForm.js';
import { createDesk } from '../../actions/index.js';

const DeskCreate = ({ onCreate }) => {
  const createItem = (name) => (
    createDesk(name)
      .then((doc) => onCreate({id: doc.id, ...doc.data() }))
      .catch(console.error)
  );

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  )
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default DeskCreate;
