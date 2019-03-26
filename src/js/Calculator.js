import React from 'react';
import CurrencySelect from './CurrencySelect';
import PropTypes from 'prop-types';

const Calculator = ({
  onSelectCurrency,
  valueA,
  valueB,
  handleInputChange,
}) => {
  // names are for display in the selector
  // values are sent to the onSelectCurrency function
  const currenciesArray = [
    { name: 'European Euros', value: 'EUR' },
    { name: 'Japanese Yen', value: 'JPY' },
    { name: 'British Pounds', value: 'GBP' },
    { name: 'Swiss Francs', value: 'CHF' },
    { name: 'Canadian Dollars', value: 'CAD' },
    { name: 'Australian Dollars', value: 'AUD' },
    { name: 'New Zealand', value: 'NZD' },
    { name: 'South African Rand', value: 'ZAR' },
  ];

  return (
    <div className="calculator">
      {/* Currency A is always set to USD, but that could be changed in the future */}
      <div className="calculator__currency-A">
        <label htmlFor="usd-input" className="calculator__label-A">
          US Dollars
        </label>
        <br />
        <input
          className="calculator__input-A calculator__input--style"
          value={valueA}
          type="number"
          name="usd"
          id="usd-input"
          onChange={e => {
            handleInputChange(e, 'A');
          }}
        />
      </div>
      {/* equals sign not visible on mobile */}
      <div className="calculator__equals-sign">=</div>
      <div className="calculator__currency-B">
        <div className="calculator__select">
          <label htmlFor="convert-select" className="calculator__select-label">
            Convert to:
          </label>
          <CurrencySelect
            currenciesArray={currenciesArray}
            onSelectCurrency={onSelectCurrency}
          />
        </div>
        <input
          className="calculator__input-B calculator__input--style"
          value={valueB}
          type="number"
          name="convert-to"
          id="convert-to"
          onChange={e => {
            handleInputChange(e, 'B');
          }}
        />
      </div>
    </div>
  );
};

Calculator.propTypes = {
  valueA: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valueB: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ratesAreLoading: PropTypes.bool.isRequired,
};

export default Calculator;
