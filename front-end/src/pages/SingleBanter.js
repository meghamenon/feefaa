import React, { Component } from 'react';
import Banter from '../components/Banter';
import '../index.css';
// import Bash from '../components/Bash'

class SingleBanterPage extends Component {

	state = {
		banterPost: {},
		content: ''
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
				author: 'basher'
			})
		})
		.then(res => res.json())
		.then(newBash => {

			console.log(111, this.state)
			console.log(22, newBash)

			this.setState({
				banterPost: newBash,
				content: ''
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
				content: ''
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
			return <div key={bash._id}>{bash.author} says {bash.content}<button onClick={() => this.deletePost(bash._id)}>Delete</button></div>
		})
		} else {
			allTheBashes = <h1>Loading...</h1>
		}

		return(
			<div>
			{banter.author}
			{banter.content}
			{allTheBashes} 
			<form onSubmit={this.handleSubmit}>
				Bash<input type="text" value={this.state.content} onChange={this.handleContentChange} />
				<input type="submit" value="submit" />
			</form>
			</div>

		)

	}

}

export default SingleBanterPage;