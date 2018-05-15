import '../index.css';
import Bash from '../components/Bash';

class BashContainer extends Component{

	constructor () {
	  	super();
	  	this.state = {
	  		bashPosts: null,
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
		fetch(`http://localhost:8080/api/banters/${banter_id}/bashes`, {
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
				bashPosts: this.state.bashPosts.concat(newPost),
				// banterPosts: [...this.state.banterPosts, newPost]
				content: ''
			})
		})
	}
	deletePost = (bash_id) => {
		console.log(bash_id);
		let updatedPost = this.state.bashPosts.filter(bash => bash._id !== bash_id);
		fetch(`http://localhost:8080/api/banters/${banter_id}/bashes/${bashes_id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then(res => {
			console.log(res);
			this.setState({ bashPosts: updatedPost })
		})
		.catch(err => console.log(err));
	}

	componentDidMount() {
  	fetch(`http://localhost:8080/api/banters/${banter_id}/bashes`)
  		.then(res => res.json())
  		.then(banterPosts => {
  			this.setState({ bashPosts });
  			console.log('where is this', this.state);
  		})
  		.catch(err => console.log(err));
	  }


	render(){
		return(
			<div className='bashContainer'>
				<form onSubmit={this.handleSubmit}>
					Bash <input type="text" value={this.state.content} onChange={this.handleContentChange}/>
					<input type="submit" value="submit" />
				</form>
				<div className="tweet_card">
					<Bash bash={this.state.bashPosts} deletePost={this.deletePost} />
				</div>
		 </div>
		)
	}
}

export default BashContainers

