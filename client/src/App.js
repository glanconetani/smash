import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../server/store.js';

import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import CharacterPage from './pages/CharacterPage.jsx';


class App extends React.Component {
  componentDidMount( ) {
      if ( this.props.length <= 0 ) {
          this.props.fetchCharacters();
      }
  }

  render() {
    const { name } = this.props;

    return (
      <div>
<<<<<<< HEAD
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/:id' component={CharacterPage} />
=======
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/about' component={About}/>
              <Route path='/:id' component={CharacterPage}/>
>>>>>>> 7e818788c308782905f43bdf46120ae631b6fbcd
      </div>
    );
  }
}

const mapStateToProps = (state) => ( {
    name: state.data,
} );

const mapDispatchToProps = {
    fetchCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
