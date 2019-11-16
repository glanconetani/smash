import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmashTable from '../components/SmashTable.jsx'
import NavigationBar from '../components/NavigationBar.jsx'

import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class HomePage extends Component {
  render() {
    let { characters } = this.props;
    return (
      <div>
        <NavigationBar characters={characters}/>

        <SmashTable/>
      </div>
    );
  }
}
