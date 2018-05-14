import React, {Component} from 'react';
import '../index.css';

class Banter extends Component{
	

	render(){
    console.log('props', this.props)

    let banterPosts = this.props.banters ? this.props.banters.map((item) => {
      let bash
          return <div key={item._id}>
                <div className="tweet-header"> 
                <span className="fullname">
                <strong>{item.author} </strong>
                <span className="username"> : {item.content}</span>
                <a className="tweet-footer-btn">
                  <i className="octicon octicon-comment" aria-hidden="true"></i><span>{item.bump}</span>
                </a>
                </span>
                </div>
                 </div>
		}) : <h1> Loading </h1>

    
		return(
      <div className="banterPosts tweet-card">
      {banterPosts}        
      </div>
            
            

      )
	}
}

export default Banter