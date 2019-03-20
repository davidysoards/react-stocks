import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({
  featuredStocks,
  handleQuoteChange,
  upColor,
  downColor,
}) => {
  return (
    <div className="featured-container">
      {featuredStocks.map(stock => {
        const { symbol, name, price, day_change, change_pct } = stock;
        const color = day_change >= 0 ? upColor : downColor;
        return (
          <div className="featured-container__item" key={symbol}>
            <ul
              className="featured-stock"
              onClick={() => {
                handleQuoteChange(symbol);
              }}
              style={{ cursor: 'pointer' }}
            >
              <li className="featured-stock__name">
                {/* {name.substr(0, name.indexOf(' ')).toUpperCase()} */}
                {name}
              </li>
              <li className="featured-stock__price">{price}</li>
              <li className="featured-stock__change" style={{ color: color }}>
                {`${day_change} (${change_pct}%)`}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

Featured.propTypes = {
  featuredStocks: PropTypes.array.isRequired,
  upColor: PropTypes.string.isRequired,
  downColor: PropTypes.string.isRequired,
};

export default Featured;
