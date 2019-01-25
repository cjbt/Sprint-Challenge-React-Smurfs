import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const url = 'http://localhost:3333/smurfs';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
      // newSmurfs: {
      //   name: '',
      //   height: '',
      //   age: ''
      // }
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

  // submitHandler = () => {
  //   axios
  //     .post(url, this.state.newSmurfs)
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         smurfs: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  // handleChange = e => {
  //   this.setState(prevState => ({
  //     newSmurfs: { ...prevState.newSmurfs, [e.target.name]: e.target.value }
  //   }));
  // };
  render() {
    return (
      <div className='App'>
        <SmurfForm
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
          newSmurfs={this.state.newSmurfs}
        />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
