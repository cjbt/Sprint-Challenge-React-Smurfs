import React from 'react';

const SmurfCard = props => {
  const { name, age, height, handleDelete, updateHandle } = props;
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );
  if (!smurf) return <h2>Smurf doesn't exist</h2>;
  console.log(smurf);
  return (
    <div>
      <div className='Smurf'>
        <h3>{name}</h3>

        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </div>
      <button onClick={e => updateHandle(e, smurf.id)}>Update</button>
      <button onClick={e => handleDelete(e, smurf.id)}>Delete</button>
    </div>
  );
};

export default SmurfCard;
