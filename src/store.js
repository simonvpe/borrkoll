import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {reducers} from './reducers';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(logger,thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));
export default store;
