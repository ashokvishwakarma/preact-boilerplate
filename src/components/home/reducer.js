/**
 * HomeReducer
 *
 * Home store must be defined here
 *
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * @version 1.0
 *
 */

/**
 * default initial state for Player component
 * @type {{}}
 */
const initialState = {
	init: false
};

import {
	INIT
} from "./action";

/**
 * HomeReducer
 * @param state
 * @param action
 * @return {{}}
 * @constructor
 */
const HomeReducer = (state = initialState, action) => {
	let home = {};

	switch (action.type) {

		case INIT:
			home = Object.assign({}, state);
			home.init = true;
			return home;

		default:
			return state;
			break;
	}
}

export default HomeReducer;
