import * as actions from './action-types';

export function showEditModal(id) {
  return {
      type: actions.SET_EDIT_MODAL_VISIBILITY,
      payload: {
	  visible: true,
	  id: id
      }
  };
}

export function hideEditModal() {
  return {
      type: actions.SET_EDIT_MODAL_VISIBILITY,
      payload: {
	  visible: false,
	  id: null
      }
  };    
}
