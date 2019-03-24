import React from 'react';
import PropTypes from 'prop-types';

// pick a currency to convert from USD
// send the value to onSelectCurrency to be used as a key for the data array
const currencySelect = ({ currenciesArray, onSelectCurrency }) => {
  return (
    <select
      id="convert-select"
      className="calculator__convert-select"
      onChange={e => onSelectCurrency(e.target.value)}
    >
      {currenciesArray.map((currency, i) => {
        const { name, value } = currency;
        return (
          <option value={value} key={i}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

currencySelect.prototypes = {
  currenciesArray: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default currencySelect;
