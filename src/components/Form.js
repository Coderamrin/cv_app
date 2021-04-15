import React from "react";
import DisplayInfo from "./Display_ifo"

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            generalInfo : {
                name: "",
                email: "",
                phoneNum: "",
            }
        }
    }

    handleNameChange = (e) => {
        let generalInfo = this.state.generalInfo;
        generalInfo.name = e.target.value;
        this.setState({
            generalInfo: generalInfo
        });
    };

    handleEmailChange = (e) => {
        let generalInfo = this.state.generalInfo;
        generalInfo.email = e.target.value;
        this.setState({
            generalInfo:generalInfo,
        });
    };

    handlePhoneChange = (e) => {
        let generalInfo = this.state.generalInfo;
        generalInfo.phoneNum = e.target.value;
        this.setState({
            generalInfo:generalInfo,
        })
    }


    onSubmitTask = (e) => {
        e.preventDefault();
    }

    render () {
        const {name, email, phoneNum} = this.state.generalInfo;

        return (
          <div className="form_container">
              <form onSubmit={this.onSubmitTask}>
                  <label>Name:</label>
                  <input type="text" onChange={this.handleNameChange} value={name} />
                  <label>Email:</label>
                  <input type="text" onChange={this.handleEmailChange} value={email} />
                  <label>Phone Number:</label>
                  <input type="text" onChange={this.handlePhoneChange} value={phoneNum}/>
                  <button type="submit">Submit</button>
                  <button>Edit</button>
              </form>
              {/* <form>
                  <label>School Name:</label>
                  <input type="text"/>
                  <label>Title Of Study:</label>
                  <input type="text"/>
                  <label>Date Of Study:</label>
                  <input type="text"/>
                  <button type="submit">Submit</button>
                  <button>Edit</button>
             </form>
             <form>  
                  <label>Company Name:</label>
                  <input type="text"/>
                  <label>Position:</label>
                  <input type="text"/>
                  <label>Main Responsibility:</label>
                  <input type="text"/>
                  <label>Date of Your Job:</label>
                  <input type="text"/>
                  <button type="submit">Submit</button>
                  <button>Edit</button>
             </form>   */}

             <DisplayInfo userName={name} email={email} phone={phoneNum}/>
          </div>  
        );
    }
}

export {
    Form
}
    