/**
 * Util
 *
 * An utility for Expo 2.0 all the utility methods and properties must be defined here
 *
 * @author Ashok Vishwakarma <ashok.vishwakarma@expomnential.com>
 * @version 1.0
 *
 */

import { bindActionCreators } from 'redux';

/**
 * bindActions
 *
 * Enables Redux Thunk for all the actions
 *
 * @param actions
 * @returns {function(*=): {dispatch: *, (...args: any[]): any, [p: string]: ActionCreator<any>}}
 */
export function bindActions(actions) {
	return dispatch => ({
		dispatch,
		...bindActionCreators(actions, dispatch)
	});
}
