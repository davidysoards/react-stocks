import React from 'react';
// import PropTypes from 'prop-types';

const Calculator = props => {
  return (
    <div className="calculator">
      <div className="calculator__input-1">
        <label htmlFor="usd-input" className="calculator__labels">
          US Dollars
        </label>
        <br />
        <input type="number" name="usd" id="usd-input" />
      </div>
      <div className="calculator__select">
        <label htmlFor="convert-select" className="calculator__convert-label">
          Convert to:
        </label>
        <select id="convert-select" className="calculator__convert-select">
          <option value="">Choose a currency</option>
          {/* European Euro */}
          <option value="EUR">EUR</option>
          {/* Japanese Yen */}
          <option value="JPY">JPY</option>
          {/* British Pound */}
          <option value="GBP">GBP</option>
          {/* Swiss Franc */}
          <option value="CHF">CHF</option>
          {/* Canadian Dollar */}
          <option value="CAD">CAD</option>
          {/* Australian Dollar */}
          <option value="AUD">AUD</option>
          {/* New Zealand Dollar */}
          <option value="NZD">NZD</option>
          {/* South African Rand */}
          <option value="ZAR">ZAR</option>
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
  );
};

// Calculator.propTypes = {};

export default Calculator;
