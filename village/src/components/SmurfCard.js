import React from 'react';

const SmurfCard = props => {
  const { handleDelete, updateHandle } = props;
  const smurfl = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );
  if (!smurfl) return <h2>Smurf doesn't exist</h2>;
  console.log(smurfl);
  return (
    <div>
      <div className='Smurf'>
        <h3>{smurfl.name}</h3>

        <strong>{smurfl.height} tall</strong>
        <p>{smurfl.age} smurf years old.</p>
      </div>
      <button onClick={e => updateHandle(e, smurfl.id)}>Update</button>
      <button onClick={e => handleDelete(e, smurfl.id)}>Delete</button>
    </div>
  );
};

export default SmurfCard;
