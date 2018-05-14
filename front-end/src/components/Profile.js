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
            Hi I'm Jon Vadillo
            </div>
          </div>
          </div>

          <div className="row">
             Trends for you
             <div className="card">
            <div className="card-body">
             #brooklyn99
            </div>
          </div>
          </div>
        </div>


		)
	}
}


export default Profile