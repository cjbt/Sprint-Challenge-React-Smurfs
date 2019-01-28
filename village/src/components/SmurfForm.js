import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updatedSmurf } from '../store/actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    const { name, age, height } = this.props;
    this.setState({
      name,
      age,
      height
    });
  }

  addSmurf = event => {
    event.preventDefault();
    const { name, age, height } = this.state;
    // add code to create the smurf using the api
    this.props.addSmurf(name, age, height);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/');
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateSmurf = e => {
    e.preventDefault();
    const { name, age, height } = this.state;
    this.props.updatedSmurf(this.props.beingUpdated, name, age, height);
    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    return (
      <div className='SmurfForm'>
        <form
          onSubmit={this.props.isUpdating ? this.updateSmurf : this.addSmurf}
        >
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
          />
          <button type='submit'>
            {this.props.isUpdating ? 'UPDATING' : 'Add to the village'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.smurfs.name,
  age: state.smurfs.age,
  height: state.smurfs.height,
  beingUpdated: state.smurfs.beingUpdated,
  isUpdating: state.smurfs.isUpdating
});

const mapActionsToProps = {
  addSmurf,
  updatedSmurf
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SmurfForm);
