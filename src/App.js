import React from 'react'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'

import Home from './container/home'
import FatherComponent from './container/props/father';
class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/props" component={FatherComponent} />
        </Switch>
      </Router>
    );
  }
}


export default App;
