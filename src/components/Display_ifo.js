import React from "react";
import "../index.css";

const DisplayInfo = (props) => {
    const {
        userName,
        email,
        phone,
        school,
        titleOfStd,
        dateOfStd,
        company,
        position,
        mainTask,
        dateOfJob,
    } = props;
    return (
        <div className="container">
            <div className="generalInfo">
                <h1>General Informaiton:</h1>
                <h2>Name: {userName}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
            </div>

            <div className="educationalExp">
                <h1>Educational Experties: </h1>
                <h2>School Name: {school} </h2>
                <h2>Title of Study: {titleOfStd}</h2>
                <h2>Date of Study: {dateOfStd} </h2>
            </div>

            <div className="practExp">
                <h1> Practical experieces: </h1>
                <h2>Company Name: {company} </h2>
                <h2> Position: {position} </h2>
                <h2>Main Task: {mainTask} </h2>
                <h2>Date of The Job: {dateOfJob} </h2>
            </div>
        </div>
    );
};

export default DisplayInfo;
