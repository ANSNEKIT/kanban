import React from 'react';
import { Card, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './ColumnCard.css';
import { deleteCard } from '../../actions/index';
import { removeCard } from '../../actions/actions';

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    deleteCard(id)
      .then(() => dispatch(removeCard(id)))
      .catch(console.error);
  };

  return (
    <Card size="l" mode="outline">
      <Div className="ColumnCard__wrapper">{children}</Div>
    </Card>
  );
};

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ColumnCard;
