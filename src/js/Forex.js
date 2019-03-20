import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Forex extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <div className="forex-grid">
        <div className="forex-grid__heading">
          <h2>Exchange Rate Calculator</h2>
        </div>
        <div className="forex-grid__calculator">
          <div className="calculator">
            <div className="calculator__input-1">
              <label htmlFor="usd-input" className="calculator__labels">
                US Dollars
              </label>
              <br />
              <input type="number" name="usd" id="usd-input" />
            </div>
            <div className="calculator__select">
              <label
                htmlFor="convert-select"
                className="calculator__convert-label"
              >
                Convert to:
              </label>
              <select
                id="convert-select"
                className="calculator__convert-select"
              >
                <option value="">Choose a currency</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
                <option value="gbp">GBP</option>
              </select>
            </div>
            <div className="calculator__input-2">
              <label htmlFor="usd-input" className="calculator__labels">
                British Pounds
              </label>
              <br />
              <input type="number" name="convert-to" id="convert-to" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
