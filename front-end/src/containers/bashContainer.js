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



		)
	}
}
