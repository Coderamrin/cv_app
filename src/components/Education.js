import React from 'react';

function Education({ state, handleChange }) {
  const { school, degree, fieldOfStudy } = state;
  return (
    <div>
      <h2>Education</h2>
      <div className='education-01'>
        <label htmlFor='school'>School</label>

        <input
          type='text'
          className='form-control'
          id='school'
          placeholder='School'
          value={school}
          onChange={handleChange}
        />

        <label htmlFor='degree'>Degree</label>

        <input
          type='text'
          className='form-control'
          id='degree'
          placeholder='Degree'
          value={degree}
          onChange={handleChange}
        />

        <label htmlFor='fieldOfStudy'>Field of Study</label>

        <input
          type='text'
          className='form-control'
          id='fieldOfStudy'
          placeholder='Field of Study'
          value={fieldOfStudy}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Education;
