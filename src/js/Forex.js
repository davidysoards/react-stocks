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
        <div className="forex-grid__primary">
          <section className="primary-container">primary</section>
        </div>
        <div className="forex-grid__aside">
          <aside className="aside-container">aside</aside>
        </div>
      </div>
    );
  }
}
