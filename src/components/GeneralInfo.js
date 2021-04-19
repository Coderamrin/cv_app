import React, {useState, useEffect} from "react";
import { handleChange } from "./Form";

function GeneralInfo() {
  let [name, setName] = useState("Jhon Doe");
  let [email, setEmail] = useState("jhon@Doe.com");
  let [phone, setPhone] = useState("000 333 4855");

  useEffect(() => {
    document.title = "CV APP";
  })

  return ( 
      <div className="generalInfo"> 
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
        </form>
      </div>
    );
}
 
export default GeneralInfo;
  