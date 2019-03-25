import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className="header-grid">
      {/* =Logo div - uses CSS background-image */}
      <div className="header-grid__logo" />
      <div className="header-grid__nav">
        <ul className="header-nav">
          <li className="header-nav__item">
            <Link to="/markets">Markets</Link>
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
  );
};

Header.propTypes = {};

export default Header;
