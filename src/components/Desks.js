import React, { Fragment } from 'react';
import { PanelHeader } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from './DeskList.js';

const Desks = ({ onChangePanel }) => {
  return (
    <Fragment>
      <PanelHeader >Стартовый экран</PanelHeader>
			
      <DeskList />	

      {/* <div>Я панель с досками</div>
			<Button onClick={onChangePanel}>Перейти к колонкам</Button> */}
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks