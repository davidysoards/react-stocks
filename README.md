![React Stocks logo](src/img/react-stocks-land-black.svg)

# React Stocks

This project is deployed via GitHub pages at [React Stocks](https://davidysoards.github.io/react-stocks).

## Create React App

This project was created using 'create-react-app'.

## React Router 4

Declarative routing was implemented with React Router 4. HashRouter was used for compatibility with GitHub pages.

## Animations

Crossfades between pages and component transitions were created with CSS and the help of TransitionsGroup and CSSTransitions from react-transitions-group.

## Sass & BEM

I used SCSS and followed BEM (Block Element Modifier) methodology to write the styles for the components that make up this application.

## Axios

Axios was used to make AJAX calls. The Search function on the Stock Quote pages makes use of axios's CancelToken feature.
By caching the searches and using cancel tokens I was able to greatly reduce the number of API calls.

## World Trading Data

The data for this application comes World Trading Data. Sign up for a free account [here](https://www.worldtradingdata.com/).

### Code Louisville

This app is my final project for the January 2019 JavaScript/React cohort.

Code Louisville is a publicly funded program that offers a series of 12-week software development tracks to adults who want to pursue a career in the software development industry at no cost to the student!

You can find more information abou the program at: https://codelouisville.org/
