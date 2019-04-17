import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as views from './views';
import Sidebar from './components/Sidebar';
import { Layout } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = { wraps: [] }
  }

  fetchWraps = () => {
    fetch('/api/v1/wraps')
      .then(res => res.json())
      .then(wraps => this.setState({ wraps }));
  }

  componentDidMount() {
    this.fetchWraps();
  }

  render() {
    const { wraps } = this.state;

    return (
      <div style={{ display: 'flex' }}>
        <BrowserRouter>
          <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
              <Switch>
                <Route path="/" component={views.Home} exact />
                <Route path="/wraps" component={() => <views.Wraps wraps={wraps} fetchWraps={this.fetchWraps}/>} exact />
                <Route path="/add" component={views.Add} exact />
                <Route path="/lend" component={views.Lend} exact />
                <Route path="/return" component={views.Return} exact />
                <Route path="/meetings" component={views.Meetings} exact />
                <Route path="*" component={views.Home} exact />
              </Switch>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
