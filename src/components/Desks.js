import React, { Fragment, useState } from 'react';
import { PanelHeader, Div } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import DeskList from './DeskList.js';
import DeskCreate from './DeskCreate.js';

const Desks = ({ onChangePanel }) => {
  const [desks, setDesks] = useState([]);
  const addDesk = (newDesk) => setDesks([...desks, newDesk]);
  const removeDesk = (removeId) => setDesks(desks.filter(({ id }) => id !== removeId)) 
  

  return (
    <Fragment>
      <PanelHeader >Стартовый экран</PanelHeader>
			
      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>
      <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} />	

      {/* <div>Я панель с досками</div>
			<Button onClick={onChangePanel}>Перейти к колонкам</Button> */}
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks