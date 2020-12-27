import React, { Fragment, useEffect } from 'react';
import { PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import PropTypes from 'prop-types'

import Column from '../../components/Column/Column';
import './Columns.css';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions';

const Columns = ({ desk, goToDesks, addColumn, removeColumn, columns, setColumns  }) => {
  // Запрос в базу данных за колонками
  useEffect(() => {
    getColumns(desk.id).then((columns) => setColumns(columns));
  }, []);

  return (
    <Fragment>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>Доска {desk.name}</PanelHeader>

      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({ id, name }) => <Column name={name} key={id} id={id} onDelete={removeColumn} />)}
        <ColumnCreate deskId={desk.id} onCreate={addColumn} />
      </Gallery>
			
    </Fragment>
  )
}

Columns.propTypes = {
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  goToDesks: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  setColumns: PropTypes.func.isRequired,
}

export default Columns
