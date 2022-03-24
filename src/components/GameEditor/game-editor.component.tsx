import React, { useEffect, useState } from "react";
import "./game-editor.styles.scss";
import { IGameEditor } from "../../interfaces/game-editor.interface";
import data from "../../maps.json";
import { IRoom } from "../../interfaces/room.interface";
import { Grid } from "../sections/Grid/grid.component";

/**
 *
 * @returns An editor that we can start building our game maps in
 */
export const GameEditor: React.FC<IGameEditor> = () => {
  // Getting all the rooms from maps.json
  const [rooms, setRooms] = useState(data);

  // The updated version of the rooms state
  const [updatedRooms, setUpdatedRooms] = useState<Array<IRoom>>(rooms);

  // The room that is currently selected
  const [currentRoom, setCurrentRoom] = useState<IRoom>(updatedRooms[0]);

  // Name of the room that is currently selected
  const [activeRoom, setActiveRoom] = useState<string>(currentRoom.name);

  // Game settings
  const [gameSettings, setGameSettings] = useState({
    grid: {
      opacity: 1,
      display: true,
      showCoords: false,
    },

    darkMode: false,
  });

  // Update the current room when active room is changed
  useEffect(() => {
    updatedRooms.map((room) => {
      if (room.name === activeRoom) {
        setCurrentRoom(room);
      }
      return null;
    });
  }, [activeRoom, updatedRooms]);

  const gameFunctions = {
    /**
     * Allows to specify the name of the room you want to change to and changes the current
     * room to the given name
     * @param name Name of the room you want to change to
     */
    updateActiveRoom: (name: string) => {
      setActiveRoom(name);
    },

    updateCurrentRoom: (key: string, value: any) => {
      updatedRooms.map((key) => {
        if (key.name === activeRoom) {
        }
      });
      // setCurrentRoom(prev => {

      // })
    },

    updateRooms: () => {
      updatedRooms.map((room) => {
        if (room.name === activeRoom) {
          console.log(room);
        }
        return null;
      });
      // setUpdatedRooms((prev) => {

      // });
    },
  };

  return (
    <div className="game-editor">
      <Grid currentRoom={currentRoom} gameSettings={gameSettings} />
    </div>
  );
};
