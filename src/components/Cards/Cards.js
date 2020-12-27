import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { CardGrid } from '@vkontakte/vkui';
import ColumnCard from '../ColumnCard/ColumnCard.js';
import CardCreate from '../CardCreate/CardCreate.js';
import { getColumns } from '../../actions/index.js';

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const addCard = (newCard) => setCards([...cards, newCard]);
  const removeCard = (removeId) => setCards(cards.filter(({ id }) => id !== removeId))
  // Запрос в базу данных за колонками
  useEffect(() => {
    getColumns(columnId)
      .then((cards) => setCards(cards));
  }, []);

  return (
    <CardGrid>
      {cards.map(({id, name}) => <ColumnCard key={id} id={id} onDelete={removeCard}>{name}</ColumnCard>)}
      <CardCreate columnId={columnId} onCreate={addCard} />
    </CardGrid>
  )
}

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default Cards
