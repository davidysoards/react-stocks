import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import { get } from './js/utils';
import logo from './img/react-stocks-land.svg';
import Search from './js/Search';
import Featured from './js/Featured';
import Quote from './js/Quote';
import Favorites from './js/Favorites';

class App extends Component {
  state = {
    featuredStocks: [],
    favoriteStocks: [],
    quoteSymbol: '',
    quote: {},
    loading: false,
    searchResults: null,
    searchValue: '',
    cursor: 0,
  };

  componentDidMount() {
    this.getFeaturedStocks('^DJI,^SP400,^IXIC,^RUT');
    this.handleQuoteChange('AAPL');
  }

  getFeaturedStocks = async symbol => {
    const featuredStocks = await this.getStockData(symbol);
    this.setState({ featuredStocks });
    console.log(featuredStocks);
  };

  handleQuoteChange = async symbol => {
    const data = await this.getStockData(symbol);
    const quote = data[0];
    console.log(quote);
    this.setState({ quote, quoteSymbol: symbol });
    this.clearSearch();
  };

  getStockData = async val => {
    this.setState({ loading: true });
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${val}&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq`
      );
      const data = res.data.data;
      this.setState({ loading: false });
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
    const {
        cursor,
        featuredStocks,
        quoteSymbol,
        quote,
        searchValue,
        searchResults,
      } = this.state,
      upColor = '#1ac567',
      downColor = '#ff333a',
      currentQuoteColor = quote.day_change >= 0 ? upColor : downColor;
    return (
      <div className="l-site-container">
        <header className="header">
          <div className="l-header-grid">
            <div className="l-header-grid__logo">
              <img src={logo} alt="react stocks logo" width="300px" />
            </div>
            <div className="l-header-grid__search">
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
          </div>
        </header>
        <section className="featured">
          <Featured
            featuredStocks={featuredStocks}
            upColor={upColor}
            downColor={downColor}
          />
        </section>
        <main className="main">
          <div
            className="l-main-grid"
            style={{ borderTop: `solid 1rem ${currentQuoteColor}` }}
          >
            <div className="l-main-grid__quote">
              <Quote
                quoteSymbol={quoteSymbol}
                quote={quote}
                upColor={upColor}
                downColor={downColor}
              />
            </div>
            <div className="l-main-grid__favorites">
              <Favorites upColor={upColor} downColor={downColor} />
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="l-footer-container">© 2019 David Y. Soards</div>
        </footer>
      </div>
    );
  }
}

export default App;
