import { NumberLiteralType } from "typescript";
import { IRoom } from "./room.interface";

export interface IGrid {
  currentRoom: IRoom;
  gameSettings: Object;
}
