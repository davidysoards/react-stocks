import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.scss';
import Header from './js/Header';
import Main from './js/Main';

function App() {
  return (
    <Router>
      {/* homepage redirects to markets page */}
      <Route exact path="/" render={() => <Redirect to="/markets" />} />
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div className="app-container">
          <header className="header">
            <Header />
          </header>

          <main className="main">
            <Main />
          </main>

          <footer className="footer">
            <div className="footer-container">© 2019 David Y. Soards</div>
          </footer>
        </div>
      </CSSTransition>
    </Router>
  );
}

export default App;
