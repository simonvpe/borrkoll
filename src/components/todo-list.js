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
import {VisibilityFilters} from '../actions/action-types';
import TodoListItem from './todo-list-item';

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
		    <TabHeading key={filter.name}>
			<Text>{filter.name}</Text>
		    </TabHeading>
		);
		return (
		    <Tab key={"tab-"+filter.name} heading={heading}>
			<List key={"l-"+filter.name}>
			{this.props.todos.map(todo => {
			    if(todo.completed && filter.name == VisibilityFilters.COMPLETED
			       || !todo.completed && filter.name == VisibilityFilters.INCOMPLETE
			       || filter.name == VisibilityFilters.ALL) {
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
