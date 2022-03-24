import React from "react";
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
}) => {
  return (
    <div className="tile" style={{ width: size, height: size }}>
      {coords}
    </div>
  );
};
