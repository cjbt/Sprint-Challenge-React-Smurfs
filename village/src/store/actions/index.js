import axios from 'axios';
import { GET_SMURFS, ADD_SMURF } from './types';

const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  return axios
    .get(url)
    .then(res =>
      dispatch({
        type: GET_SMURFS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const addSmurf = (name, age, height) => dispatch => {
  return axios
    .post(url, { name, age, height })
    .then(res =>
      dispatch({
        type: ADD_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
