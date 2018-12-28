import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.h1}</h1>
				<p>{this.props.text}</p>
				<h3>{this.props.author}</h3>
				<h4>{this.props.date}</h4>
			</div>
		);
	}
}

PostItem.propTypes = {};

export default PostItem;
