import React from "react"

import "./greeting.less"

export default class Greeting extends React.Component {
	render() {
		return (
			<div className="greeting">
				<h1>Hello, {this.props.options.value}!</h1>
			</div>
		);
	}
};

Greeting.propTypes = {
	options: React.PropTypes.object.isRequired
};