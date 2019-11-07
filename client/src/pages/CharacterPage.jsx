import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Bayonetta from "../../../images/full/Bayonetta.png"
// import BowserJr from "../../../images/full/Bowser Jr.png"
// import Bowser from "../../../images/full/Bowser.png"
// import CaptainFalcon from "../../../images/full/Captain Falcon.png"
// import Charizard from "../../../images/full/Charizard.png"
// import Cloud from "../../../images/full/Cloud.png"
// import Corrin from "../../../images/full/Corrin.png"
// // import Daisy from "../../../images/full/Daisy.png"
// import DarkPit from "../../../images/full/Dark Pit.png"
// import DonkeyKong from "../../../images/full/Donkey Kong.png"
// import DiddyKong from "../../../images/full/Diddy Kong.png"
// import DrMario from "../../../images/full/Dr. Mario.png"
// import DuckHunt from "../../../images/full/Duck Hunt.png"
// import Falco from "../../../images/full/Falco.png"
// import Fox from "../../../images/full/Fox.png"
// import GameWatch from "../../../images/full/Game & Watch.png"
// import Ganondorf from "../../../images/full/Ganondorf.png"
// import Greninja from "../../../images/full/Greninja.png"
// import Ike from "../../../images/full/Ike.png"
// import Jigglypuff from "../../../images/full/Jigglypuff.png"
// import KingDedede from "../../../images/full/King Dedede.png"
// import Kirby from "../../../images/full/Kirby.png"
// import LinkChar from "../../../images/full/Link.png"
// import LittleMac from "../../../images/full/Little Mac.png"
// import Lucario from "../../../images/full/Lucario.png"
// import Lucas from "../../../images/full/Lucas.png"
// import Lucina from "../../../images/full/Lucina.png"
// import Luigi from "../../../images/full/Luigi.png"
// import Mario from "../../../images/full/Mario.png"
// import Marth from "../../../images/full/Marth.png"
// import MegaMan from "../../../images/full/Mega Man.png"
// import MetaKnight from "../../../images/full/Meta Knight.png"
// import MewTwo from "../../../images/full/Mewtwo.png"
// import MiiBrawler from "../../../images/full/Mii Brawler.png"
// import MiiGunner from "../../../images/full/Mii Gunner.png"
// import MiiSwordfighter from "../../../images/full/Mii Swordfighter.png"
// import Ness from "../../../images/full/Ness.png"
// import Olimar from "../../../images/full/Olimar.png"
// import PACMAN from "../../../images/full/PAC-MAN.png"
// import Palutena from "../../../images/full/Palutena.png"
// import Peach from "../../../images/full/Peach.png"
// import Pikachu from "../../../images/full/Pikachu.png"
// import Pit from "../../../images/full/Pit.png"
// import ROB from "../../../images/full/R.O.B..png"
// import Robin from "../../../images/full/Robin.png"
// import Rosalina from "../../../images/full/Rosalina & Luma.png"
// import Roy from "../../../images/full/Roy.png"
// import Ryu from "../../../images/full/Ryu.png"
// import Samus from "../../../images/full/Samus.png"
// import Sheik from "../../../images/full/Sheik.png"
// import Shulk from "../../../images/full/Shulk.png"
// import Sonic from "../../../images/full/Sonic.png"
// import ToonLink from "../../../images/full/Toon Link.png"
// import Villager from "../../../images/full/Villager.png"
// import Wario from "../../../images/full/Wario.png"
// import WiiFitTrainer from "../../../images/full/Wii Fit Trainer.png"
// import Yoshi from "../../../images/full/Yoshi.png"
// import Zelda from "../../../images/full/Zelda.png"
// import ZeroSuitSamus from "../../../images/full/Zero Suit Samus.png"
const images = require.context('../../../images/full', true);

export default class CharacterPage extends Component {

  render() {
    let character = this.props.location.pathname.split('/')[1];
    let picture = images(`./${character}.png`)
    console.log(this.props)

    return (
      <React.Fragment>
        <h1>{character}</h1>
        <img src={picture} />
        <h1>Picture</h1>
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
