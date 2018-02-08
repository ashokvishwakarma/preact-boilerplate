/**
 * PlayerAction
 *
 * All the actions for Player component must be defined here
 *
 * @author Ashok Vishwakarma <ashok.vishwakarma@expomnential.com>
 * @version 1.0
 *
 */

export const INIT = 'INIT';

export function init(){
	return {
		type: INIT,
		payload: true
	};
}




