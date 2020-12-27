import React, { Fragment } from 'react';
import { PanelHeader, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from '../../components/DeskList/DeskList.js';
import DeskCreate from '../../components/DeskCreate/DeskCreate.js';

const Desks = ({ onChangePanel, desks, setDesks, removeDesk, addDesk }) => {
  return (
    <Fragment>
      <PanelHeader >Стартовый экран</PanelHeader>
			
      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>
      <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} onDeskClick={onChangePanel} />	
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setDesks: PropTypes.func.isRequired,
  removeDesk: PropTypes.func.isRequired,
  addDesk: PropTypes.func.isRequired,
}

export default Desks