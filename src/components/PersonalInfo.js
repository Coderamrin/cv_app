import React from 'react';

function PersonalInfo({ handleChange, state }) {
  return (
    <div>
      <h2>Personal Info</h2>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' value={state.name} onChange={handleChange} />
      <label htmlFor='email'>Email:</label>
      <input
        type='text'
        id='email'
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor='website'>website:</label>
      <input
        type='text'
        id='website'
        value={state.website}
        onChange={handleChange}
      />

      <label htmlFor='summery'>Summery</label>
      <textarea
        id='summery'
        rows='4'
        cols='50'
        placeholder='summery'
        value={state.summery}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalInfo;
