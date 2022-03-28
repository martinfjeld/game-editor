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
  return <div className="game-object"></div>;
};
