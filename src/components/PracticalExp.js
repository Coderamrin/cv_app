import React, {useState, Fragment} from "react";
import ReactDOM from "react-dom";
import {handleChange} from "./Form"; 
import DisplayInfo from "./DisplayInfo";

function PracticalExp() {
	return (
		<Fragment>
			<h3>Practial Experience</h3>
			<PracticalExpForm/>
		</Fragment>
		)
}

function PracticalExpForm() {
  let [company, setCompany] = useState("xyz");
  let [position, setPosition] = useState("");
  let [task, setTask] = useState("");
  let [startOfJob, setStartofjob] = useState("");
  let [endOfJob, setEndofjob] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let exps = <>
      <div> company: <span>{company}</span></div>
      <div>position:<span>{position}</span></div>
      <div>task:<span>{task}</span></div>
      <div>From:<span>{startOfJob}</span></div>
      <div>To:<span>{endOfJob}</span></div>
    </>

    ReactDOM.render(exps, document.getElementById("exps")) 
  }

  return ( 
      <div className="practicalExp" id="exps">
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
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>  
        </form>
      </div>
      )   
} 

// function Addform() { 
//   let [count, setCount] = useState(0);

//   return <div> 
//     { [...Array(count)].map((_, i) => <PracticalExpForm key={i} />) }
//     <button  onClick={() => setCount(count + 1)} >Add</button>
//   </div>
// } 

export {PracticalExp}; 