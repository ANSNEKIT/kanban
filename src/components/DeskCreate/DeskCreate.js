import React from 'react';
import { useDispatch } from 'react-redux';

import { createDesk } from '../../actions/actions.js';
import CreateForm from '../CreateForm/CreateForm.js';


const DeskCreate = () => {
  const dispatch = useDispatch();
  const createItem = (name) => dispatch(createDesk(name));

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Введите название доски"
      actionTitle="Создать доску"
    />
  )
};

export default DeskCreate;
