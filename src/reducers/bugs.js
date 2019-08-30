import { ADD_BUG } from '../constants/action-type';

const initialState = {
  bugs: []
};

const bugReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUG:
      return Object.assign({}, state, {
        bugs: state.bugs.concat(action.payload)
      });
    default:
      break;
  }
  return state;
}

export default bugReducer;