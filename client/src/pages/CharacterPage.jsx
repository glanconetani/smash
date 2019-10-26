import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterPage extends Component {

  render() {

    let character = this.props.location.pathname.split('/')[1];
    console.log(this.props)

    return (
      <React.Fragment>
        <h1>{character}</h1>
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
