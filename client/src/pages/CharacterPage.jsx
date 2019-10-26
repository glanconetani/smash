import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CharacterPage extends Component {

  render () {

      let character = this.props.location.pathname.split('/')[1];

      return (
        <h1>{character}</h1>
      );
  }
}
