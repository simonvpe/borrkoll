import React, { Component } from 'react';

import {
    Body,
    CheckBox,
    Text,
    ListItem
} from 'native-base';

import {TodoState} from '../actions/todo-actions';

class TodoListItem extends Component {
    render() {
	const { todo, completeTodo, incompleteTodo } = this.props;
	return (
	    <ListItem key={"li-"+todo.id}>
	        <CheckBox key={todo.id} checked={TodoState.COMPLETED == todo.state}
	                  onPress={() => TodoState.COMPLETED == todo.state
			      ? incompleteTodo(todo.id)
		              : completeTodo(todo.id)} />
		<Body key={"body-"+todo.id}>
		    <Text key={"text-"+todo.id}>{todo.name}</Text>
		</Body>
	    </ListItem>
	);
    }
}

export default TodoListItem;
