import React, { Component } from 'react';
import Banter from '../components/Banter'
import Bash from '../components/Bash'

class SingleBanterPage extends Component {
	componentDidMount = () => {
		let banterId = this.props.match.params.banter_id
		fetch(`http://localhost:8080/api/banters/${banterId}`)
  		.then(res => res.json())
  		.then(banterPosts => {
  			this.setState({ banterPosts });
  			console.log('where is this', this.state);
  		})
  		.catch(err => console.log(err));
	  }
	}


	render() {
		

		return(
			<Banter 
			)

	}

}

export default SingleBanterPage;