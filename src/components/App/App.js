import React, { useState } from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Desks from "../../panels/Desks/Desks";
import Columns from '../../panels/Columns/Columns';


const panel = {
  desks: "desks",
  columns: "columns",
};


const App = () => {
  // Доски
  const { desks, addDesk, removeDesk, setDesks } = useDeskState();
  // Колонки
  const { columns, addColumn, removeColumn, setColumns } = useColumnState();
  // Приложение
  const { activePanel, activeDesk, goToColumns, goToDesks } = useAppState(desks);
  
  return (
    <View activePanel={activePanel} header={false} >
      <Panel id={panel.desks} separator={false}>
        <Desks 
          onChangePanel={goToColumns}
          addDesk={addDesk}
          removeDesk={removeDesk}
          desks={desks}
          setDesks={setDesks}
        />
      </Panel>

      <Panel id={panel.columns} separator={false} className="Columns">
      {activeDesk && (
        <Columns
          desk={activeDesk}
          goToDesks={goToDesks}
          addColumn={addColumn}
          removeColumn={removeColumn}
          columns={columns}
          setColumns={setColumns}
        />
      )}
      </Panel>
    </View>
  );
};

const useDeskState = () => {
  const [desks, setDesks] = useState([]);
  const addDesk = (newDesk) => setDesks([...desks, newDesk]);
  const removeDesk = (removeId) => setDesks(desks.filter(({ id }) => id !== removeId));

  return { desks, addDesk, removeDesk, setDesks };
};

const useColumnState = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (newColumn) => setColumns([...columns, newColumn]);
  const removeColumn = (removeId) => setColumns(columns.filter(({ id }) => id !== removeId));

  return { columns, addColumn, removeColumn, setColumns };
};

const useAppState = (desks) => {
  const [activePanel, setActivePanel] = useState(panel.desks);
  const [activeDesk, setActiveDesk] = useState(null);
  const goToColumns = (deskId) => {
    setActiveDesk(desks.find(({ id }) => id === deskId));
    setActivePanel(panel.columns);
  };
  const goToDesks = () => setActivePanel(panel.desks);

  return { activePanel, activeDesk, goToColumns, goToDesks };
};

export default App;
