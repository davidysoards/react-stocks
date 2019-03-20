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
    isLoading: true,
    featuredStocks: [],
    quote: {},
    quoteSymbol: '',
    quoteIsLoading: true,
  };

  componentDidMount() {
    this.getFeaturedStocks('^DJI,^SP400,^IXIC').then(
      () =>
        // this.handleQuoteChange('^DJI').then(() =>
        this.setState({ isLoading: false })
      // )
    );
  }

  handleQuoteChange = async symbol => {
    const data = await this.getStockData(symbol);
    const quote = data[0];
    console.log(quote);
    this.setState({ quote, quoteSymbol: symbol });
    this.setState({ quoteIsLoading: false });
  };

  getStockData = async val => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${val}&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq`
      );
      const data = res.data.data;
      return data;
    } catch (err) {
      console.log('Error fetching stock data', err);
    }
  };

  getFeaturedStocks = async symbol => {
    const featuredStocks = await this.getStockData(symbol);
    this.setState({ featuredStocks });
    console.log(featuredStocks);
  };
  render() {
    const { featuredStocks, isLoading, quote, quoteIsLoading } = this.state,
      { upColor, downColor } = this.props,
      currentQuoteColor = quote.day_change >= 0 ? upColor : downColor;
    if (isLoading) return null;
    return (
      <div className="markets-grid">
        <div className="markets-grid__heading">
          <h2>Market Overview</h2>
        </div>
        <div className="markets-grid__overview">
          <Featured
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
