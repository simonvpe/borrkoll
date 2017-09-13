import React, { Component } from 'react';
import {Platform, StyleSheet, View, Modal} from 'react-native';
import {bindActionCreators, dispatch} from 'redux';
import {Font} from 'expo';
import * as todoActions from '../actions/todo-actions';
import * as addModalVisibilityActions from '../actions/add-modal-visibility-actions';
import {connect} from 'react-redux';
import TitleBar from '../components/title-bar';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';

import store from '../store';

import { Container, Content } from 'native-base';

@connect(state => ({
    todos: state.todos,
    addModalVisible: state.addModal.visible
}))


class TodoApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const {todos, dispatch, addModalVisible} = this.props;

      if (!this.state || !this.state.fontLoaded) {
	  return (
	      <Container />
	  );
      }
      return (
      <Container paddingTop={ Platform.os === 'ios' ? 0 : 24}>
        <TitleBar
        {...bindActionCreators(addModalVisibilityActions, dispatch)} />
	<Content>
        <TodoList
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

export default TodoApp;
