'use strict';

import todoReducer from './todo';
import addModalReducer from './add-modal';

export const reducers = {
  todos: todoReducer,
  addModal: addModalReducer
};
