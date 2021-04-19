import React, {useState} from "react";
import {handleChange} from "./Form";

function Education() {

  let [school, setSchool] = useState("xyz school");
  let [titleOfStudy, setTitleofstudy] = useState("MBA");
  let [startOfStudy, setStartofstudy] = useState("22/33/1999");
  let [endOfStudy, setEndofstudy] = useState("22/33/2000");

  return (
      <div className="ecducation">
        <form action="">
          <label htmlFor="schoolName">
            School Name:
          </label>
          <input 
          type="text"
          value={school}
          onChange={(e) => {
            handleChange(e, setSchool)
          }}
          />

        <label htmlFor="titleOfStudy">
            Title of Study:
          </label>
          <input 
          type="text"
          value={titleOfStudy}
          onChange={(e) => {
            handleChange(e, setTitleofstudy)
          }}
          />
          <label htmlFor="schoolName">
            Start of Study:
          </label> 
          <input 
          type="date"
          value={startOfStudy}
          onChange={(e) => {
            handleChange(e, setStartofstudy)
          }}
          />

          <label htmlFor="schoolName">
            End of Study:
          </label>
          <input 
          type="date"
          value={endOfStudy}
          onChange={(e) => {
            handleChange(e, setEndofstudy)
          }}
          />

        </form>
        
        <button>Add</button>
      </div>
      )
}

export default Education;

