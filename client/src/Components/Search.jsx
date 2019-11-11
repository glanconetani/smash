import React from 'react';
import Character from './Character.jsx';

let charList = [{
  name: 'Mario',
}, {    
  name: 'DonkeyKong',
}, {
  name: 'Link',
}, {
  name: 'Samus',
}, {
  name: 'DarkSamus',
}, {
  name: 'Yoshi',
}, {
  name: 'Kirby',
}, {
  name: 'Fox',
}, {
  name: 'Pikachu',
}, {
  name: 'Luigi',
}, {
  name: 'Ness',
}, {
  name: 'Captain Falcon',
}, {
  name: 'Jiggly Puff',
}, {
  name: 'Peach',
}, {
  name: 'Daisy',
}, {
  name: 'Bowser',
}, {
  name: 'Ice Climbers',
}, {
  name: 'Sheik',
}, {
  name: 'Zelda',
}, {
  name: 'Dr.Mario',
}, {
  name: 'Pichu',
}, {
  name: 'Falco',
}, {
  name: 'Marth',
}, {
  name: 'Lucina',
}, {
  name: 'Young Link',
}, {
  name: 'Ganondorf',
}, {
  name: 'MewTwo', 
}, {
  name: 'Roy',
}, {
  name: 'Chrom',
}, {
  name: 'GameWatch',
}, {
  name: 'MetaKnight',
}, {
  name: 'Pit',
}, {
  name: 'DarkPit',
}, {
  name: 'ZeroSuitSamus',
}, {
  name: 'Wario',
}, {
  name: 'Snake',
}, {
  name: 'Ike',
}, {
  name: 'PokemonTrainer',
}, {
  name: 'DiddyKong',
}, {
  name: 'Lucas',
}, {
  name: 'Sonic',
}, {
  name: 'KingDedede',
}, {
  name: 'Olimar',
}, {
  name: 'Lucario',
}, {
  name: 'ROB',
}, {
  name: 'ToonLink',
}, {
  name: 'Wolf',
}, {
  name: 'Villager',
}, {
  name: 'MegaMan',
}, {
  name: 'WiiFitTrainer',
}, {
  name: 'Rosalina',
}, {
  name: 'LittleMac',
}, {
  name: 'Greninja',
}, {
  name: 'MiiSwordfighter',
}, {
  name: 'MiiGunner',
}, {
  name: 'Palutena',
}, {
  name: 'PACMAN',
}, {
  name: 'Robin',
}, {
  name: 'Shulk',
}, {
  name: 'BowserJr',
}, {
  name: 'DuckHunt',
}, {
  name: 'Ryu',
}, {
  name: 'Ken',
}, {
  name: 'Cloud',
}, {
  name: 'Corrin',
}, {
  name: 'Bayonetta',
}, {
  name: 'Inkling',
}, {
  name: 'Ridley',
}, {
  name: 'Simon',
}, {
  name: 'Richter',
}, {
  name: 'KingKrool',
}, {
  name: 'Isabelle',
}, {
  name: 'Incineroar',
}]

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      search:''
    };
  }
  updateSearch(event){
    console.log(event.target.value);
    this.setState({search: event.target.value})
  }
    render() {
      console.log(this.props);
      let filteredSearch = charList.filter(
        (Character) => {
          return Character.name.toLowerCase().indexOf(this.state.search.toLowerCase) !== -1;
        }
      );
        return (
            <div className="search-box">
              <ul>
                {filteredSearch.map((Character)=> {
                  return <Character character={character}/> 
                })
                }
              </ul>
              <input className="search-input" 
               id="search" type="text" placeholder="Search" value={this.state.search}
                onChange={this.updateSearch.bind(this)} />
            </div>
        );
    }
}
 
 