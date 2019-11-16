import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavigationBar.jsx'

const images = require.context('../../../images/full', true);

export default class CharacterPage extends Component {

  render() {
    let { character } = this.props;
    let picture = images(`./${character.value}.png`)

    return (
      <React.Fragment>
        <NavBar />
        <h1>{character.name}</h1>
        <img src={picture} />
        <h1>Picture</h1>
        <h2>Attributes</h2>

        <ul>
          <li>Weight: {character.weight}</li>

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
