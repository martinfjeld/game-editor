import React, { useEffect, useState } from "react";
import { IObjectProperties } from "../../../interfaces/object-properties.interface";
import { DropDown } from "../../elements/DropDown/dropdown.component";
import "./object-properties.styles.scss";

export const ObjectProperties: React.FC<IObjectProperties> = ({
  currentRoom,
  gameFunctions,
}) => {
  const [properties, setProperties] = useState({
    type: undefined,
    skin: undefined,
  });

  // Gets the name of an input selected in the dropdown
  const getName = (name: string, value: string) => {
    setProperties((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    console.log(properties);
  }, [properties]);

  return (
    <div className="object-properties_wrapper">
      <div className="object-properties_module">
        <h1 className="module-title">New Object</h1>
        <DropDown
          getName={getName}
          name="type"
          choices={["Wall", "Game Object", "Person"]}
        />
        <DropDown
          getName={getName}
          name="skin"
          choices={["Hole", "Vase", "Rock", "Emblem"]}
        />
      </div>
    </div>
  );
};
