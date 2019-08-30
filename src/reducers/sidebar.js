import { TOGGLE_DRAWER, DATA_LOADED } from '../constants/action-type';

const initialState = {
  open: false,
  gameInfo: []
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case (TOGGLE_DRAWER):
      return Object.assign({}, state, {
        open: !state.open
      });
    case (DATA_LOADED):
      return Object.assign({}, state, {
        gameInfo: state.gameInfo.concat(action.payload)
      });
    default:
      break;
  }
  return state;
}

export default sidebarReducer;