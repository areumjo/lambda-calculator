import React from "react";

const SpecialButton = (props) => {
  // const speCondition = (str) => {
  //   if (props.special == 'C') {
  //     props.props.setNum(0);
  //   } else if (props.special == '+/-') {
  //     parseInt(props.props.calDisplay) * 1 
  //     props.props.calDisplay=(parseInt(props.props.calDisplay) * 1).toString()
  //   }
  const strtoNum = parseInt(props.props.calDisplay);
  
  console.log(strtoNum);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        id={props.special}
        onClick={() => {
          console.log(props.special);
          if (props.special == 'C') {
            props.props.setNum(0);
          } else if (props.special == '+/-') {
            props.props.setNum(strtoNum*-1)
          } else if (props.special == '%') {
            props.props.setNum(strtoNum*0.01)
          }
          }}>{props.special}</button>
    </>
  );
};

export default SpecialButton;