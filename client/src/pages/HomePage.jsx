import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmashTable from '../Components/SmashTable.jsx'
import NavBar from '../Components/NavigationBar.jsx'



export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SmashTable/>
      </div>
    );
  }
}
