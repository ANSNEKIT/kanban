import React, { Fragment, useEffect } from 'react';
import { PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useDispatch, useSelector } from 'react-redux';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions/index';
import { setColumns, setActivePanel } from '../../actions/actions';
import { pages } from '../../router';


const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const desks = useSelector((state) => state.desks);
  const goToDesks = () => dispatch(setActivePanel(pages.desk));

  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({id}) => id === deskId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    if (desk.id) {
      getColumns(desk.id).then((columns) => dispatch(setColumns(columns)));
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
