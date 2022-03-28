import React, { useState } from "react";
import { IDropDown } from "../../../interfaces/dropdown.interface";
import "./dropdown.styles.scss";

export const DropDown: React.FC<IDropDown> = ({ choices, name, getName }) => {
  const [expanded, setExpanded] = useState(false);
  //   const [current, setCurrent] = useState(currentRoom);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const setAndInitialize = (e: any) => {
    let choice = e.target.innerText.toLowerCase().split(" ");
    choice =
      choice.length > 1
        ? choice[0] + choice[1][0].toUpperCase() + choice[1].slice(1)
        : choice.join("");

    getName(name, choice);
  };

  return (
    <div className="drop-down">
      <div className="drop-down_title" onClick={handleClick}>
        <h1>- {name} -</h1>
      </div>
      <div className="drop-down_choices">
        {expanded &&
          choices.map((choice, i) => {
            return (
              <p key={i} onClick={setAndInitialize}>
                {choice}
              </p>
            );
          })}
      </div>
    </div>
  );
};
