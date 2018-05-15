import React, {Component} from 'react';
import '../index.css';


class Profile extends Component{
	render(){
		return(
			<div className="col">
          <div className="row">
            Profile
             <div className="card">
            <div className="card-body">
            Hi, I'm Luiz Suarez
            </div>
          </div>
          </div>

          <div className="row">
             Trends for you
             <div className="card">
            <div className="card-body">
             #FifaWorldCup2018
            </div>
          </div>
          </div>
        </div>


		)
	}
}


export default Profile