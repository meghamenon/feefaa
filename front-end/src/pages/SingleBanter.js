import React, { Component } from 'react';
import Banter from '../components/Banter';
import '../index.css';
import Profile from '../components/Profile';
import Follow from '../components/Follow';
import Header from '../components/Header';
import faker from 'faker';

class SingleBanterPage extends Component {

	state = {
		banterPost: {},
		content: '',
		avatar: ''
	}
	handleContentChange = (event) => {
		console.log('you typed', event.target.value)
		this.setState({
			content: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()

		let banterId = this.props.match.params.banter_id
		var randomName = faker.fake("{{name.firstName}} {{hacker.verb}}");
		var randomAvatar = faker.fake("{{image.avatar}}");

		console.log('props', this.props)
		console.log('submitted')
		console.log('banterId', banterId)
		fetch(`http://localhost:8080/api/banters/${banterId}/bashes`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				content: this.state.content,
				author: randomName,
				avatar: randomAvatar
			})
		})
		.then(res => res.json())
		.then(newBash => {

			console.log(111, this.state)
			console.log(22, newBash)

			this.setState({
				banterPost: newBash,
				content: '',
				avatar: ''
			})
		})
	}

	deletePost = (bashes_id) => {
		// event.preventDefault();
		let banterId = this.props.match.params.banter_id
		// console.log('The banter id is ' , banterId)

		let updatedBash = this.state.banterPost.bash.filter(bash => bash._id !== bashes_id);
		console.log(updatedBash);
		fetch(`http://localhost:8080/api/banters/${banterId}/bashes/${bashes_id}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			}
		})
		.then(res => {
			console.log('This is the RESPONSE', res);
			// console.log('updatedpost is', updatedPost)
			this.setState({
				banterPost: {
					...this.state.banterPost,
					bash: updatedBash,
				},
				content: '',
				avatar: ''
			})
		})
		.catch(err => console.log(err));
	}



	componentDidMount = () => {
		let banterId = this.props.match.params.banter_id
		console.log('banter id is', banterId)
		fetch(`http://localhost:8080/api/banters/${banterId}/`)
  		.then(res => res.json())
  		.then(banterPost => {
  			this.setState({
  				banterPost: banterPost
  			});
  		})
  		.catch(err => console.log(err));
	  }


	render() {
		console.log('The STATE = ', this.state.banterPost);
		let banter = this.state.banterPost;
		let bashes = banter.bash;
		// let allTheBashes = bashes ? bashes.map(bash => {
			// return <div>{bash.author} says {bash.content}</div>
		// }) : <h1>Loading...</h1>
		let allTheBashes;
		if (bashes) {
			allTheBashes = bashes.map(bash => {
			return <div key={bash._id}>
			<div className="tweet-card banter-container">
			<img className= "bash-avatar media float-left" src={bash.avatar} />
				<div className= "banter-author-container">
					<span className="fullname bash-author">
						<strong>{bash.author} </strong> says
					</span>
					<span className="username bash-content"> : {' '}
						{bash.content}
					</span>
					<button className="btn btn-outline-danger btn-sm ml-2"onClick={() => this.deletePost(bash._id)}>X</button></div>
				</div>
			</div>
		})
		} else {
			allTheBashes = <h1>Loading...</h1>
		}

		return(
	    <div className="App">
	      	<Header />

	    <div className="container">
	      <div className="row">
	        	<Profile />

	      <div className="tweet-header col-6">
				<div className="tweet-card banter-container">
				<img className= "banter-avatar media float-left" src={banter.avatar} />
				<div className="banter-author-container">
					<span className="fullname banter-author">
						<strong>{banter.author}</strong>
					</span>
				<span className="username banter-content"> : {banter.content}</span></div>
				</div>
					{allTheBashes} <br/>
			<form className="form" onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.content} onChange={this.handleContentChange} />
				<input className="btn btn-success btn-sm ml-2" type="submit" value="Bash it!" />
			</form>
			</div>

	     <div className="col">
	        <div className="row">
	        	<Follow />
	  		</div>
	    </div>

	      </div>
	    </div>
		</div>
		)


	}

}

export default SingleBanterPage;
