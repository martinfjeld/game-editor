import { IRoom } from "./room.interface";

export interface IDefaults {
  gameFunctions?: { [key: string]: Function };
  currentRoom?: IRoom;
  gameSettings?: {
    grid: {
      [key: string]: number | boolean;
    };
  };
}
