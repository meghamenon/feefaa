import React, {Component} from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


class Banter extends Component{


	render(){
    console.log('props', this.props)

    let banterPosts = this.props.banters ? this.props.banters.map((item) => {
			let id = item._id

          return <div key={item._id}>
              <div className="tweet-header">
                  <li className="tweet-card h-100">
                  <span className="fullname">
                  <div className="banter-container">
                        <img className= "banter-avatar media float-left" src={item.avatar} /> 
                        <div className="banter-author-container">
                          <Link to={`/banters/${item._id}`}><strong>{item.author} </strong></Link>
                          <span className="banter-username"> : {item.content}</span>
        								  <button className="btn btn-outline-danger btn-sm ml-2" onClick={() => this.props.deletePost(item._id)}>X</button>
                        </div>
                </div>
                </span>
                </li>
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
