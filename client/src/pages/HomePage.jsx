import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import SmashTable from '../Components/SmashTable.jsx'
import NavBar from '../Components/NavigationBar.jsx'
export default class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to SmashDB!</h1>
        <NavBar />
        <SmashTable />
      </div>
    );
  }
}
