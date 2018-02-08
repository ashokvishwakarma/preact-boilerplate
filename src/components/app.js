/**
 * App
 *
 * Entry level main component for Preact Boilerplate
 *
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * @version 1.0
 *
 */
import { h, Component } from 'preact';

import Home from './home';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Home />
			</div>
		);
	}
}
