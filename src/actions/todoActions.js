import * as actions from './actionTypes';
import _ from 'lodash';

export function addTodo(name, completed) {
    return {
	type: actions.ADD,
	payload: {
	    name: name,
	    completed: completed === true
	}
    };
}

export function completeTodo(id) {
    return {
	type: actions.CHANGE,
	id: id,
	payload: {completed: true}
    };
}

export function incompleteTodo(id) {
    return {
	type: actions.CHANGE,
	id: id,
	payload: {completed: false}
    };
}

