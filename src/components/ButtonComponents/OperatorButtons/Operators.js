import React, { useState } from "react";

import OperatorButton from "./OperatorButton.js";
//import any components needed
import { operators } from "../../../data.js";

//Import your array data to from the provided data file
console.log(operators);
const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ope] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {ope.map( e => <OperatorButton operator={e.char} />)}
    </div>
  );
};

export default Operators;
