import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.js'
import * as views from './views'


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={views.Home} exact />
            <Route path="/wraps" component={views.Wraps} exact />
            <Route path="*" component={views.Home} exact />
          </Switch>
          <Navbar />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
