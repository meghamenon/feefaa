import React, {Component} from 'react';
import '../index.css';
import TwitterTimeline from 'react-twitter-embedded-timeline';


class Profile extends Component{
	render(){
		return(
			<div className="col">
          <div className="row">
          </div>
          <div className="row">
            <div className="twitter-body-timeline">
            <TwitterTimeline widgetId="996874292028555264" />
            </div>
          </div>
        </div>


		)
	}
}


export default Profile

