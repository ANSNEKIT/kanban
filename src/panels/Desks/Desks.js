import React, { Fragment } from 'react';
import { PanelHeader, Div } from '@vkontakte/vkui';

import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';


const Desks = () => {

  return (
    <Fragment>
      <PanelHeader >Стартовый экран</PanelHeader>
			
      <Div><DeskCreate /></Div>

      <DeskList />	
    </Fragment>
  )
}

export default Desks;