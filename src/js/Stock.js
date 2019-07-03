import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import axios from 'axios';
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
  };

  // search world trading data for available stock symbols that match the search input
  search = async val => {
    try {
      // uses a utility function get() to generate axios cancel tokens when input is changed while requests are still pending
      const res = await get(
        `https://www.worldtradingdata.com/api/v1/stock_search?search_term=${val}&search_by=symbol,name&limit=50&page=1&api_token=${this.props.apiKey}`
      );
      const searchResults = res.data;
      // cache results to cut down on unecessary requests
      this.setState({ searchResults });
    } catch (err) {
      console.log('No search results');
    }
  };
  // handles changes to the search input
  handleSearchChange = e => {
    this.search(e.target.value);
    this.setState({ searchValue: e.target.value });
  };

  // clears the search input and sets cursor value back to 0
  clearSearch = () => {
    this.setState({ searchValue: '', cursor: 0 });
  };

  // handles behavior of Up, Down, Return, Escape & Delete keys while using the search dropdown
  handleSearchKeyDowns = e => {
    const { cursor, searchResults, searchValue } = this.state;
    // Up Arrow -- navigate up
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({ cursor: prevState.cursor - 1 }));
      // Down Arrow -- navigate down
    } else if (e.keyCode === 40 && cursor < searchResults.length - 1) {
      this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
      // Return -- select symbol & show details
    } else if (e.keyCode === 13) {
      e.preventDefault();
      this.props.handleQuoteChange(searchResults[cursor].symbol);
      this.clearSearch();
      // Esc -- clear search and reset cursor
    } else if (
      e.keyCode === 27 ||
      // Delete -- reset cursor when value is empty
      (e.keyCode === 8 && searchValue.length <= 1)
    ) {
      this.clearSearch();
    }
  };

  render() {
    const { cursor, searchValue, searchResults } = this.state;
    const {
      upColor,
      downColor,
      handleQuoteChange,
      quote,
      quoteIsLoading,
      historicData,
    } = this.props;
    const currentQuoteColor = quote.day_change >= 0 ? upColor : downColor;

    return (
      <div className="stock-grid">
        <div className="stock-grid__heading">
          <h2>Get a Stock Quote</h2>
        </div>
        <div className="stock-grid__search">
          <Search
            clearSearch={this.clearSearch}
            cursor={cursor}
            searchValue={searchValue}
            searchResults={searchResults}
            handleSearchChange={this.handleSearchChange}
            handleQuoteChange={handleQuoteChange}
            handleSearchKeyDowns={this.handleSearchKeyDowns}
          />
        </div>
        <div className="stock-grid__info">
          {quoteIsLoading ? null : (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={quote.symbol}
                in={true}
                appear={true}
                timeout={500}
                classNames="slide"
              >
                <section className="route-section">
                  <Quote
                    currentQuoteColor={currentQuoteColor}
                    quote={quote}
                    historicData={historicData}
                  />
                </section>
              </CSSTransition>
            </TransitionGroup>
          )}
        </div>
      </div>
    );
  }
}
