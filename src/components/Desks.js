import React, { Fragment } from 'react';
import { PanelHeader, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from './DeskList.js';
import DeskCreate from './DeskCreate.js';

const Desks = ({ onChangePanel }) => {
  return (
    <Fragment>
      <PanelHeader >Стартовый экран</PanelHeader>
			
      <Div>
        <DeskCreate />
      </Div>
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