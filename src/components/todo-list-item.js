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
    Left,
    Button,
    Icon
} from 'native-base';

import {TodoState} from '../actions/todo-actions';

class TodoListItem extends Component {
    render() {
	const { todo, showEditModal } = this.props;
	return (
	    <ListItem>
		<Card key={"li-"+todo.id}>
		    <CardItem>
	                <Left>
	                    <Text>{todo.name}</Text>
	                </Left>
                        <Body />
	                <Right>
	                    <Button transparent onPress={showEditModal}>
	                        <Icon name="md-arrow-forward" />
	                    </Button>
	                </Right>
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
