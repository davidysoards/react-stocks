import React, { Component } from 'react';
import Calculator from './Calculator';
import axios from 'axios';
export default class Forex extends Component {
  state = {
    currencyA: 'USD',
    currencyB: 'EUR',
    valueA: 1,
    valueB: 0,
    rates: [],
    ratesAreLoading: true,
  };

  componentDidMount() {
    this.getExchangeRates(this.state.currencyA);
  }

  getExchangeRates = async val => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/forex?base=${val}&sort=newest&api_token=J5Kh3eJUGOQ7Qj1tTVSjIcm6azCpvbRd6roOoMk23TLVpudmFuKlMDjkQVUq`
      );
      const data = res.data.data;
      this.setState({
        ratesAreLoading: false,
        valueB: data[this.state.currencyB],
        rates: data,
      });
      console.log(data);
    } catch (err) {
      console.log('Error fetching stock data', err);
    }
  };

  onSelectCurrency = val => {
    const { valueA, rates } = this.state;
    this.setState({ currencyB: val, valueB: valueA * rates[val] });
  };

  handleInputChange = (e, input) => {
    const { currencyB, rates } = this.state;
    const rate = rates[currencyB];
    if (input === 'A') {
      const newValue = e.target.value;
      this.setState({
        valueA: newValue,
        valueB: newValue * rate,
      });
    }
    if (input === 'B') {
      const newValue = e.target.value;
      this.setState({
        valueB: newValue,
        valueA: newValue / rate,
      });
    }
  };

  render() {
    const {
      valueA,
      valueB,
      currencyA,
      currencyB,
      ratesAreLoading,
      rates,
    } = this.state;
    return (
      <div className="forex-grid">
        <div className="forex-grid__heading">
          <h2>Exchange Rate Calculator</h2>
        </div>
        <div className="forex-grid__calculator">
          <Calculator
            onSelectCurrency={this.onSelectCurrency}
            handleInputChange={this.handleInputChange}
            valueA={valueA}
            valueB={valueB}
            ratesAreLoading={ratesAreLoading}
          />
        </div>
        <div className="forex-grid__exchange-rate">
          <p>{`1 ${currencyA} equals ${rates[currencyB]} ${currencyB}.`}</p>
        </div>
      </div>
    );
  }
}
