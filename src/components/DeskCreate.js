import React, { useState } from 'react'
import { Button, Card, FormLayout, Input } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import firebase from "firebase/app";

const modes = {
  button: 'button',
  form: 'form',
}

const statuses = {
  default: 'default',
  error: 'error',
}

const DeskCreate = () => {

  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(statuses.default);

  const reset = () => {
    setMode(modes.button);
    setName('');
    setStatus(statuses.default);
  }
  const createDesk = (evt) => {
    if (evt) {
      evt.preventDefault();
    }
    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }
    setStatus(statuses.default);

    const db = firebase.firestore();

    db.collection("desks")
    .doc()
    .set({ name })
    .then(reset)
    .catch(console.error);

  };

  if (mode === modes.button) {
    return (
      <Button 
        onClick={() => setMode(modes.form)} 
        before={<Icon24Add/>} 
        size="xl" 
      >
      Создать доску</Button>
    )
  }

  return (
    <Card mode="shadow">
      <FormLayout onSubmit={createDesk}>
        <Input 
          autoFocus
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          status={status}
          placeholder="Введите название доски"
        />
        <div>
          <Button onClick={createDesk}>Создать</Button>
          <Button onClick={reset} mode="tertiary">Отменить</Button>
        </div>
        
      </FormLayout>
    </Card>
  )
}

export default DeskCreate
