'use strict';

import todoReducer from './todo';
import addModalReducer from './add-modal';
import editModalReducer from './edit-modal';

export const reducers = {
    todos: todoReducer,
    editModal: editModalReducer,
    addModal: addModalReducer
};
