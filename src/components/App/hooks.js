import { useState } from 'react'
import { panel } from './constants';


const useDeskState = () => {
  const [desks, setDesks] = useState([]);
  const addDesk = (newDesk) => setDesks([...desks, newDesk]);
  const removeDesk = (removeId) =>
    setDesks(desks.filter(({ id }) => id !== removeId));

  return { desks, addDesk, removeDesk, setDesks };
};

const useColumnState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (newColumn) => setColumns([...columns, newColumn]);
  const removeColumn = (removeId) =>
    setColumns(columns.filter(({ id }) => id !== removeId));

  return { columns, addColumn, removeColumn, setColumns };
};

const useNavState = (desks) => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState(null);
  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };
  const goToDesks = () => setActivePanel(panel.desks);

  return { activePanel, activeDesk, goToColumns, goToDesks };
};

export const useCardState = () => {
  const [cards, setCards] = useState([]);
  const addCard = (newCard) => setCards([...cards, newCard]);
  const removeCard = (removeId) => setCards(cards.filter(({ id }) => id !== removeId));

  return {cards, setCards, addCard, removeCard};
};

export const useAppState = () => {
  const desksState = useDeskState();
  const columnsState = useColumnState();
  const navState = useNavState(desksState.desks);
  const cardState = useCardState()

  return {
    ...desksState,
    ...columnsState,
    ...navState,
    ...cardState,
  };
};