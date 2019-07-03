import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios from 'axios';
import Markets from './Markets';
import Stock from './Stock';
import Forex from './Forex';

function todaysDate(yearsAgo = 0) {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear() - yearsAgo;
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return `${yyyy}-${mm}-${dd}`;
}
function convertToUnix(dateString) {
  return new Date(dateString).getTime();
}
function formatForHighcharts(data) {
  return Object.keys(data).map(key => [
    convertToUnix(key),
    Number(data[key].close),
  ]);
}

const Container = ({ location }) => {
  const [quote, setQuote] = useState({});
  const [historicData, setHistoricData] = useState([]);
  const [quoteSymbol, setQuoteSymbol] = useState('');
  const [quoteIsLoading, setQuoteIsLoading] = useState(true);

  const handleQuoteChange = symbol => {
    fetchRealtimeData(symbol);
    fetchHistoricData(symbol);
    setQuoteSymbol(symbol);
  };

  // fetch data for the chosen stock symbol
  const fetchRealtimeData = async symbol => {
    try {
      const res = await axios(
        `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${apiKey}`
      );
      const data = res.data.data;
      const stockQuote = data[0];
      setQuote(stockQuote);
      console.log(stockQuote);
    } catch (err) {
      console.log('Error fetching stock data', err);
    }
  };
  const fetchHistoricData = async symbol => {
    // const dateTo = todaysDate();
    const dateFrom = todaysDate(1);
    try {
      const res = await axios(
        `https://api.worldtradingdata.com/api/v1/history?symbol=${symbol}&date_from=${dateFrom}&sort=oldest&api_token=${apiKey}`
      );
      const data = res.data.history;
      const formattedData = formatForHighcharts(data);
      console.log(formattedData);
      setHistoricData(formattedData);
      setQuoteIsLoading(false);
    } catch (err) {
      console.log('Error fetching stock data', err);
    }
  };

  // api key stored in .env file which is not committed
  const apiKey = process.env.REACT_APP_API_KEY;
  // colors used throughout app
  const upColor = '#1ac567';
  const downColor = '#ff333a';
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} timeout={700} classNames="fade">
        <section className="route-section">
          <Switch location={location}>
            <Route
              path="/markets"
              render={props => (
                <Markets
                  {...props}
                  upColor={upColor}
                  downColor={downColor}
                  apiKey={apiKey}
                  handleQuoteChange={handleQuoteChange}
                  quote={quote}
                  quoteSymbol={quoteSymbol}
                  quoteIsLoading={quoteIsLoading}
                  historicData={historicData}
                />
              )}
            />
            <Route
              path="/stock"
              render={props => (
                <Stock
                  {...props}
                  upColor={upColor}
                  downColor={downColor}
                  apiKey={apiKey}
                  handleQuoteChange={handleQuoteChange}
                  quote={quote}
                  quoteSymbol={quoteSymbol}
                  quoteIsLoading={quoteIsLoading}
                  historicData={historicData}
                />
              )}
            />
            <Route
              path="/forex"
              render={props => <Forex {...props} apiKey={apiKey} />}
            />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Container);
