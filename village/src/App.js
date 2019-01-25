import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfCard from './components/SmurfCard';

const url = 'http://localhost:3333/smurfs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      height: '',
      age: '',
      beingUpdated: 0,
      isUpdating: false
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  submitHandler = e => {
    e.preventDefault();
    axios
      .post(url, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`${url}/${id}`).then(res => {
      this.setState({
        smurfs: res.data
      });
    });
  };

  updateHandle = (e, id) => {
    e.preventDefault();
    let selected = this.state.smurfs.find(smurf => smurf.id === id);
    console.log(selected);
    this.setState({
      name: selected.name,
      age: selected.age,
      height: selected.height,
      isUpdating: true,
      beingUpdated: id
    });
    this.props.history.push('/smurf-add');
  };

  updateHandleChange = id => {
    axios
      .put(`${url}/${this.state.beingUpdated}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res => {
        console.log(this.state.name);
        this.setState({
          friends: res.data,
          name: '',
          age: '',
          isUpdating: false,
          height: ''
        });
      });

    this.props.history.push('/');
  };
  render() {
    console.log('from app:  ', this.state.beingUpdated);
    return (
      <div className='App'>
        <Nav />
        <Route
          exact
          path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path='/smurf-add'
          render={props => (
            <SmurfForm
              {...props}
              handleChange={this.handleChange}
              submitHandler={this.submitHandler}
              smurfsState={this.state}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              isUpdating={this.state.isUpdating}
              updateHandleChange={this.updateHandleChange}
            />
          )}
        />
        <Route
          path='/smurf/:id'
          render={props => (
            <SmurfCard
              {...props}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              smurfs={this.state.smurfs}
              handleDelete={this.handleDelete}
              updateHandle={this.updateHandle}
              updateHandleChange={this.updateHandleChange}
              isUpdating={this.state.isUpdating}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
