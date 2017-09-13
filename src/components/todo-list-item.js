import React, { Component } from 'react';

import {
    Body,
    CheckBox,
    Text,
    ListItem
} from 'native-base';

class TodoListItem extends Component {
    render() {
	const { todo, completeTodo, incompleteTodo } = this.props;
	return (
	    <ListItem key={"li-"+todo.name}>
	        <CheckBox key={todo.id} checked={todo.completed}
	                  onPress={() => todo.completed
			      ? incompleteTodo(todo.id)
		              : completeTodo(todo.id)} />
		<Body key={"body-"+todo.name}>
		    <Text>{todo.name}</Text>
		</Body>
	    </ListItem>
	);
    }
}

export default TodoListItem;
