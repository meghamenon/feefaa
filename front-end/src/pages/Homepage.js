import React, {Component} from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Banter from '../components/Banter';
import Follow from '../components/Follow';
import BantersContainer from '../containers/banterContainer';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	render() {
		return(
		<div className="App">
	      	<Header />
	  
	    <div className="container">
	      <div className="row">
	        	<Profile />


	    <div className="col-6">
	      <ol className="tweet-list">
	        	<BantersContainer />
	      </ol>
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

export default Homepage