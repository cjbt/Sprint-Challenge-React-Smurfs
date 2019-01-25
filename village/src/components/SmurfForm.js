import React from 'react';

const SmurfForm = props => {
  const { submitHandler, handleChange, updateHandleChange } = props;

  function submitForm(e) {
    e.preventDefault();
    if (props.isUpdating) {
      updateHandleChange();
    } else {
      submitHandler();
    }
  }
  console.log(props.isUpdating);
  return (
    <div className='SmurfForm'>
      <form onSubmit={submitForm}>
        <input
          onChange={handleChange}
          placeholder='name'
          value={props.name}
          name='name'
        />
        <input
          onChange={handleChange}
          placeholder='age'
          value={props.age}
          name='age'
        />
        <input
          onChange={handleChange}
          placeholder='height'
          value={props.height}
          name='height'
        />
        <button type='submit'>Add to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;
