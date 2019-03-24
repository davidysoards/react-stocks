import React from 'react';
// import PropTypes from 'prop-types'

// THIS COMPONENT IS NOT YET ACTIVE

const Favorites = props => {
  return (
    <table className="favorites-table">
      <tbody>
        <tr>
          <th className="favorites-table__header" colSpan={3}>
            Favorites
          </th>
        </tr>

        <tr className="favorites-table__labels">
          <td>Symbol</td>
          <td>Price</td>
          <td>% Change</td>
        </tr>
        <tr>
          <td>
            <span className="favorites-table__symbol">FB</span>
            <br />
            <span className="favorites-table__name">Facebook</span>
          </td>
          <td>161.89</td>
          <td>+1.16</td>
        </tr>
        <tr>
          <td>
            <span className="favorites-table__symbol">FB</span>
            <br />
            <span className="favorites-table__name">Facebook</span>
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
