import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Postlist from './postList';


class Post extends Component {
	render() {
		return (
			<Postlist {...this.props}/>
		);
	}
}

Post.propTypes = {};

export default Post;
