import React from 'react';
import CurrencySelect from './CurrencySelect';
import PropTypes from 'prop-types';

const Calculator = ({
  onSelectCurrency,
  valueA,
  valueB,
  handleInputChange,
  ratesAreLoading,
}) => {
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

  if (ratesAreLoading) return null;
  return (
    <div className="calculator">
      <div className="calculator__input-A">
        <label htmlFor="usd-input" className="calculator__label-A">
          US Dollars
        </label>
        <br />
        <input
          value={valueA}
          type="number"
          maxLength="12"
          name="usd"
          id="usd-input"
          onChange={e => {
            handleInputChange(e, 'A');
          }}
        />
      </div>
      <div className="calculator__input-B">
        <div className="calculator__select">
          <label htmlFor="convert-select" className="calculator__label-B">
            Convert to:
          </label>
          <CurrencySelect
            currenciesArray={currenciesArray}
            onSelectCurrency={onSelectCurrency}
          />
        </div>
        <input
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
