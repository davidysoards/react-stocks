import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
// import axios from 'axios';
// import { get } from './js/utils';
import Markets from './js/Markets';
import Stock from './js/Stock';
import Forex from './js/Forex';

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state,
      upColor = '#1ac567',
      downColor = '#ff333a';

    if (isLoading) return null;
    return (
      <Router>
        <div className="app-container">
          <header className="header">
            <div className="header-grid">
              <div className="header-grid__logo" />
              <div className="header-grid__nav">
                <ul className="header-nav">
                  <li className="header-nav__item">
                    <Link to="/">Markets</Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/stock">Get Quote</Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/forex">Forex</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <main className="main">
            <Route
              exact
              path="/"
              render={props => (
                <Markets {...props} upColor={upColor} downColor={downColor} />
              )}
            />
            <Route
              exact
              path="/stock"
              render={props => (
                <Stock {...props} upColor={upColor} downColor={downColor} />
              )}
            />
            <Route path="/forex" component={Forex} />
          </main>
          <footer className="footer">
            <div className="footer-container">© 2019 David Y. Soards</div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
