'use strict';

import * as actions from '../actions/actionTypes';
import _ from 'lodash';

export default function todosReducer (todos = [], action = {}) {
    switch (action.type) {
	
    case actions.ADD:
	return [
            ...todos,
            action.payload
	];
	
    case actions.CHANGE:
	var index = _.findIndex(todos, (todo) => todo.id === action.payload.id);
	if (index === -1) {
            return todos;
	}
	return [
            ...todos.slice(0, index),
            action.payload,  
            ...todos.slice(index + 1)
	];
	
    default:
	return todos;
  }
}
