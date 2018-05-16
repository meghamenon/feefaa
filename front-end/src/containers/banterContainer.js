import React, {Component} from 'react';
import '../index.css';
import Banter from '../components/Banter'
import faker from 'faker'


class BantersContainer extends Component {
	constructor () {
	  	super();
	  	this.state = {
	  		banterPosts: null,
	  		content: '',
	  		avatar: ''
	  	}
	  }

	handleContentChange = (event) => {
		console.log('YOU JUST TYPED', event.target.value)
		this.setState({
			content: event.target.value
		})

	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log("submitted")
		var randomName = faker.fake("{{name.firstName}} {{hacker.verb}}");
		var randomAvatar = faker.fake("{{image.avatar}}");
		fetch('http://localhost:8080/api/banters', {
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
		.then(newPost => {
			this.setState({
				banterPosts: this.state.banterPosts.concat(newPost),
				// banterPosts: [...this.state.banterPosts, newPost]
				content: '',
			})
		})
	}
	deletePost = (banter_id) => {
		console.log(banter_id);
		let updatedPost = this.state.banterPosts.filter(banter => banter._id !== banter_id);
		fetch(`http://localhost:8080/api/banters/${ banter_id }`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then(res => {
			console.log(res);
			this.setState({ banterPosts: updatedPost })
		})
		.catch(err => console.log(err));
	}


	componentDidMount() {
  	fetch('http://localhost:8080/api/banters')
  		.then(res => res.json())
  		.then(allPosts => {
  			this.setState({ banterPosts: allPosts });
  			console.log('where is this', this.state);
  		})
  		.catch(err => console.log(err));
	  }


	render() {
		return(
			<div className='bantersContainer'>
				<form onSubmit={this.handleSubmit}>
					<input className="banter-input" type="text" value={this.state.content} onChange={this.handleContentChange} placeholder="What's your gripe?"/>
					<input className="btn btn-primary ml-1 banter-submit" type="submit" value="Banter!"/>
				</form><br/>
				<div className="tweet-card">
					<Banter banters={this.state.banterPosts} deletePost={this.deletePost}/>
				</div>
		 </div>

		)
	}
}

export default BantersContainer
