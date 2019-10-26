import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import CharacterPage from './pages/CharacterPage.jsx';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/:id' component={CharacterPage} />
      </div>
    );
  }
}
