import React from "react";

const DisplayInfo = (props) => {
    const {userName, email, phone} = props;
    console.log(props);
    return(
        <div>
            <div className="generalInfo">
                <h1>General Informaiton:</h1>
                <h2>Name: {userName}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>  
            </div>

            <div className="educationalExp">
                <h1>Educational Experties:</h1>
                <h2>School Name: </h2>
                <h2>Title of Study: </h2>
                <h2>Date of Study: </h2>
            </div>

            <div className="practExp">
                
            </div>

        </div>
    );
}

export default DisplayInfo;
