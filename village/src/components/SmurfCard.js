import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, populateSmurf } from '../store/actions';

const SmurfCard = props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );
  if (!smurf) return <h2>Smurf doesn't exist</h2>;

  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(smurf.id);
    props.history.push('/');
  };

  const updateSmurf = e => {
    e.preventDefault();
    props.populateSmurf(smurf.id);
    props.history.push('/smurf-add');

    //action
  };
  return (
    <div>
      <div className='Smurf'>
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>
      <button onClick={updateSmurf}>update</button>
      <button onClick={deleteSmurf}>delete</button>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs.smurfs
});

const mapActionsToProps = {
  deleteSmurf,
  populateSmurf
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SmurfCard);
