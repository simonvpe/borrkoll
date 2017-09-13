import * as actions from './actionTypes';
import _ from 'lodash';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBe7C-voSrwfiI5NYikJNl4F7lSx4SPcGQ",
  authDomain: "borrkoll-bddd5.firebaseapp.com",
  databaseURL: "https://borrkoll-bddd5.firebaseio.com",
  projectId: "borrkoll-bddd5",
  storageBucket: "borrkoll-bddd5.appspot.com",
  messagingSenderId: "100876790754"
};
const db = firebase.initializeApp(config).database();
const ref = db.ref('/test-todos-1')

export function fetchTodos() {
    return dispatch => {
	ref.on('value', snapshot => {
	    dispatch({
		type: actions.FETCH_TODOS,
		payload: snapshot.val()
	    });
	});
    }
}

export function addTodo(name, completed) {
    return dispatch => ref.push({
	name: name,
	completed: completed === true
    });
}

export function completeTodo(id) {
    console.log("Completing " + id);
    updates = {}
    updates['/test-todos-1/' + id + '/completed'] = true
    db.ref().update(updates);
  return {
    type: actions.COMPLETE,
    id: id
  };
}

export function incompleteTodo(id) {
    console.log("Completing " + id);
    updates = {}
    updates['/test-todos-1/' + id + '/completed'] = false
    db.ref().update(updates);
  return {
    type: actions.INCOMPLETE,
    id: id
  };
}

