import React from "react";
import "./index.css";

function Car(props) {
  const { car } = props;
  return (
    <div>
      <h3 id="car">{car}</h3>
    </div>
  );
}

export default Car;
