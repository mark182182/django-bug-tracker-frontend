import { ADD_BUG } from '../constants/action-type';

const initialState = {
  bugs: []
};

const bugReducer = (state = initialState, action) => {
  if (action.type === ADD_BUG) {
    return Object.assign({}, state, {
      bugs: state.bugs.concat(action.payload)
    });
  }
  return state;
}

export default bugReducer;