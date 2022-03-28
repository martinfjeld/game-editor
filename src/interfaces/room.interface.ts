export interface IRoom {
  name: string;
  grid: {
    x: string;
    y: string;
  };
  sprite: string;
  gameObjects?: any;
  walls: any;
}
