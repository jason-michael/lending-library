import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { Container } from 'semantic-ui-react';

// Pages
import Home from './Pages/Home';
import Inventory from './Pages/Inventory/Inventory';
import Lend from './Pages/Lend';
import Return from './Pages/Return';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.fetchAllWraps(wraps => this.setState({ wraps }));
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
        <Container>
          <NavBar />
          <Switch >
            <Route path="/" exact component={Home}/>
            <Route path="/lend" exact component={Lend}/>
            <Route path="/return" exact component={Return}/>
            <Route path="/inventory" render={(props) => <Inventory {...props} wraps={wraps} fetchAllWraps={this.fetchAllWraps} />} />
            <Route path="*" component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
