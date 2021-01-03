import { useEffect, useState } from 'react';
import { getDesks } from '../../actions';
import {pages} from "../../router";


const useDeskState = () => {
  const [desks, setDesks] = useState([]);
  const addDesk = (newDesk) => setDesks([...desks, newDesk]);
  const removeDesk = (removeId) => {
    setDesks(desks.filter(({ id }) => id !== removeId));
  };
  
  // Запрос в базу данных за досками
  useEffect(() => {
    getDesks().then((desks) => setDesks(desks));
  }, []);

  return { desks, addDesk, removeDesk, setDesks };
};

const useColumnState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (newColumn) => setColumns([...columns, newColumn]);
  const removeColumn = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId));

  return { columns, addColumn, removeColumn, setColumns };
};

const useNavState = () => {
  const [activePanel, setActivePanel] = useState(null);  
  const changeRoute = ({ route }) => setActivePanel(route.name);

  return { activePanel, changeRoute };
};

export const useCardState = () => {
  const [cards, setCards] = useState([]);
  const addCard = (newCard) => setCards([...cards, newCard]);
  const removeCard = (removeId) => setCards(cards.filter(({ id }) => id !== removeId));

  return {cards, setCards, addCard, removeCard};
};

export const usePopoutState = () => {
  const [popout, setPopout] = useState(null);

  return {popout, setPopout};
};

export const useAppState = () => {
  const desksState = useDeskState();
  const columnsState = useColumnState();
  const navState = useNavState(desksState.desks);
  const cardState = useCardState();
  const popoutState = usePopoutState();

  return {
    ...desksState,
    ...columnsState,
    ...navState,
    ...cardState,
    ...popoutState,
  };
};