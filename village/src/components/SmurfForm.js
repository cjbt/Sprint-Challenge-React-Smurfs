import React from 'react';

// const SmurfForm = props => {
//   const { submitHandler, handleChange } = props;
//   const { name, age, height } = props.newSmurfs;
//   return (
//     <div className='SmurfForm'>
//       <form onSubmit={submitHandler}>
//         <input
//           onChange={handleChange}
//           placeholder='name'
//           value={name}
//           name='name'
//         />
//         <input
//           onChange={handleChange}
//           placeholder='age'
//           value={age}
//           name='age'
//         />
//         <input
//           onChange={handleChange}
//           placeholder='height'
//           value={height}
//           name='height'
//         />
//         <button type='submit'>Add to the village</button>
//       </form>
//     </div>
//   );
// };

// export default SmurfForm;

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf}>
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
          <button type='submit'>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
