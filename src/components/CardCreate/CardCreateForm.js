import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Div } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';

import { useCreateForm } from '../CreateForm/hooks';
import './CardCreateForm.css';


const CardCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
    submit,
    reset,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm({onSubmit});

  if (isButtonMode) {
    return (
      <Button
        onClick={setFormMode}
        before={<Icon24Add />}
        size="l"
        stretched="true"
        mode="outline"
      >
        Добавить карточку
      </Button>
    );
  }

  return (
    <Card size="l" mode="shadow">
      <Div>
        <form onSubmit={submit}>
            <input
              className="CardCreateForm__input" 
              autoFocus
              value={name}
              onChange={onChangeInput}
              status={status}
              placeholder="Введите название карточки"
            />
          
          <div className="CardCreateForm__buttons">
            <Button mode="commerce" className="CardCreateForm__activeButton" onClick={submit}>Добавить</Button>
            <Button onClick={reset} mode="tertiary"><Icon24Dismiss/></Button>
          </div>
        </form>
      </Div>
    </Card>
  );
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardCreateForm;
