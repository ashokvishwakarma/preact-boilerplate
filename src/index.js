/**
 * index
 *
 * Entry for Preact Boilerplate, webpack will start from here
 *
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * @version 1.0
 *
 */

/**
 * Preact
 *
 * Global render from preact
 * @npm https://www.npmjs.com/package/preact
 */
import { h, render } from 'preact';

/**
 * Preact Redux
 *
 * Redux support for Preact
 * @npm https://www.npmjs.com/package/preact-redux
 */
import { Provider } from 'preact-redux';

/**
 * Store
 *
 * Global store using redux
 */
import store from './store';

/**
 * App
 *
 * Entry component App
 */
import App from './components/app';

/**
 * Style
 *
 * SCSS for Application
 */
import './assets/style';


/**
 * Global renderer to render Preact Boilerplate
 */
render((
	<Provider store={store}>
		<App />
	</Provider>
), document.body);
