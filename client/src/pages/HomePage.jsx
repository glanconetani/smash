import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SmashTable from '../components/SmashTable.jsx'
import NavigationBar from '../components/NavigationBar.jsx'

import { DropdownButton, Dropdown } from 'react-bootstrap';

import Search from 'react-search'

export default class HomePage extends Component {
  HiItems(items) {
    if(items[0]!=null){
      let path="./characters/"+items[0].value;
      console.log(items[0].value);
      this.props.history.push(path)

    }
  }


  render() {

    const backgroundStyling = {
      backgroundcolor = "red"
      //backgroundimage = "../../../images/homepagebackground.JPG"
    }
    let charList = [{
      id: 0,
      value: 'Mario',
    }, {
      id: 1,
      value: 'DonkeyKong',
    }, {
      id: 2,
      value: 'Link',
    }, {
      id: 3,
      value: 'Samus',
    }, {
      id: 4,
      value: 'DarkSamus',
    }, {
      id: 5,
      value: 'Yoshi',
    }, {
      id: 6,
      value: 'Kirby',
    }, {
      id: 7,
      value: 'Fox',
    }, {
      id: 8,
      value: 'Pikachu',
    }, {
      id: 9,
      value: 'Luigi',
    }, {
      id: 10,
      value: 'Ness',
    }, {
      id: 11,
      value: 'Captain Falcon',
    }, {
      id: 12,
      value: 'Jiggly Puff',
    }, {
      id: 13,
      value: 'Peach',
    }, {
      id: 14,
      value: 'Daisy',
    }, {
      id: 15,
      value: 'Bowser',
    }, {
      id: 16,
      value: 'Ice Climbers',
    }, {
      id: 17,
      value: 'Sheik',
    }, {
      id: 18,
      value: 'Zelda',
    }, {
      id: 19,
      value: 'Dr.Mario',
    }, {
      id: 20,
      value: 'Pichu',
    }, {
      id: 21,
      value: 'Falco',
    }, {
      id: 22,
      value: 'Marth',
    }, {
      id: 23,
      value: 'Lucina',
    }, {
      id: 24,
      value: 'Young Link',
    }, {
      id: 25,
      value: 'Ganondorf',
    }, {
      id: 26,
      value: 'MewTwo',
    }, {
      id: 27,
      value: 'Roy',
    }, {
      id: 28,
      value: 'Chrom',
    }, {
      id: 29,
      value: 'GameWatch',
    }, {
      id: 30,
      value: 'MetaKnight',
    }, {
      id: 31,
      value: 'Pit',
    }, {
      id: 32,
      value: 'DarkPit',
    }, {
      id: 33,
      value: 'ZeroSuitSamus',
    }, {
      id: 34,
      value: 'Wario',
    }, {
      id: 35,
      value: 'Snake',
    }, {
      id: 36,
      value: 'Ike',
    }, {
      id: 37,
      value: 'PokemonTrainer',
    }, {
      id: 38,
      value: 'DiddyKong',
    }, {
      id: 39,
      value: 'Lucas',
    }, {
      id: 40,
      value: 'Sonic',
    }, {
      id: 41,
      value: 'KingDedede',
    }, {
      id: 42,
      value: 'Olimar',
    }, {
      id: 43,
      value: 'Lucario',
    }, {
      id: 44,
      value: 'ROB',
    }, {
      id: 45,
      value: 'ToonLink',
    }, {
      id: 46,
      value: 'Wolf',
    }, {
      id: 47,
      value: 'Villager',
    }, {
      id: 48,
      value: 'MegaMan',
    }, {
      id: 49,
      value: 'WiiFitTrainer',
    }, {
      id: 50,
      value: 'Rosalina',
    }, {
      id: 51,
      value: 'LittleMac',
    }, {
      id: 52,
      value: 'Greninja',
    }, {
      id: 54,
      value: 'MiiGunner',
    }, {
      id: 55,
      value: 'Palutena',
    }, {
      id: 56,
      value: 'PACMAN',
    }, {
      id: 57,
      value: 'Robin',
    }, {
      id: 58,
      value: 'Shulk',
    }, {
      id: 59,
      value: 'BowserJr',
    }, {
      id: 60,
      value: 'DuckHunt',
    }, {
      id: 61,
      value: 'Ryu',
    }, {
      id: 62,
      value: 'Ken',
    }, {
      id: 63,
      value: 'Cloud',
    }, {
      id: 64,
      value: 'Corrin',
    }, {
      id: 65,
      value: 'Bayonetta',
    }, {
      id: 66,
      value: 'Inkling',
    }, {
      id: 67,
      value: 'Ridley',
    }, {
      id: 68,
      value: 'Simon',
    }, {
      id: 69,
      value: 'Richter',
    }, {
      id: 70,
      value: 'KingKrool',
    }, {
      id: 71,
      value: 'Isabelle',
    }, {
      id: 72,
      value: 'Incineroar',
    }]

    let { characters } = this.props;
    return (
      <div>
        <NavigationBar characters={characters}/>
        <Search placeholder="Search for Characters..." items={charList} onItemsChanged={this.HiItems.bind(this)}></Search>
        <SmashTable />
      </div>
    );
  }
}
