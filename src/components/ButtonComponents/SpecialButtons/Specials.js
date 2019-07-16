import React, { useState } from "react";

import SpecialButton from "./SpecialButton.js";
//import any components needed
import {specials} from "../../../data.js";

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [spe] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {spe.map( e => <SpecialButton special={e} props={props}/>)}
    </div>
  );
};

export default Specials;