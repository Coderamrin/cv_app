import React from 'react';

function Experiences({ state, handleChange }) {
  const { company, title, startDate, endDate, location } = state;

  return (
    <>
      <h2>Experience</h2>
      <div className='form-group'>
        <label htmlFor='company'>Company</label>
        <input
          type='text'
          className='form-control'
          id='company'
          placeholder='Company'
          value={company}
          onChange={handleChange}
        />

        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className='form-control'
          id='title'
          placeholder='Title'
          value={title}
          onChange={handleChange}
        />

        <label htmlFor='location'>Location</label>
        <input
          type='text'
          className='form-control'
          id='location'
          placeholder='Location'
          value={location}
          onChange={handleChange}
        />
        <label htmlFor='startDate'>Start Date</label>
        <input
          type='date'
          className='form-control'
          id='startDate'
          value={startDate}
          onChange={handleChange}
        />

        <label htmlFor='endDate'>End Date</label>

        <input
          type='date'
          className='form-control'
          id='endDate'
          value={endDate}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Experiences;
