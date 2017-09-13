import _ from 'lodash';
import firebase from 'firebase';

export default createFirebaseMiddleware =
    (ref, config, actions) => store => next => {

	const connection = !firebase.apps.length
	      ? firebase.initializeApp(config).database()
	      : firebase.app().database();
	
	const db = connection.ref(ref);

	db.on('child_added', snapshot => {
	    next({
		type: actions.add,
		payload: Object.assign({id: snapshot.key}, snapshot.val())
	    });
	});

	db.on('child_changed', snapshot => {
	    next({
		type: actions.change,
		payload: Object.assign({id: snapshot.key}, snapshot.val())
	    });
	});

	return action => {
	    // Hijack add action, send off to firebase db, let
	    // 'child_added'/'child_changed' handle update
	    switch(action.type) {
		
	    case actions.add:
		db.push(action.payload);
		break;

	    case actions.change:
		updates = {}
		const baseKey = ref + '/' + action.id + '/';

		for(var [key, value] of Object.entries(action.payload)) {
		    updates[baseKey + key] = value;
		}
		console.log(JSON.stringify(updates))
		connection.ref().update(updates);
		break;

	    default:
		next(action);
		break;
	    }
	}
}
