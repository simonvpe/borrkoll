'use strict';

import * as actions from '../actions/action-types';

const initialState = {
    visible: false
}

export default function editModalReducer(state = initialState, action = {}) {

    switch(action.type) {
	
        case actions.SET_EDIT_MODAL_VISIBILITY:
	    return {
		...state,
		visible: action.payload.visible,
		id: action.payload.id
	    };
	
        default:
	    return state;
	
    }
}
