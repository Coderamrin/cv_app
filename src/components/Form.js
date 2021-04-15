import React from "react";
import DisplayInfo from "./Display_ifo"

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            phone: "",
            schoolName: "",
            titleOfStd: "",
            dateOfStd: "",
            companyName: "",
            position: "",
            mainTask: "",
            dateOfJob: ""
        };
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });

        console.log(this.state);
    };

    onSubmitTask = (e) => {
        e.preventDefault();
    }

    render () {
        return (
          <div className="form_container">
              <form onSubmit={this.onSubmitTask}>
                  <label htmlFor="username">Name:</label>
                  <input 
                  type="text" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange}
                  />

                  <label htmlFor="email">Email:</label>
                  <input 
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  />

                  <label htmlFor="phone">Phone Number:</label>
                  <input 
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange} 
                  />

                  <button type="submit">Submit</button>
                  <button>Reset</button>
              </form>
              <form onSubmit={this.onSubmitTask}>
                  <label htmlFor="schoolName">School Name:</label>
                  <input 
                  type="text"
                  name="schoolName"
                  value={this.state.schoolName}
                  onChange={this.handleChange}
                  />

                  <label htmlFor="titleOfStd">Title Of Study:</label>
                  <input 
                   type="text"
                   name="titleOfStd"
                   value={this.state.titleOfStd}
                   onChange={this.handleChange}
                  />

                  <label htmlFor="dateOfStd">Date Of Study:</label>
                  <input 
                  type="text"
                  name="dateOfStd"
                  value={this.state.dateOfStd}
                  onChange={this.handleChange}
                  />
                  <button type="submit">Submit</button>
                  <button>Reset</button>
             </form>
             <form onSubmit={this.onSubmitTask}>  
                  <label htmlFor="companyName">Company Name:</label>
                  <input
                  type="text"
                  name="companyName"
                  value={this.state.companyName}
                  onChange={this.handleChange}
                  />

                  <label htmlFor="position">Position:</label>
                  <input 
                  type="text"
                  name="position"
                  value={this.state.position}
                  onChange={this.handleChange}
                  />

                  <label htmlFor="mainTask">Main Responsibility:</label>
                  <input 
                  type="text" 
                  name="mainTask"
                  value={this.state.mainTask}
                  onChange={this.handleChange}
                  />

                  <label htmlFor="dateOfJob">Date of Your Job:</label>
                  <input 
                  type="text"
                  name="dateOfJob"
                  value={this.state.dateOfJob}
                  onChange={this.handleChange}
                  />
                  <button type="submit">Submit</button>
                  <button>Reset</button>
             </form>  

             <DisplayInfo 
              userName={this.state.username}
              email={this.state.email} 
              phone={this.state.phone}

              school={this.state.schoolName}
              titleOfStd ={this.state.titleOfStd}
              dateOfStd={this.state.dateOfStd}

              companyName={this.state.companyName}
              position={this.state.position}
              mainTask={this.state.mainTask}
              dateOfJob={this.state.dateOfJob}
              
             />
          </div>  
        );
    }
}

export {
    Form
}
    