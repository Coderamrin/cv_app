import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { handleChange } from "./Form";
import DisplayInfo from "./DisplayInfo";
 
function GeneralInfo() {
  let [name, setName] = useState("Jhon Doe");
  let [email, setEmail] = useState("jhon@Doe.com");
  let [phone, setPhone] = useState("000 333 4855");

  useEffect(() => {
    document.title = "CV APP";
  })

  function handleSubmit(e) {
    e.preventDefault();
    let info = <> 
      <div>school:<span>{name}</span> </div>
      <div>title:<span>{email}</span> </div>
      <div>From:<span>{phone}</span> </div>  
    </> 

    ReactDOM.render(info, document.getElementById("info"))
  }

  return ( 
      <div className="generalInfo" id="info"> 
        <form action="">
          <label htmlFor={name}>Name:</label>
          <input
          type="text"
          value={name}
          onChange={(e) => {
            handleChange(e, setName)
          }}
          />

          <label htmlFor={email}>Email:</label>
          <input
          type="email"
          value={email}
          onChange={(e) => {
            handleChange(e, setEmail)
          }}
          />

          <label htmlFor={phone}>Phone:</label>
          <input
          type="text"
          value={phone}
          onChange={(e) => {
            handleChange(e, setPhone)
          }}
          />
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>    
        </form>
      </div>
    );
}
 
export default GeneralInfo;
  