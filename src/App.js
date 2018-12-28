import React, { Component } from "react";
import firebase from './components/database/firebase';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
		this.fb_database = firebase.database().ref();
		this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
	}

	componentWillMount() {
		console.log('i did mount');
		this.fb_database.on('value', (snapshot) => {
			console.log('the dat changed');
			this.setState({
				data: snapshot.val(),
				newPosts: null
			})
		})
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state.data)}
				<br />
				<hr />
				<br />
				<form onSubmit={this.submitHandler}>
					<input type="text" onChange={this.changeHandler} />
					<input type="submit" value="press" />
				</form>
			</div>
		);
	}
	changeHandler = (event) => {
		console.log(event.target.value);
		this.setState({
			newPosts: event.target.value
		})

	};
	submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state.newPosts, '-----proba 1');
		this.fb_database.ref('/newposts').set(this.state.newPosts);
		console.debug(this.state.newPosts);

	};
}

export default App;