import React from "react";
import "./index.css";

function Adress(props) {
  const { region, zip } = props.address;
  return (
    <div>
      <h3>{region}</h3>
      <h3>{zip}</h3>
    </div>
  );
}

export default Adress;
