import React from "react";

const OperatorButton = (props) => {
  console.log(props.operator);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.operator}</button>
    </>
  );
};

export default OperatorButton;