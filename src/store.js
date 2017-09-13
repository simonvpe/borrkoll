import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {reducers} from './reducers';
import thunk from 'redux-thunk'

import * as actions from './actions/actionTypes';
import createFirebaseMiddleware from './middleware/firebase';

const myMiddleware = createFirebaseMiddleware('/test-todos-1', {
    apiKey: "AIzaSyBe7C-voSrwfiI5NYikJNl4F7lSx4SPcGQ",
    authDomain: "borrkoll-bddd5.firebaseapp.com",
    databaseURL: "https://borrkoll-bddd5.firebaseio.com",
    projectId: "borrkoll-bddd5",
    storageBucket: "borrkoll-bddd5.appspot.com",
    messagingSenderId: "100876790754"
}, {
    add: actions.ADD,
    change: actions.CHANGE
})

const createStoreWithMiddleware = applyMiddleware(logger, thunk, myMiddleware)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));
export default store;
