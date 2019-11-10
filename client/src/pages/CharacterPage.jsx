import React, { Component } from 'react';
import PropTypes from 'prop-types';

const images = require.context('../../../images/full', true);

export default class CharacterPage extends Component {

  render() {
    let character = this.props.location.pathname.split('/')[2];
    let picture = images(`./${character}.png`)
    console.log(this.props)

    return (
      <React.Fragment>
        <h1>{character}</h1>
        <img src={picture} />
        <h1>Picture</h1>
        <h2>Attributes</h2>
        <ul>
          <li>Weight</li>
        </ul>
        <h2>Moves</h2>
        <ul>
          <li>Move Name and Damage</li>
        </ul>
        <h2>Comments</h2>
      </React.Fragment >
    );
  }
}
