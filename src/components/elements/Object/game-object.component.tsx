import React from "react";
import "./game-object.styles.scss";
import { IGameObject } from "../../../interfaces/game-object.interface";

/**
 *
 * @returns A functional component that is responsible for making an object and puttiing it on the map
 */
export const GameObject: React.FC<IGameObject> = ({
  currentRoom,
  gameFunctions,
}) => {
  const changeRoom = () => {
    if (currentRoom.name === "Market") {
      gameFunctions.updateCurrentRoom();
    } else {
      gameFunctions.updateActiveRoom("Market");
    }
  };
  return (
    <div className="game-object" onClick={changeRoom}>
      {currentRoom.name}
      <h1>{JSON.stringify(currentRoom.grid)}</h1>
    </div>
  );
};
