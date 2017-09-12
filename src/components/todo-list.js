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
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
    if (this.props.todos) {
      this.state.dataSource = this.state.dataSource.cloneWithRows(
        this.getTodosWithTemplate(this.props.todos)
      );
    }
  }
  getTodosWithTemplate(todos) {
    return todos.concat([{template: true}]);
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          this.getTodosWithTemplate(nextProps.todos)
        )
      });
    }
  }
  renderRow = (todo) => {
    if (todo.template) {
      return this.renderTodoItemTemplate();
    } else {
      return this.renderTodoItem(todo);
    }
  }
  renderTodoItem(todo) {
    var {completeTodo, incompleteTodo} = this.props;
    return (
      <TouchableHighlight
        underlayColor="#e4f2d9"
        key={todo.id}
        style={styles.row}
        onPress={() => {
          if (todo.completed) {
            incompleteTodo(todo.id);
          } else {
            completeTodo(todo.id)
          }
        }}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <CompleteToggle
            style={styles.toggle}
            checked={todo.completed}
            onChecked={() => completeTodo(todo.id)}
            onUnchecked={() => incompleteTodo(todo.id)} />
          <Text style={styles.text}>{todo.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  renderTodoItemTemplate() {
    var {addTodo, activeFilter} = this.props
    return (
      <AddTodoRow
        addTodo={(name) => addTodo(name, activeFilter === VisibilityFilters.COMPLETED)} />
    );
  }
  render() {
	/*
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
	*/
    var {completeTodo, incompleteTodo} = this.props;
    return (
        <Tabs>
	    {[
		{ name: VisibilityFilters.ALL }, 
		{ name: VisibilityFilters.COMPLETED },
		{ name: VisibilityFilters.INCOMPLETE }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  templateRow: {
    paddingLeft: 30
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  }
});

export default TodoList;
