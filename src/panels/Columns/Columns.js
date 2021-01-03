import React, { Fragment, useContext, useEffect } from 'react';
import { PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions';
import Context from '../../components/App/context';

const Columns = () => {
  const { columns, goToDesks, setColumns, desks } = useContext(Context);
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({id}) => id === deskId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    if (desk.id) {
      getColumns(desk.id).then((columns) => setColumns(columns));
    }
    
  }, [desk]);

  return (
    <Fragment>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>Доска {desk.name ? `«${desk.name}»` : '' }</PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="85%"
        align="left"
      >
        {columns.map(({ id, name }) => <Column name={name} key={id} id={id} />)}
        <ColumnCreate />
      </Gallery>
			
    </Fragment>
  )
};

export default Columns;
