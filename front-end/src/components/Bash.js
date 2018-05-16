import React, {Component} from 'react';
import '../index.css';
import faker from 'faker';

class Bash extends Component{
	render(){
		return(

		console.log('props', this.props)

    	let bashPosts = this.props.bash ? this.props.bash.map((item) => {
			let id = item._id
      var randomName = faker.name.findName();
      var randomAvatar = faker.fake("{{image.avatar}}");
        return <div key={item._id}>
                <div className="tweet-header">
                <li className="tweet-card">
                <img className= "bash-avatar media float-left" src={randomAvatar} />
                <span className="fullname">
                <strong>{randomName} </strong>
                <span className="username"> : {item.content}</span>
                <a className="tweet-footer-btn">
                  <i className="octicon octicon-comment" aria-hidden="true"></i><span>{item.bump}</span>
                </a>
                </span>
					<button className="btn btn-sm btn-danger" onClick={() => this.props.deletePost(item._id)}>Delete</button>
                </li>
                </div>
                 </div>
		}) : <h1> Loading </h1>

    	return(
      		<div className="banterPosts tweet-card">
     		 {bashPosts}
     		 </div>



      		)


		)
	}
}


export default Bash