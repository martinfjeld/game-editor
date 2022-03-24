import { IRoom } from "./room.interface";

export interface IGameObject {
  gameFunctions: { [key: string]: Function };
  currentRoom: IRoom;
}
