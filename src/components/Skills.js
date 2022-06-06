import React from 'react';

function Skills({ state, handleChange }) {
  const { languages, frameworks, technologies } = state;

  return (
    <>
      <h2>Skills</h2>
      <label htmlFor='languages'>Languages</label>
      <input
        type='text'
        id='languages'
        value={languages}
        onChange={handleChange}
      />
      <label htmlFor='frameworks'>Frameworks</label>
      <input
        type='text'
        id='frameworks'
        value={frameworks}
        onChange={handleChange}
      />
      <label htmlFor='technologies'>Technologies</label>
      <input
        type='text'
        id='technologies'
        value={technologies}
        onChange={handleChange}
      />
    </>
  );
}

export default Skills;
