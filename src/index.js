import store from './store'
import { bugAdded, bugResolved } from './actions';

//can just call this function if we want to call this action multiple times
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState())




// //dispatch actions: dispatch, getState, subscribe--------------
// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// })

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "Bug1"
//     }
// })

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
