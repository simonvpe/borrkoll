import React, { Component } from 'react';

import {
    Body,
    CheckBox,
    Text,
    ListItem,
    Card,
    CardItem,
    Header,
    Right,
    Left
} from 'native-base';

import {TodoState} from '../actions/todo-actions';

class TodoListItem extends Component {
    render() {
	const { todo, completeTodo, incompleteTodo } = this.props;
	return (
	    <ListItem>
		<Card key={"li-"+todo.id}>
		    <CardItem header>
              		<Text>{todo.name}</Text>
		    </CardItem>
		    <CardItem key={"body-"+todo.id}>
		        <Body>
		            <Text key={"text-"+todo.id}>{todo.address}</Text>
		        </Body>
		    </CardItem>
	        </Card>
	    </ListItem>
	);
    }
}

export default TodoListItem;
