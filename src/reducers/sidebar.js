import { TOGGLE_DRAWER, DATA_LOADED } from '../constants/action-type';

const initialState = {
  open: false,
  gameInfo: []
}

const sidebarReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_DRAWER) {
    return Object.assign({}, state, {
      open: !state.open
    });
  }

  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      gameInfo: state.gameInfo.concat(action.payload)
    });
  }
  return state;
}

export default sidebarReducer;