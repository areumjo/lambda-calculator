import React from "react";

const OperatorButton = (props) => {
  const strtoNum = parseInt(props.props.calDisplay);
  const opeCal = () => {
    if (props.special == 'C') {
      props.props.setNum(0);
    } else if (props.special == '+/-') {
      props.props.setNum(strtoNum*-1)
    } else if (props.special == '%') {
      props.props.setNum(strtoNum*0.01)
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="opeBtn"
        onClick={ () => {
          let history = props.props.calHistory;
          history.push(props.props.calDisplay);
          console.log(history);
          if (props.operator == '=') {
            props.props.setNum(eval(history.reduce((x,y) => x+y)));
            props.props.setHistory([]);
          } else { 
            let operator = props.operator;
            if (operator == 'x') {
              operator = '*'
            }
            history.push(operator);
            props.props.setNum(0);
            props.props.setHistory(history);
          }
        }}>{props.operator}</button>
    </>
  );
};

export default OperatorButton;