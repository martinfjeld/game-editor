/**
 * Includes the initial settings of the game
 */
export const gameUtils = {
  tileSize: 32,

  /**
   *  Initializing an empty room
   */
  emptyRoom: {
    name: "",
    grid: {
      x: "",
      y: "",
    },
    sprite: "",
    gameObjects: {
      hero: {
        x: "",
        y: "",
        sprite: "",
      },
    },
    walls: {
      "": "",
    },
  },
};
