import React, {useState} from "react";
import {handleChange} from "./Form"; 

function PracticalExp() {
  let [company, setCompany] = useState("Intel");
  let [position, setPosition] = useState("Tech Lead");
  let [task, setTask] = useState("maneging team");
  let [startOfJob, setStartofjob] = useState("");
  let [endOfJob, setEndofjob] = useState("");

  return (
      <div className="practicalExp">
        <form action="">
          <label htmlFor="company">
            Compay Name:
          </label>
          <input 
          type="text"
          value={company}
          onChange={(e) => {
            handleChange(e, setCompany)
          }}
          />

        <label htmlFor="position">
            Position:
          </label>
          <input 
          type="text"
          value={position}
          onChange={(e) => {
            handleChange(e, setPosition)
          }}
          />
          <label htmlFor="task">
            Main Task:
          </label> 
          <input 
          type="text"
          value={task}
          onChange={(e) => {
            handleChange(e, setTask)
          }}
          />

          <label htmlFor="startOfJob">
            Start Of Job:
          </label>
          <input 
          type="date"
          value={startOfJob}
          onChange={(e) => {
            handleChange(e, setStartofjob)
          }}
          />

          <label htmlFor="endOfJob">
            End Of Job:
          </label>
          <input 
          type="date"
          value={endOfJob}
          onChange={(e) => {
            handleChange(e, setEndofjob)
          }}
          />
        </form>
        <button>Add</button>
      </div>
      )
} 

export default PracticalExp;