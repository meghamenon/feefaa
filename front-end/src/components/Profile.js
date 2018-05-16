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
            <img className="profile-pic" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2014/06/25/09/AN46695362xxc.jpg?w968h681" />
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