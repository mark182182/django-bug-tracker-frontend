import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import bugReducer from '../reducers/bugs';
import sidebarReducer from '../reducers/sidebar';
import thunk from 'redux-thunk';

const storeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ bugReducer, sidebarReducer });

const store = createStore(rootReducer, storeEnchancers(applyMiddleware(thunk)));
export default store;