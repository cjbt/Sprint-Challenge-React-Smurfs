import axios from 'axios';
import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  POPULATE_SMURF,
  UPDATE_SMURF
} from './types';

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

export const deleteSmurf = id => dispatch => {
  return axios
    .delete(`${url}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const populateSmurf = id => {
  return {
    type: POPULATE_SMURF,
    payload: {
      id
    }
  };
};

export const updatedSmurf = (id, name, age, height) => dispatch => {
  axios
    .put(`${url}/${id}`, {
      name,
      age,
      height
    })
    .then(res =>
      dispatch({
        type: UPDATE_SMURF,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
