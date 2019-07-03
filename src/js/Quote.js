import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

// displays details for the chosed stock symbol
const Quote = ({ quote, currentQuoteColor, historicData }) => {
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
    year_low = quote['52_week_low'];

  return (
    <div
      className="quote-grid"
      style={{ borderTop: `solid 1rem ${currentQuoteColor}` }}
    >
      <div className="quote-grid__header">
        <ul className="quote-header">
          <li className="quote-header__name-and-symbol">
            <span className="quote-header__name">{name}</span>
            <span className="quote-header__symbol">{`(${symbol})`}</span>
          </li>
          <li className="quote-header__exchange">{stock_exchange_long}</li>
          <li className="quote-header__price">{price}</li>
          <li
            className="quote-header__change"
            style={{ color: currentQuoteColor }}
          >{`${day_change} (${change_pct})%`}</li>
        </ul>
      </div>
      <div className="quote-grid__details">
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
      </div>
      <div className="quote-grid__highchart">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={{
            series: [
              {
                data: historicData,
                tooltip: {
                  valueDecimals: 2,
                },
              },
            ],
            credits: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  currentQuoteColor: PropTypes.string.isRequired,
};

export default Quote;
