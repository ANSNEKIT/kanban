import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { CardGrid } from "@vkontakte/vkui";

import DeskItem from "../DeskItem/DeskItem.js";
import { getDesks } from "../../actions/index.js";

const DeskList = ({ desks, onDelete, onLoadDesks, onDeskClick }) => {
  // Запрос в базу данных за досками
  useEffect(() => {
    getDesks().then((desks) => onLoadDesks(desks));
  }, []);

  if (!desks.length) {
    return null;
  }
  
  return (
    <CardGrid>
      {desks.map(({id, name }) => (
        <DeskItem 
          key={id} 
          id={id} 
          onClick={() => onDeskClick(id)} 
          onDelete={onDelete}
        >
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLoadDesks: PropTypes.func.isRequired,
  onDeskClick: PropTypes.func.isRequired,
};

export default DeskList;
