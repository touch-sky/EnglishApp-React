import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from '../containers/Clogin.js'
import Main from '../containers/Cmain.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route path='/main' component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
