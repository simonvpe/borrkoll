'use strict';

import React, { Component } from 'react';

import {
  TouchableHighlight,
  StyleSheet,
  View,
  ListView
} from 'react-native';

import {
    Body,
    Container,
    CheckBox,
    Tabs,
    Tab,
    TabHeading,
    Icon,
    Text,
    List,
    ListItem
} from 'native-base';

import CompleteToggle from './complete-toggle';
import AddTodoRow from './add-todo-row';
import {VisibilityFilters} from '../actions/actionTypes';

class TodoList extends Component {
  render() {
    var {completeTodo, incompleteTodo} = this.props;
    return (
        <Tabs>
	    {[
		{ name: VisibilityFilters.ALL }, 
		{ name: VisibilityFilters.INCOMPLETE },
		{ name: VisibilityFilters.COMPLETED }		
	    ].map(filter => {
		const heading = (
	            <TabHeading>
			<Text>{filter.name}</Text>
		    </TabHeading>
		);
		return (
		    <Tab key={filter.name} heading={heading}>
			<List>
			{this.props.todos.map(todo => {
			    if(todo.completed && filter.name == VisibilityFilters.COMPLETED
			       || !todo.completed && filter.name == VisibilityFilters.INCOMPLETE
			       || filter.name == VisibilityFilters.ALL) {
			        return (
				    <ListItem key={todo.name}>
					<CheckBox
				            checked={todo.completed}
				            onPress={() => todo.completed ?
					        incompleteTodo(todo.id) :
					        completeTodo(todo.id)}
					    />
					<Body>
					    <Text>{todo.name}</Text>
					</Body>
   				    </ListItem>
				);
			    }
			    })}
		        </List>
		    </Tab>
		);
	    })}
	</Tabs>
    );
  }
}

export default TodoList;
