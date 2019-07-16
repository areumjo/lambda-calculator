import React, { useState } from "react";

import NumberButton from "./NumberButton.js";
//import any components needed
import { numbers, operators, specials } from "../../../data.js";
//Import your array data to from the provided data file

console.log(numbers);

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [num] = useState(numbers);
  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {num.map( e => <NumberButton number={e} />)}
       <p>testing</p>
    </div>
  );
};

export default Numbers;