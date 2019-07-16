import React from "react";

const UpdateDisplay = (curr, next) => {
  if (curr == 0) {
    return next;
  }
  else {
    return curr + next;
  }
}


const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        className="numBtn" 
        id={props.number}
        onClick={() => {props.setNum(UpdateDisplay(props.calDisplay, props.number))}}
        >
          {props.number}
      </button>
    </>
  );
};

export default NumberButton;