import React, { useEffect, useState } from "react";
import { IGrid } from "../../../interfaces/grid.interface";
import { gameUtils } from "../../../_utils/_settings";
import { Tile } from "../../elements/Tile/tile.component";
import "./grid.styles.scss";

/**
 *
 * @currentRoom Properties of the current room
 * @returns A grid made from the corresponding room in maps.json
 */
export const Grid: React.FC<IGrid> = ({ currentRoom, gameSettings }) => {
  // Calculate how many tiles there is in the room and make an array out of it to loop through later
  let tiles = new Array(+currentRoom.grid.x * +currentRoom.grid.y).fill(0);

  // Contains all coordinates for the current room
  let [coords, setCoords] = useState<string[][]>([]);

  useEffect(() => {
    let myArray = [];
    for (let x = 0; x < +currentRoom.grid.x; x++) {
      for (let y = 0; y < +currentRoom.grid.y; y++) {
        myArray.push([`${x},${y}`]);
      }
    }

    setCoords(myArray);
  }, [currentRoom.grid.x, currentRoom.grid.y]);

  console.log(coords);

  return (
    <div
      className="grid"
      style={{
        height: gameUtils.tileSize * +currentRoom.grid.x,
        width: gameUtils.tileSize * +currentRoom.grid.y,
        backgroundImage: `url(${currentRoom.sprite})`,
      }}
    >
      {tiles.map((map: any, i: number) => {
        // Looping through the tiles array
        return <Tile key={i} coords={coords[i]} gameSettings={gameSettings} />;
      })}
    </div>
  );
};
