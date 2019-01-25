import React from 'react';

const SmurfForm = props => {
  const { submitHandler, handleChange, name, age, height } = props;

  return (
    <div className='SmurfForm'>
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChange}
          placeholder='name'
          value={name}
          name='name'
        />
        <input
          onChange={handleChange}
          placeholder='age'
          value={age}
          name='age'
        />
        <input
          onChange={handleChange}
          placeholder='height'
          value={height}
          name='height'
        />
        <button type='submit'>Add to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;
