import React from 'react';
import PropTypes from 'prop-types';

const FeatureItem = ({ stock, color, handleQuoteChange }) => {
  const { symbol, name, price, day_change, change_pct } = stock;
  return (
    <div className="featured-container__item" key={symbol}>
      <ul
        className="featured-stock"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleQuoteChange(stock.symbol);
        }}
      >
        <li className="featured-stock__name">{name}</li>
        <li className="featured-stock__price">{price}</li>
        <li className="featured-stock__change" style={{ color: color }}>
          {`${day_change} (${change_pct}%)`}
        </li>
      </ul>
    </div>
  );
};

FeatureItem.propTypes = {
  stock: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  handleQuoteChange: PropTypes.func.isRequired,
};

export default FeatureItem;
