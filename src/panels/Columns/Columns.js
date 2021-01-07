import React, { Fragment, useEffect } from 'react';
import { PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';
import { useDispatch, useSelector } from 'react-redux';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { fetchColumns } from '../../actions/actions';


const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const desks = useSelector((state) => state.desks);
  const goToDesks = () => window.history.back();
  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({id}) => id === deskId) || {};

  // Запрос в базу данных за колонками
  useEffect(() => {
    dispatch(fetchColumns(deskId));
    
  }, [dispatch, deskId]);

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
