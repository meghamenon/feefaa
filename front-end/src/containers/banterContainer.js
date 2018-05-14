import React, {Component} from 'react';
import '../index.css';
import Banter from '../components/Banter'

class BantersContainer extends Component {
	constructor () {
	  	super();
	  	this.state = {
	  		banterPosts: null,
	  		content: ''
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
		fetch('http://localhost:8080/api/banters', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				content: this.state.content,
				author: 'faisal vs messi'
			})
		})
		.then(res => res.json())
		.then(newPost => {
			this.setState({
				banterPosts: this.state.banterPosts.concat(newPost),
				// banterPosts: [...this.state.banterPosts, newPost]
				content: ''
			})
		})
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
				Banter<input type="text" value={this.state.content} onChange={this.handleContentChange}/>
				<input type="submit" value="submit" />
			</form>
			<Banter banters={this.state.banterPosts} />
			 </div>
		)
	}
}

export default BantersContainer