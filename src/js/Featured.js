import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({ featuredStocks, upColor, downColor }) => {
  return (
    <div className="l-featured-container">
      {/* <div className="l-featured-container__item">
        <button className="featured-button--left">back</button>
      </div> */}
      {featuredStocks.map(stock => {
        const color = stock.day_change >= 0 ? upColor : downColor;
        return (
          <div className="l-featured-container__item" key={stock.symbol}>
            <ul className="featured-stock">
              <li className="featured-stock__name">{stock.name}</li>
              <li className="featured-stock__price">{stock.price}</li>
              <li className="featured-stock__change" style={{ color: color }}>
                {`${stock.day_change} (${stock.change_pct}%)`}
              </li>
            </ul>
          </div>
        );
      })}
      {/* <div className="l-featured-container__item">
        <button className="featured-button--right">forward</button>
      </div> */}
    </div>
  );
};

Featured.propTypes = {
  featuredStocks: PropTypes.array.isRequired,
  upColor: PropTypes.string.isRequired,
  downColor: PropTypes.string.isRequired,
};

export default Featured;
