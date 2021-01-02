import React, {Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'
import { CardGrid, Div } from '@vkontakte/vkui';
import ColumnCard from '../ColumnCard/ColumnCard.js';
import CardCreate from '../CardCreate/CardCreate.js';
import { getCards } from '../../actions/index.js';
import Context from '../App/context.js';
import './Cards.css';

const Cards = ({ columnId }) => {
  const {cards, setCards} = useContext(Context);

  // Запрос в базу данных за колонками
  useEffect(() => {
    getCards(columnId)
      .then((cards) => setCards(cards));
  }, []);

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
