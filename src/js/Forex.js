import React, { Component } from 'react';
import Calculator from './Calculator';
// import PropTypes from 'prop-types';

export default class Forex extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    currencyA: 'USD',
    currencyB: 'EUR',
    valueA: 0,
    valueB: 0,
  };

  render() {
    return (
      <div className="forex-grid">
        <div className="forex-grid__heading">
          <h2>Exchange Rate Calculator</h2>
        </div>
        <div className="forex-grid__calculator">
          <Calculator />
        </div>
      </div>
    );
  }
}
