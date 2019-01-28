import React from 'react';
import { connect } from 'react-redux';

const SmurfCard = props => {
  const smurf = props.smurfs.find(
    smurf => `${smurf.id}` === props.match.params.id
  );
  if (!smurf) return <h2>Smurf doesn't exist</h2>;
  return (
    <div>
      <div className='Smurf'>
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs.smurfs
});

export default connect(
  mapStateToProps,
  {}
)(SmurfCard);
