import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { ActionSheet, ActionSheetItem, Button, Card, Div, Header, usePlatform, IOS } from '@vkontakte/vkui';
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';

import './Column.css';
import Cards from '../Cards/Cards';
import { deleteColumn } from '../../actions';
import Context from '../App/context';

const Column = ({ name, id }) => {
  const osname = usePlatform();
  const {removeColumn, setPopout} = useContext(Context);

  const deleteItem = () => {
    deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };

  const showColumnOptions = () => {
    const close = () => setPopout(null);
      
    setPopout((
      <ActionSheet onClose={close}>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>
          Удалить
        </ActionSheetItem>
      </ActionSheet>
    ))
  }

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header className="Column__title">{name}</Header>
        <Button
          className="Column__headerButton"
          mode="overlay_outline" 
          onClick={showColumnOptions} 
        > 
          <Icon16MoreHorizontal />
        </Button>
      </div>
      <Card className="Column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  )
};

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Column;
