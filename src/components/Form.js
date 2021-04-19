import React, {useEffect} from "react";
import GeneralInfo from "./GeneralInfo"
import Education from "./Education"; 
import {PracticalExp} from "./PracticalExp";
import DisplayInfo from "./DisplayInfo";

function Form() {

  useEffect(() => {
    document.title = "CV APP";
  })

  return (

    <div > 
      <h1 className="header">CV APP With React</h1>
      <div className="container">
        <h3>General Info</h3>  
        <GeneralInfo/>
        <Education/>
        <PracticalExp/>         
      </div> 
    </div>
    );
}

function handleChange(e, setValue) {
  setValue(e.target.value);
} 

export { Form, handleChange}; 
