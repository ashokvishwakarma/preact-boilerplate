/**
 * Reducer
 *
 * Combine all reducers for Preact Boilerplate
 *
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * @version 1.0
 *
 */

import {combineReducers} from 'redux';

import HomeReducer from './components/home/reducer';

export default combineReducers({
	home: HomeReducer
});
