import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import SingleBanter from './pages/SingleBanter';
import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {

    return (
    	<div>
      <Switch>
        <Route path='/' exact component={ Homepage }/>
        <Route path='/banters/:banter_id' component={ SingleBanter }/>

      </Switch>
      </div>
    );
  }
}

export default App;
