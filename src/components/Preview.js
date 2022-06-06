import React from 'react';

function Preview({ state, handleSubmit }) {
  const { personalInfo, education, experiences, skills } = state;

  return (
    <div className='preview'>
      <h1>Preview...</h1>
      <button onClick={handleSubmit}>Edit</button>

      <div className='personal-info'>
        <h2> {personalInfo.name}</h2>
        <h4>{personalInfo.email}</h4>
        <h4>{personalInfo.website}</h4>
        <p>{personalInfo.summery}</p>
      </div>
      <div className='skills'>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> {skills.languages}
        </p>
        <p>
          <strong>Frameworks:</strong> {skills.frameworks}
        </p>
        <p>
          <strong>Technologies:</strong> {skills.technologies}
        </p>
      </div>
      <div className='experiences'>
        <h2>Experience</h2>
        <div className='experience-01'>
          <p>Company: {experiences.company}</p>
          <p>Title: {experiences.title}</p>
          <p> Location: {experiences.location}</p>
          <p>
            From: {education.startDate} to: {education.endDate}
          </p>
        </div>
      </div>

      <div className='education'>
        <h2>Education</h2>
        <div className='education-01'>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Field of Study: {education.fieldOfStudy}</p>
          <p>
            From: {education.startDate} to: {education.endDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
