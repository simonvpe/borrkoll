'use strict';

import React, {Component} from 'react'
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store';
import TodoApp from './todoApp';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {() => <TodoApp />}
      </Provider>
    );
  }
}
