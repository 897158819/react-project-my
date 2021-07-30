import React from 'react'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'

import Home from './container/home'
import PropsIndexComponent from './container/props/propsIndex'
import TestIndex from './container/test/test'
class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/home" component={Home} />
          <Route  path="/props/" component={PropsIndexComponent} />
          <Route  path="/test/" component={TestIndex} />
        </Switch>
      </Router>
    );
  }
}


export default App;
