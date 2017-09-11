import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {reducers} from './reducers';
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));
export default store;
