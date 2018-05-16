import React, {Component} from 'react';
import '../index.css';


class Header extends Component{
	render(){
		return(
		
		<div className="navbar-fixed-top d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">	
		<h5 className="my-0 mr-md-auto font-weight-normal text-dark">
		<a href="/"> FeeFaa </a></h5>
      	<nav className="my-2 my-md-0 mr-md-3">
        	<a className="p-2 text-dark" href="#">Footy News</a>
        	<a className="p-2 text-dark" href="#">What's New</a>
        	<a className="p-2 text-dark" href="#">Haters Go Here</a>
        	<a className="p-2 text-dark" href="#">Fans Go Here</a>
      	</nav>
      		<a className="btn btn-outline-primary" href="#">Sign up to Banter</a>
		</div>
		)
	}
}

export default Header;