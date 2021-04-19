import React, {useState, Fragment} from "react";
import ReactDOM from 'react-dom';
import {handleChange} from "./Form";
import DisplayInfo from "./DisplayInfo";

function Education(props) {
    return(
        <Fragment>
          <h3>Education</h3>
          <EducationForm/>
        </Fragment> 
      )
}

function EducationForm() {
  let [school, setSchool] = useState("xyz school");
  let [titleOfStudy, setTitleofstudy] = useState("MBA");
  let [startOfStudy, setStartofstudy] = useState("22/33/1999");
  let [endOfStudy, setEndofstudy] = useState("22/33/2000");

  function handleSubmit(e) {
    e.preventDefault();
    let edu = <> 
      <div>school:<span>{school}</span> </div>
      <div>title:<span>{titleOfStudy}</span> </div>
      <div>From:<span>{startOfStudy}</span> </div>
      <div>To:<span>{endOfStudy}</span> </div>  
    </>

    ReactDOM.render(edu, document.getElementById("edu"))
  }

  return (
      <div className="education" id="edu">
        <form action="" className="form" >
          <label htmlFor="schoolName">
            School Name:
          <input 
          type="text"
          value={school}
          onChange={(e) => {
            handleChange(e, setSchool)
          }}
          />            
          </label>

        <label htmlFor="titleOfStudy">
            Title of Study:
          <input 
          type="text"
          value={titleOfStudy}
          onChange={(e) => {
            handleChange(e, setTitleofstudy)
          }}
          />            
          </label>

          <label htmlFor="schoolName">
            Start of Study:
          <input 
          type="date"
          value={startOfStudy}
          onChange={(e) => {
            handleChange(e, setStartofstudy)
          }}
          />            
          </label> 


          <label htmlFor="schoolName">
            End of Study:
          <input 
          type="date"
          value={endOfStudy}
          onChange={(e) => {
            handleChange(e, setEndofstudy)
          }}
          />             
          </label>

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
//     { [...Array(count)].map((_, i) => <EducationForm key={i} />) }
//     <button  onClick={() => setCount(count + 1)}>Add</button>
//   </div>
// } 

export default Education;

