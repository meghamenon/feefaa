import React, {Component} from 'react';
import '../index.css';

class Follow extends Component{
	render(){
		return(
			<div className="col">
          <div className="row">
            Who to Follow
             <div className="card">
            <div className="card-body">
           Jürgen Klopp
           <img className="who-to-follow" src="https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/man279.png" />
            </div>
          </div>
          </div>

          <div className="row">
             Losers weepers
             <div className="card">
            <div className="card-body">
             <img className="weepers" src="https://img.huffingtonpost.com/asset/57b96aab1800002100bcc141.jpeg?ops=scalefit_720_noupscale" />
            </div>
          </div>
          </div>
        </div>

		)
	}
}

export default Follow