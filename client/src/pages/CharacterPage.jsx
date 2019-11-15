import React, { Component } from 'react';
import PropTypes from 'prop-types';

const images = require.context('../../../images/full', true);

export default class CharacterPage extends Component {

  render() {
    let { character } = this.props;
    let picture = images(`./${character[0].name}.png`)

    return (
      <React.Fragment>
        <h1>{character[0].display_name}</h1>
        <img src={picture}/>
        <h1>Picture</h1>
        <h2>Attributes</h2>

        <ul>
          <li>Weight: {character[0].weight}</li>
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
