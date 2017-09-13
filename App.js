'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import TodoApp from './src/containers/todoApp';

export default class App extends Component {
    render() {
	return (
		<Provider store={configureStore()}>
		    <TodoApp />
		</Provider>
	);
  }
}
