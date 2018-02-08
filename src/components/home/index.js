/**
 * Home Component
 *
 * Home component to render and manage Home Page
 *
 * @author Ashok Vishwakarma <akvlko@gmail.com>
 * @version 1.0
 *
 */
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import {bindActions} from '../../utility/util';
import Reducer from '../../reducer';
import * as homeActions from './action';

@connect(Reducer, bindActions(homeActions))
export default class Home extends Component{

	state = {}

	componentDidMount = () => {
		this.props.dispatch(this.props.init());
	}

	render(){
		return (
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Home Page</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
