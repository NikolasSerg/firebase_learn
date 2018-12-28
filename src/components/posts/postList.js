import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import PostItem from './postItem'


class Postlist extends Component {
constructor(props){
	super(props);
	this.data = {...this.props};
}
	render() {
		return (
			<div>
				{this.data.posts.map((post) => {
					return (
						<PostItem h1={post.h1} text={post.text} author={post.author} date={post.data_post}/>
					);
				})}
			</div>
		);
	}
}

Postlist.propTypes = {};

export default Postlist;
