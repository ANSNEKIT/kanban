import React, {useEffect, useContext} from "react";
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem.js";
import { getDesks } from "../../actions/index.js";
import Context from "../App/context.js";

const DeskList = () => {
  const { desks, setDesks } = useContext(Context);

  // Запрос в базу данных за досками
  useEffect(() => {
    getDesks().then((desks) => setDesks(desks));
  }, []);

  if (!desks.length) {
    return null;
  }
  
  return (
    <CardGrid>
      {desks.map(({id, name }) => (
        <DeskItem key={id} id={id}>
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

export default DeskList;
