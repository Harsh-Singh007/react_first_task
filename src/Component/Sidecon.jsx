import React from "react";
import sidecon from "./Style/Sidecon.css";
import { TiArrowRightOutline } from "react-icons/ti";
const Sidecon = () => {
  return (
    <div className="sidecon">
      <h1>
        <TiArrowRightOutline /> Main Menu
      </h1>
      <div className="menu">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
        <li>Menu Item 5</li>
        <li>Menu Item 6</li>
        <li>Menu Item 7</li>
        <li>Menu Item 8</li>
      </div>
      <h1>
        <TiArrowRightOutline /> Block
      </h1>
      <div className="block">
        <h4>Enter Block Content here</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          fugiat quis dolorem doloribus rerum deserunt illum dolore molestiae
          neque fuga alias, facilis inventore eos autem animi repudiandae,
          assumenda est esse!
        </p>
      </div>
    </div>
  );
};

export default Sidecon;
