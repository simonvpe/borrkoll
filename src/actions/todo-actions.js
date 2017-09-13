import * as actions from './action-types';
import _ from 'lodash';

export const TodoState = Object.freeze({
    POOL:      "POOL",
    ONGOING:   "ONGOING",
    COMPLETED: "COMPLETED"
});

export function addTodo(name, completed) {
    return {
	type: actions.ADD,
	payload: {
	    name: name,
	    state: TodoState.POOL
	}
    };
}

export function setTodoState(id, state) {
    return {
	type: actions.CHANGE,
	id: id,
	payload: {state: state}
    };
}

export function updateTodo(id, name, address, state) {
    return {
	type: actions.CHANGE,
	id: id,
	payload: { name, address, state	}
    };
}
