import React from 'react';
import { Card, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';


const ColumnCard = ({ children }) => {
  return (
    <Card size="l">
      <Div>{children}</Div>
    </Card>
  )
}

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColumnCard
