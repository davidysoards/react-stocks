import React, { Component } from 'react';
import axios from 'axios';
import { get } from './utils';
import Search from './Search';
import Quote from './Quote';
import PropTypes from 'prop-types';

export default class Stock extends Component {
  static propTypes = {
    upColor: PropTypes.string.isRequired,
    downColor: PropTypes.string.isRequired,
  };

  state = {
    cursor: 0,
    searchValue: '',
    searchResults: null,
    isLoading: true,
    quote: {},
    quoteSymbol: '',
    quoteIsLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleQuoteChange = async symbol => {
    const data = await this.getStockData(symbol);
    const quote = data[0];
    console.log(quote);
    this.setState({ quote, quoteSymbol: symbol });
    this.clearSearch();
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

  search = async val => {
    try {
      const res = await get(
        `https://www.worldtradingdata.com/api/v1/stock_search?search_term=${val}&search_by=symbol,name&limit=50&page=1&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq`
      );
      const searchResults = res.data;
      this.setState({ searchResults });
    } catch (err) {
      console.log('No search results');
    }
  };

  handleSearchChange = e => {
    document.addEventListener('click', event => {
      if (event.target.closest('.searchForm')) return;
      this.clearSearch();
    });
    this.search(e.target.value);
    this.setState({ searchValue: e.target.value });
  };

  clearSearch = () => {
    this.setState({ searchValue: '', cursor: 0 });
  };

  handleSearchKeyDowns = e => {
    const { cursor, searchResults } = this.state;
    // Up Arrow
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({ cursor: prevState.cursor - 1 }));
      // Down Arrow
    } else if (e.keyCode === 40 && cursor < searchResults.length - 1) {
      this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
      // Return
    } else if (e.keyCode === 13) {
      e.preventDefault();
      this.handleQuoteChange(searchResults[cursor].symbol);
      // Esc
    } else if (e.keyCode === 27) {
      this.clearSearch();
    }
  };

  render() {
    // prettier-ignore
    const {
      cursor, quote, quoteIsLoading, searchValue, searchResults, isLoading,
    } = this.state,
      { upColor, downColor } = this.props,
      currentQuoteColor = quote.day_change >= 0 ? upColor : downColor;

    if (isLoading) return null;
    return (
      <div className="stock-grid">
        <div className="stock-grid__heading">
          <h2>Get Stock Quote</h2>
        </div>
        <div className="stock-grid__search">
          <Search
            clearSearch={this.clearSearch}
            cursor={cursor}
            searchValue={searchValue}
            searchResults={searchResults}
            handleSearchChange={this.handleSearchChange}
            handleQuoteChange={this.handleQuoteChange}
            handleSearchKeyDowns={this.handleSearchKeyDowns}
          />
        </div>

        {quoteIsLoading ? null : (
          <div
            className="stock-grid__info"
            style={{ borderTop: `solid 1rem ${currentQuoteColor}` }}
          >
            <Quote upColor={upColor} downColor={downColor} quote={quote} />
          </div>
        )}
      </div>
    );
  }
}
