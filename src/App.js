import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.scss';
import Header from './js/Header';
import Main from './js/Main';

function App() {
  return (
    <Router>
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div className="app-container">
          {/* homepage redirects to markets page */}
          <Route exact path="/" render={() => <Redirect to="/markets" />} />
          <header className="header">
            <Header />
          </header>

          <main className="main">
            <Main />
          </main>
        </div>
      </CSSTransition>
    </Router>
  );
}

export default App;
