import React from 'react';
import PropTypes from 'prop-types';
import FeatureItem from './FeatureItem';

// this is the container for the stock indexes on the Market page
// maps over the featuredStocks array to create 3 featured Items
const Featured = ({
  featuredStocks,
  handleQuoteChange,
  upColor,
  downColor,
}) => {
  return (
    <div className="featured-container">
      {featuredStocks.map(stock => {
        const color = stock.day_change >= 0 ? upColor : downColor;
        return (
          <FeatureItem
            key={stock.symbol}
            stock={stock}
            color={color}
            handleQuoteChange={handleQuoteChange}
          />
        );
      })}
    </div>
  );
};

Featured.propTypes = {
  featuredStocks: PropTypes.array.isRequired,
  handleQuoteChange: PropTypes.func.isRequired,
  upColor: PropTypes.string.isRequired,
  downColor: PropTypes.string.isRequired,
};

export default Featured;
