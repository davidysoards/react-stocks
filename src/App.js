import React, { Component } from 'react';
import logo from './img/react-stocks-land.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="l-site-container">
        <header>
          <div className="l-header-grid">
            <img src={logo} alt="react stocks logo" width="300px" />
            <form className="searchForm">
              <div className="searchForm__inputs">
                <input type="text" className="searchForm__text" />
                <input
                  type="submit"
                  value="Search"
                  className="searchForm__submit"
                />
              </div>
            </form>
          </div>
        </header>
        <main>
          <div className="l-main-grid">
            <div className="l-main-grid__featured">
              <div className="l-featured-container">
                <div className="l-featured-container__item">
                  <button className="featured-button--left">back</button>
                </div>
                <div className="l-featured-container__item">
                  <ul className="featured-stock">
                    <li className="featured-stock__name">
                      Dow Jones Industrial
                    </li>
                    <li className="featured-stock__price">26031.67</li>
                    <li className="featured-stock__change">+17.79 (+0.64%)</li>
                  </ul>
                </div>
                <div className="l-featured-container__item">
                  <ul className="featured-stock">
                    <li className="featured-stock__name">
                      Dow Jones Industrial
                    </li>
                    <li className="featured-stock__price">26031.67</li>
                    <li className="featured-stock__change">+17.79 (+0.64%)</li>
                  </ul>
                </div>
                <div className="l-featured-container__item">
                  <ul className="featured-stock">
                    <li className="featured-stock__name">
                      Dow Jones Industrial
                    </li>
                    <li className="featured-stock__price">26031.67</li>
                    <li className="featured-stock__change">+17.79 (+0.64%)</li>
                  </ul>
                </div>
                <div className="l-featured-container__item">
                  <ul className="featured-stock">
                    <li className="featured-stock__name">
                      Dow Jones Industrial
                    </li>
                    <li className="featured-stock__price">26031.67</li>
                    <li className="featured-stock__change">+17.79 (+0.64%)</li>
                  </ul>
                </div>
                <div className="l-featured-container__item">
                  <ul className="featured-stock">
                    <li className="featured-stock__name">
                      Dow Jones Industrial
                    </li>
                    <li className="featured-stock__price">26031.67</li>
                    <li className="featured-stock__change">+17.79 (+0.64%)</li>
                  </ul>
                </div>
                <div className="l-featured-container__item">
                  <button className="featured-button--right">forward</button>
                </div>
              </div>
            </div>

            <div className="l-main-grid__highlight">
              <ul className="hightlight">
                <li className="hightlight__name">Alphabet Inc ClassName C</li>
                <li className="hightlight__symbol">GOOG</li>
                <li className="hightlight__price">1110.37</li>
                <li className="hightlight__change">+13.40 (1.22)%</li>
                <li className="hightlight__open">
                  <span>Open</span>
                  <span>1100.90</span>
                </li>
                <li className="hightlight__dayRange">
                  <span>Day's Range</span>
                  <span>970.11 - 1273.89</span>
                </li>
                <li className="hightlight__yearRange">
                  <span>52 Week Range</span>
                  <span>1095.60 - 1111.24</span>
                </li>
                <li className="hightlight__volume">
                  <span>Volume</span>
                  <span>1049545</span>
                </li>
                <li className="hightlight__avgVolume">
                  <span>Avg. Volume</span>
                  <span>1466296</span>
                </li>
              </ul>
            </div>
            <div className="l-main-grid__favorites">
              <table className="favorites">
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>FB</p>
                      <p>Facebook</p>
                    </td>
                    <td>161.89</td>
                    <td>+1.16</td>
                  </tr>
                  <tr>
                    <td>
                      <p>FB</p>
                      <p>Facebook</p>
                    </td>
                    <td>161.89</td>
                    <td>+1.16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <footer>
          <div>© 2019 David Y. Soards</div>
        </footer>
      </div>
    );
  }
}

export default App;
