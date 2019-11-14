import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavigationBar.jsx'


const images = require.context('../../../images/full', true);

export default class CharacterPage extends Component {

  render() {
    let character = this.props.location.pathname.split('/')[2];
    let picture = images(`./${character}.png`)
    console.log(this.props)

    return (
      <React.Fragment>
        <NavBar/>
        <h1>{character}</h1>
        <img src={picture} />
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
