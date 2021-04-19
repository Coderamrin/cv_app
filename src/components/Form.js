import React, {useState, useEffect} from "react";
import GeneralInfo from "./GeneralInfo"
import Education from "./Education"; 
import PracticalExp from "./PracticalExp";

function Form() {

  useEffect(() => {
    document.title = "CV APP";
  })

  return (
    <div>
      <GeneralInfo/>
      <Education/>
      <PracticalExp/> 
    </div>
    );
}

function handleChange(e, setValue) {
  setValue(e.target.value);
} 


export { Form, handleChange }; 
