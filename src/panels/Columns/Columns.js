import React, { Fragment, useContext, useEffect } from 'react';
import { PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';

import Column from '../../components/Column/Column';
import './Columns.css';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions';
import Context from '../../components/App/context';

const Columns = () => {
  const { activeDesk, columns, goToDesks, setColumns } = useContext(Context);

  // Запрос в базу данных за колонками
  useEffect(() => {
    getColumns(activeDesk.id).then((columns) => setColumns(columns));
  }, []);

  return (
    <Fragment>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>Доска {activeDesk.name}</PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({ id, name }) => <Column name={name} key={id} id={id} />)}
        <ColumnCreate />
      </Gallery>
			
    </Fragment>
  )
};

export default Columns
