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
import {VisibilityFilters} from '../actions/action-types';
import {TodoState} from '../actions/todo-actions';
import TodoListItem from './todo-list-item';

class TodoList extends Component {
  render() {
    var {completeTodo, incompleteTodo} = this.props;
    return (
        <Tabs>
	    {[ TodoState.POOL, TodoState.ONGOING, TodoState.COMPLETED ].map(filter => {
		const heading = (
		    <TabHeading key={filter}>
			<Text>{filter}</Text>
		    </TabHeading>
		);
		return (
		    <Tab key={"tab-"+filter} heading={heading}>
			<List key={"l-"+filter}>
			{this.props.todos.map(todo => {
			    if(todo.state && todo.state === filter) {
			        return (
    				    <TodoListItem key={"todo-list-item-"+todo.id}
				                  todo={todo}
				                  completeTodo={completeTodo}
				                  incompleteTodo={incompleteTodo} />
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
