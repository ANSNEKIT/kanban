import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { CardGrid } from '@vkontakte/vkui';
import ColumnCard from '../ColumnCard/ColumnCard.js';
import CardCreate from '../CardCreate/CardCreate.js';
import { getColumns } from '../../actions/index.js';
import Context from '../App/context.js';

const Cards = ({ columnId }) => {
  const {cards, setCards} = useContext(Context);

  // Запрос в базу данных за колонками
  useEffect(() => {
    getColumns(columnId)
      .then((cards) => setCards(cards));
  }, []);

  return (
    <CardGrid>
      {cards.map(({id, name}) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
      <CardCreate columnId={columnId} />
    </CardGrid>
  )
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
