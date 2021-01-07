import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import CardCreateForm from './CardCreateForm';
import { cardCreate } from '../../actions/index';
import { addCard } from '../../actions/actions';


const CardCreate = ({ columnId }) => {
  const dispatch = useDispatch();
  
  const createItem = (name) => {
    return cardCreate(name, columnId)
      .then((doc) => dispatch(addCard({id: doc.id, ...doc.data() })))
      .catch(console.error);
  };

  return (
    <CardCreateForm onSubmit={createItem} />
  );
};

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default CardCreate;
