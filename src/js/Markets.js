import React, { Component } from 'react';
import axios from 'axios';
import Featured from './Featured';
import Quote from './Quote';
import PropTypes from 'prop-types';

export default class Markets extends Component {
  static propTypes = {
    upColor: PropTypes.string.isRequired,
    downColor: PropTypes.string.isRequired,
  };

  state = {
    featuredIsLoading: true,
    featuredStockSymbols: '^DJI,^SP400,^IXIC',
    featuredStocks: [],
    quote: {},
    quoteSymbol: '',
    quoteIsLoading: true,
  };

  componentDidMount() {
    this.getFeaturedStocks(this.state.featuredStockSymbols);
  }

  handleQuoteChange = async symbol => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq`
      );
      const data = res.data.data;
      const quote = data[0];
      console.log(quote);
      this.setState({ quote, quoteSymbol: symbol, quoteIsLoading: false });
    } catch (err) {
      console.log('Error fetching stock data', err);
    }
  };

  getFeaturedStocks = async symbols => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbols}&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq`
      );
      const featuredStocks = res.data.data;
      this.setState({ featuredStocks, featuredIsLoading: false });
      console.log(featuredStocks);
    } catch (err) {
      console.log('Error fetching featured stocks', err);
    }
  };
  render() {
    const {
        featuredIsLoading,
        featuredStocks,
        quote,
        quoteIsLoading,
      } = this.state,
      { upColor, downColor } = this.props,
      currentQuoteColor = quote.day_change >= 0 ? upColor : downColor;

    return (
      <div className="markets-grid">
        <div className="markets-grid__heading">
          <h2>Market Overview</h2>
        </div>
        <div className="markets-grid__overview">
          <Featured
            featuredIsLoading={featuredIsLoading}
            featuredStocks={featuredStocks}
            upColor={upColor}
            downColor={downColor}
            handleQuoteChange={this.handleQuoteChange}
          />
        </div>
        {quoteIsLoading ? null : (
          <div
            className="markets-grid__details"
            style={{ borderTop: `solid 1rem ${currentQuoteColor}` }}
          >
            <Quote upColor={upColor} downColor={downColor} quote={quote} />
          </div>
        )}
      </div>
    );
  }
}
