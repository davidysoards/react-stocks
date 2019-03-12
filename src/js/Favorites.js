import React from 'react';
// import PropTypes from 'prop-types'

const Favorites = props => {
  return (
    <table className="favorites">
      <thead>
        <tr>
          <th colSpan={3}>Favorites</th>
        </tr>
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
  );
};

// Favorites.propTypes = {
// }

export default Favorites;
