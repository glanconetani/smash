import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import AboutUs from './Components/AboutUs.jsx';
import CharacterPage from './pages/CharacterPage.jsx';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route exact path='/characters/:id' component={CharacterPage} />
      </div>
    );
  }
}





