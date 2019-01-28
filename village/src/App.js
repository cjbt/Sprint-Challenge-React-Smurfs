import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './store/actions';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfCard from './components/SmurfCard';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <Route path='/smurf-add' component={SmurfForm} />
        <Route exact path='/' component={Smurfs} />
        <Route path='/smurf/:id' component={SmurfCard} />
      </div>
    );
  }
}

const mapActionsToProps = {
  getSmurfs
};

export default connect(
  null,
  mapActionsToProps
)(App);
