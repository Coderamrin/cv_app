import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Education from './components/Education';

import Preview from './components/Preview';

function App() {
  const [personalInfo, setpersonalInfo] = useState({
    name: '',
    email: '',
    website: '',
    summery: '',
  });

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
  });
  const [experiences, setExperiences] = useState({
    company: '',
    title: '',
    location: '',
    startDate: '',
    endDate: '',
  });

  const [skills, setSkills] = useState({
    languages: '',
    frameworks: '',
    technologies: '',
  });

  const state = {
    personalInfo,
    education,
    experiences,
    skills,
  };

  const [submitting, setSubmitting] = useState(false);

  const handleChangePersonal = (e) => {
    setpersonalInfo({
      ...personalInfo,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeExperience = (e) => {
    setExperiences({
      ...experiences,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeSkill = (e) => {
    setSkills({
      ...skills,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id);
  };

  const handleChangeEdu = (e) => {
    setEducation({
      ...education,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(!submitting);
  };

  return (
    <div>
      <header>
        <h1>CV/Resume Builder</h1>
      </header>

      {submitting ? (
        <Preview state={state} handleSubmit={handleSubmit} />
      ) : (
        <div className='container'>
          <form action='#' onSubmit={handleSubmit}>
            <PersonalInfo
              handleChange={handleChangePersonal}
              state={personalInfo}
              submitting={submitting}
            />

            <Skills state={skills} handleChange={handleChangeSkill} />

            <Experiences
              state={experiences}
              handleChange={handleChangeExperience}
            />

            <Education state={education} handleChange={handleChangeEdu} />

            <button type='submit'>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
