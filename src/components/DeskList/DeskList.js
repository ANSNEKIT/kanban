import React, { useEffect } from "react";
import { CardGrid } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";

import DeskItem from "../DeskItem/DeskItem.js";
import { fetchDesks } from "../../actions/actions.js";


const DeskList = () => {
  const dispatch = useDispatch();
  const desks = useSelector((state) => state.desks);

  // Запрос в базу данных за досками
  useEffect(() => {
    dispatch(fetchDesks());
  }, [dispatch]);

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
