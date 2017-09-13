import React, { Component } from 'react';
import {Platform, StyleSheet, View, Modal} from 'react-native';
import {bindActionCreators, dispatch} from 'redux';
import {Font} from 'expo';
import * as todoActions from '../actions/todoActions';
import * as visibilityActions from '../actions/visibilityActions';
import * as addModalVisibilityActions from '../actions/addModalVisibilityActions';
import {VisibilityFilters} from '../actions/actionTypes';
import {connect} from 'react-redux';
import TitleBar from '../components/title-bar';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';

import store from '../store';

import { Container, Content } from 'native-base';

//store.dispatch(todoActions.fetchTodos());

@connect(state => ({
  todos: state.todos.filter(todo => {
    if (state.filter === VisibilityFilters.ALL) {
      return true;
    } else if (state.filter === VisibilityFilters.COMPLETED) {
      return todo.completed;
    } else if (state.filter === VisibilityFilters.INCOMPLETE) {
      return !todo.completed;
    }
  }),
  filter: state.filter,
  addModalVisible: state.addModal.visible
}))



class TodoApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const {todos, filter, dispatch, addModalVisible} = this.props;

      if (!this.state || !this.state.fontLoaded) {
	  return (
	      <Container />
	  );
      }
      return (
      <Container paddingTop={ Platform.os === 'ios' ? 0 : 24}>
        <TitleBar
          activeFilter={filter}
        {...bindActionCreators(addModalVisibilityActions, dispatch)} />
	<Content>
        <TodoList
          activeFilter={filter}
          todos={todos}
        {...bindActionCreators(todoActions, dispatch)} />
	</Content>
        <Modal
          animationType="slide"
          transparent={false}
          visible={addModalVisible}
          onRequestClose={() => {}}>
          
          <AddTodo
            {...bindActionCreators(todoActions, dispatch)}
            {...bindActionCreators(addModalVisibilityActions, dispatch)}
            />
        </Modal>
      </Container>
    );
  }

    
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }    
}
/*

<AddTodo
style={styles.add}
{...bindActionCreators(todoActions, dispatch)} />
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {

  },
  list: {
    flex: 1
  },
  add: {
    flex: 1
  }
})

export default TodoApp;
