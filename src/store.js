/**
 * Store
 *
 * Global store for Preact Boilerplate
 *
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * @version 1.0
 *
 */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

/**
 * customMiddleWare
 *
 * will help to intercept all the dispatched action
 *
 * @param store
 * @returns {function(*): function(*=)}
 */
const customMiddleWare = store => next => action => {
	next(action);
}

export default createStore(reducer, applyMiddleware(
	customMiddleWare,
	thunkMiddleware
));
