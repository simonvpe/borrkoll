'use strict';

import * as actions from '../actions/action-types';
var {VisibilityFilters} = actions;

const initialState = VisibilityFilters.ALL;

export default function visibilityReducer (state = VisibilityFilters.ALL, action = {}) {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
