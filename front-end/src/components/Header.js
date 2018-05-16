import React, {Component} from 'react';
import '../index.css';


class Header extends Component{
	render(){
		return(
		
		<div className="navbar-fixed-top d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">	
		<h5 className="my-0 mr-md-auto font-weight-normal text-dark">
		<a href="/"> FeeFaa </a></h5>
      	<nav className="my-2 my-md-0 mr-md-3">
        	<a className="p-2 text-dark" href="http://www.fifa.com/news/">Footy News</a>
        	<a className="p-2 text-dark" href="http://www.goal.com/en-us">What's New</a>
        	<a className="p-2 text-dark" href="https://www.wsj.com/articles/how-to-convert-a-soccer-hater-1404089558">Haters Go Here</a>
        	<a className="p-2 text-dark" href="http://www.footytube.com/">Fans Go Here</a>
      	</nav>
		</div>
		)
	}
}

export default Header;