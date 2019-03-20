import React, { Component } from 'react';
import axios from 'axios';
import Featured from './Featured';
import PropTypes from 'prop-types';

export default class Markets extends Component {
  static propTypes = {
    upColor: PropTypes.string.isRequired,
    downColor: PropTypes.string.isRequired,
  };

  state = {
    isLoading: true,
    featuredStocks: [],
  };

  componentDidMount() {
    this.getFeaturedStocks('^DJI,^SP400,^IXIC').then(() =>
      this.setState({ isLoading: false })
    );
  }

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
    // this.setState({ loading: true });
    const featuredStocks = await this.getStockData(symbol);
    this.setState({ featuredStocks });
    console.log(featuredStocks);
    // this.setState({ loading: false });
  };
  render() {
    const { featuredStocks, isLoading } = this.state;
    const { upColor, downColor } = this.props;
    if (isLoading) return null;
    return (
      <div className="markets-grid">
        <div className="markets-grid__heading">
          <h2>Market Overview</h2>
        </div>
        <div className="markets-grid__overview">
          {/* <section className="section-container">overview</section> */}
          <Featured
            featuredStocks={featuredStocks}
            upColor={upColor}
            downColor={downColor}
          />
        </div>
        <div className="markets-grid__details">
          <section className="primary-container">primary</section>
        </div>
      </div>
    );
  }
}
