import React from "react";

const Display = (props) => {
  console.log(props);
  return (
  <div className="display">
    {props.calDisplay}
  </div>
  );
};

export default Display;