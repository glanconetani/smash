import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import CharacterPage from './pages/CharacterPage.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/AboutUs' component={AboutUs} />
        {
            this.props.characters.map(character =>
                <Route key={character.id}
                       exact path={`/characters/${character.id}`}
                       render={(props) => <CharacterPage character={character}/>}/>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters.map((character) => ({
      id: character[0].name,
      name: character[0].display_name,
      weight: character[0].weight,
      speed: character[0].run_speed,
      moves: character
  })),
  a: 42,
});


export default connect(mapStateToProps)(App);
