import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Markets from './Markets';
import Stock from './Stock';
import Forex from './Forex';

const Container = ({ location }) => {
  // colors used throughout app
  const upColor = '#1ac567';
  const downColor = '#ff333a';
  // api key stored in .env file which is not committed
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} timeout={700} classNames="fade">
        <section className="route-section">
          <Switch location={location}>
            <Route
              path="/markets"
              render={props => (
                <Markets
                  {...props}
                  upColor={upColor}
                  downColor={downColor}
                  apiKey={apiKey}
                />
              )}
            />
            <Route
              path="/stock"
              render={props => (
                <Stock
                  {...props}
                  upColor={upColor}
                  downColor={downColor}
                  apiKey={apiKey}
                />
              )}
            />
            <Route
              path="/forex"
              render={props => <Forex {...props} apiKey={apiKey} />}
            />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Container);
