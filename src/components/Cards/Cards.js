import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types'
import { CardGrid, Div } from '@vkontakte/vkui';
import { useDispatch, useSelector } from 'react-redux';

import './Cards.css';
import ColumnCard from '../ColumnCard/ColumnCard.js';
import CardCreate from '../CardCreate/CardCreate.js';
import { fetchCards } from '../../actions/actions.js';

const Cards = ({ columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  // Запрос в базу данных за колонками
  useEffect(() => {
    dispatch(fetchCards(columnId));
  }, [dispatch, columnId]);

  return (
    <Fragment>
      <CardGrid>
        {cards.map(({id, name}) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
      </CardGrid>
      <Div className="Cards__createButton">
        <CardCreate columnId={columnId} />
      </Div>
    </Fragment>
    
  )
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default Cards;
