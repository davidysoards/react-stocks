import React from 'react';
import PropTypes from 'prop-types';
import FeatureItem from './FeatureItem';

const Featured = ({
  featuredIsLoading,
  featuredStocks,
  handleQuoteChange,
  upColor,
  downColor,
}) => {
  if (featuredIsLoading) return null;
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
  featuredIsLoading: PropTypes.bool.isRequired,
  handleQuoteChange: PropTypes.func.isRequired,
  upColor: PropTypes.string.isRequired,
  downColor: PropTypes.string.isRequired,
};

export default Featured;
