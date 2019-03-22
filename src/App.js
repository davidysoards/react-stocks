import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
// import axios from 'axios';
import Markets from './js/Markets';
import Stock from './js/Stock';
import Forex from './js/Forex';

class App extends Component {
  render() {
    const upColor = '#1ac567',
      downColor = '#ff333a';

    return (
      <Router>
        <div className="app-container">
          <header className="header">
            <div className="header-grid">
              {/* =Logo div - uses CSS background-image */}
              <div className="header-grid__logo" />
              <div className="header-grid__nav">
                <ul className="header-nav">
                  <li className="header-nav__item">
                    <Link to="/">Markets</Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/stock">Stock Quote</Link>
                  </li>
                  <li className="header-nav__item">
                    <Link to="/forex">Forex</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {/* =Begin Content */}
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
          {/* =End Content */}
          <footer className="footer">
            <div className="footer-container">© 2019 David Y. Soards</div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
