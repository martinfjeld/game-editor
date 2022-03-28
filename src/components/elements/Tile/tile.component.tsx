import React, { useEffect, useState } from "react";
import { ITile } from "../../../interfaces/tile.interface";
import "./tile.styles.scss";
import { gameUtils } from "../../../_utils/_settings";

/**
 *
 * @size Size of the tile, defaulting to the size specified in utils.ts
 * @returns A tile containing its own state of coordinate, isActive and visibility
 */
export const Tile: React.FC<ITile> = ({
  coords,
  size = gameUtils.tileSize,
  gameSettings,
  gameFunctions,
  currentRoom,
}) => {
  // State of type of Tile
  const [type, setType] = useState({
    gameObject: false,
    person: false,
    wall: false,
  });

  // Do checks to see what type the Tile is and change it to the correct one
  useEffect(() => {
    if (coords === undefined) return;

    // Check if Tile is a gameObject or a Person
    Object.values(currentRoom?.gameObjects).map((obj: any) => {
      if (`${obj.y},${obj.x}` === coords.join("")) {
        setType((prev) => {
          return {
            ...prev,
            // Determine wheather the Tile is a wall or a gameObject
            [`${obj.isPerson ? "person" : "gameObject"}`]: true,
          };
        });
      }
    });

    // Check if Tile is a wall
    if (Object.keys(currentRoom?.walls).indexOf(coords.join("")) !== -1) {
      setType((prev) => {
        return {
          ...prev,
          wall: true,
        };
      });
    }
  }, [coords, currentRoom]);

  return (
    <div
      className="tile"
      onClick={() => {
        gameFunctions?.setCoords(coords);
      }}
      style={{
        width: size,
        height: size,
        border: !gameSettings?.grid.display ? "none" : "",
        backgroundColor: type.wall
          ? "rgba(1,1,1,.7)"
          : type.gameObject
          ? "red"
          : type.person
          ? "purple"
          : "",
      }}
    >
      {
        // Show the coordinate inside the tile if setting is turned on
        gameSettings?.grid.showCoords && coords
      }
    </div>
  );
};
