import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
  // get the stock indexes info when the page loads
  componentDidMount() {
    this.getFeaturedStocks(this.state.featuredStockSymbols);
  }

  // fetch data for the chosen stock symbol
  handleQuoteChange = async symbol => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${
          this.props.apiKey
        }`
      );
      const data = res.data.data;
      const quote = data[0];
      console.log(quote);
      this.setState({ quote, quoteSymbol: symbol, quoteIsLoading: false });
    } catch (err) {
      console.log('Error fetching stock data', err);
    }
  };
  // fetch info for the featuredStockSymbols
  getFeaturedStocks = async symbols => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbols}&api_token=${
          this.props.apiKey
        }`
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
      featuredStocks,
      quote,
      featuredIsLoading,
      quoteIsLoading,
    } = this.state;
    const { upColor, downColor } = this.props;
    const currentQuoteColor = quote.day_change >= 0 ? upColor : downColor;

    if (featuredIsLoading) return null;
    return (
      <div className="markets-grid">
        <div className="markets-grid__heading">
          <h2>Market Overview</h2>
        </div>
        {/* section that shows stock indexes */}
        {featuredIsLoading ? null : (
          <div className="markets-grid__overview">
            <Featured
              featuredIsLoading={featuredIsLoading}
              featuredStocks={featuredStocks}
              upColor={upColor}
              downColor={downColor}
              handleQuoteChange={this.handleQuoteChange}
            />
          </div>
        )}
        {/* section that shows details of clicked index */}
        <div className="markets-grid__info">
          {quoteIsLoading ? (
            <div>Click Items for Details</div>
          ) : (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={quote.symbol}
                in={true}
                appear={true}
                timeout={500}
                classNames="slide"
              >
                <section className="route-section">
                  <Quote currentQuoteColor={currentQuoteColor} quote={quote} />
                </section>
              </CSSTransition>
            </TransitionGroup>
          )}
        </div>
      </div>
    );
  }
}
