export interface IRoom {
  name: string;
  grid: {
    x: string;
    y: string;
  };
  sprite: string;
  gameObjects: {
    [character: string]: {
      x: string;
      y: string;
      sprite: string;
    };
  };
  walls: {
    [coord: string]: any;
  };
}
