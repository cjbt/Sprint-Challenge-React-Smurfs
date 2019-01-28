import {
  GET_SMURFS,
  ADD_SMURF,
  DELETE_SMURF,
  POPULATE_SMURF,
  UPDATE_SMURF
} from '../actions/types';

const initialState = {
  smurfs: [],
  isUpdating: false,
  beingUpdated: 0,
  name: '',
  age: '',
  height: ''
};

export const smurfs = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case POPULATE_SMURF:
      let selected = state.smurfs.find(smurf => smurf.id === action.payload.id);
      console.log(selected.name);
      return {
        ...state,
        name: selected.name,
        age: selected.age,
        height: selected.height,
        beingUpdated: selected.id,
        isUpdating: true
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        name: '',
        age: '',
        height: '',
        beingUpdated: '',
        isUpdating: false
      };
    default:
      return state;
  }
};
