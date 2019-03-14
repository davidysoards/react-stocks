import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, upColor, downColor }) => {
  const {
      name,
      symbol,
      price,
      stock_exchange_long,
      day_change,
      change_pct,
      price_open,
      day_high,
      day_low,
      volume,
      volume_avg,
    } = quote,
    year_high = quote['52_week_high'],
    year_low = quote['52_week_low'],
    color = day_change >= 0 ? upColor : downColor;
  return (
    <div className="l-quote-grid">
      <div className="l-quote-grid__header">
        <ul className="quote-header">
          <li className="quote-header__name-and-symbol">
            <span className="quote-header__name">{name}</span>
            <span className="quote-header__symbol">{`(${symbol})`}</span>
          </li>
          <li className="quote-header__exchange">{stock_exchange_long}</li>
          <li className="quote-header__price">{price}</li>
          <li
            className="quote-header__change"
            style={{ color: color }}
          >{`${day_change} (${change_pct})%`}</li>
        </ul>
      </div>
      <div className="l-quote-grid__details">
        <table className="quote-details-table">
          <tbody>
            <tr>
              <td>Open</td>
              <td>{price_open}</td>
            </tr>
            <tr>
              <td>Day's Range</td>
              <td>{`${day_low} - ${day_high}`}</td>
            </tr>
            <tr>
              <td>52 Week Range</td>
              <td>{`${year_low} - ${year_high}`}</td>
            </tr>
            <tr>
              <td>Volume</td>
              <td>{volume}</td>
            </tr>
            <tr>
              <td>Avg. Volume</td>
              <td>{volume_avg}</td>
            </tr>
          </tbody>
        </table>
        {/* <ul className="quote-details-list">
          <li className="quote-details-list__item">
            <span>Open</span>
            <span>{price_open}</span>
          </li>
          <li className="quote-details-list__item">
            <span>Day's Range</span>
            <span>{`${day_low} - ${day_high}`}</span>
          </li>
          <li className="quote-details-list__item">
            <span>52 Week Range</span>
            <span>{`${year_low} - ${year_high}`}</span>
          </li>
          <li className="quote-details-list__item">
            <span>Volume</span>
            <span>{volume}</span>
          </li>
          <li className="quote-details-list__item">
            <span>Avg. Volume</span>
            <span>{volume_avg}</span>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  upColor: PropTypes.string.isRequired,
  downColor: PropTypes.string.isRequired,
};

export default Quote;
