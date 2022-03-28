import { IDefaults } from "./defaults.interface";

export interface ITile extends IDefaults {
  size?: number;
  coords: string[];
}
