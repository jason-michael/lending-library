import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

import Home from './Pages/Home';
import Inventory from './Pages/Inventory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.fetchAllWraps(wraps => {
      this.setState({ wraps });
    });
  }

  fetchAllWraps = callback => {
    fetch('/api/wraps')
    .then(res => res.json())
    .then(data => callback(data));
  }

  render() {
    const { wraps } = this.state;

    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inventory" render={(props) => <Inventory {...props} wraps={wraps} fetchAllWraps={this.fetchAllWraps} />} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
