import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Bayonetta from "../../../images/thumbnails/Bayonetta.png"
import BowserJr from "../../../images/thumbnails/Bowser Jr.png"
import Bowser from "../../../images/thumbnails/Bowser.png"
import CaptainFalcon from "../../../images/thumbnails/Captain Falcon.png"
import Charizard from "../../../images/thumbnails/Charizard.png"
import Cloud from "../../../images/thumbnails/Cloud.png"
import Corrin from "../../../images/thumbnails/Corrin.png"
// import Daisy from "../../../images/thumbnails/Daisy.png"
import DarkPit from "../../../images/thumbnails/Dark Pit.png"
import DonkeyKong from "../../../images/thumbnails/Donkey Kong.png"
import DiddyKong from "../../../images/thumbnails/Diddy Kong.png"
import DrMario from "../../../images/thumbnails/Dr. Mario.png"
import DuckHunt from "../../../images/thumbnails/Duck Hunt.png"
import Falco from "../../../images/thumbnails/Falco.png"
import Fox from "../../../images/thumbnails/Fox.png"
import GameWatch from "../../../images/thumbnails/Game & Watch.png"
import Ganondorf from "../../../images/thumbnails/Ganondorf.png"
import Greninja from "../../../images/thumbnails/Greninja.png"
import Ike from "../../../images/thumbnails/Ike.png"
import Jigglypuff from "../../../images/thumbnails/Jigglypuff.png"
import KingDedede from "../../../images/thumbnails/King Dedede.png"
import Kirby from "../../../images/thumbnails/Kirby.png"
import LinkChar from "../../../images/thumbnails/Link.png"
import LittleMac from "../../../images/thumbnails/Little Mac.png"
import Lucario from "../../../images/thumbnails/Lucario.png"
import Lucas from "../../../images/thumbnails/Lucas.png"
import Lucina from "../../../images/thumbnails/Lucina.png"
import Luigi from "../../../images/thumbnails/Luigi.png"
import Mario from "../../../images/thumbnails/Mario.png"
import Marth from "../../../images/thumbnails/Marth.png"
import MegaMan from "../../../images/thumbnails/Mega Man.png"
import MetaKnight from "../../../images/thumbnails/Meta Knight.png"
import MewTwo from "../../../images/thumbnails/Mewtwo.png"
import MiiBrawler from "../../../images/thumbnails/Mii Brawler.png"
import MiiGunner from "../../../images/thumbnails/Mii Gunner.png"
import MiiSwordfighter from "../../../images/thumbnails/Mii Swordfighter.png"
import Ness from "../../../images/thumbnails/Ness.png"
import Olimar from "../../../images/thumbnails/Olimar.png"
import PACMAN from "../../../images/thumbnails/PAC-MAN.png"
import Palutena from "../../../images/thumbnails/Palutena.png"
import Peach from "../../../images/thumbnails/Peach.png"
import Pikachu from "../../../images/thumbnails/Pikachu.png"
import Pit from "../../../images/thumbnails/Pit.png"
import ROB from "../../../images/thumbnails/R.O.B..png"
import Robin from "../../../images/thumbnails/Robin.png"
import Rosalina from "../../../images/thumbnails/Rosalina & Luma.png"
import Roy from "../../../images/thumbnails/Roy.png"
import Ryu from "../../../images/thumbnails/Ryu.png"
import Samus from "../../../images/thumbnails/Samus.png"
import Sheik from "../../../images/thumbnails/Sheik.png"
import Shulk from "../../../images/thumbnails/Shulk.png"
import Sonic from "../../../images/thumbnails/Sonic.png"
import ToonLink from "../../../images/thumbnails/Toon Link.png"
import Villager from "../../../images/thumbnails/Villager.png"
import Wario from "../../../images/thumbnails/Wario.png"
import WiiFitTrainer from "../../../images/thumbnails/Wii Fit Trainer.png"
import Yoshi from "../../../images/thumbnails/Yoshi.png"
import Zelda from "../../../images/thumbnails/Zelda.png"
import ZeroSuitSamus from "../../../images/thumbnails/ZeroSuitSamus.png"
import { IncomingMessage } from 'http';
import styled from 'styled-components';

const Img = styled.img`
width: 100px;
`



class SmashTable extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td> <Link to='/Mario'><Img src={Mario} /></Link> </td>
                        <td> <Link to='/DonkeyKong'><Img src={DonkeyKong} /></Link> </td>
                        <td> <Link to='/Link'><Img src={LinkChar} /></Link> </td>
                        <td> <Link to='/Samus'><Img src={Samus} /></Link></td>
                        {/* <td><Link to='/DarkSamus'><Img src={DarkSamus} /></Link> </td> */}
                        <td> <Link to='/Yoshi'><Img src={Yoshi} /></Link> </td>
                        <td><Link to='/Kirby'><Img src={Kirby} /> </Link></td>
                        <td><Link to='/Fox'><Img src={Fox} /></Link> </td>
                        <td><Link to='/Pikachu'><Img src={Pikachu} /></Link> </td>
                        <td><Link to='/Luigi'><Img src={Luigi} /></Link></td>
                        <td><Link to='/Ness'><Img src={Ness} /> </Link></td>
                        <td><Link to='/CaptainFalcon'><Img src={CaptainFalcon} /></Link> </td>
                        <td><Link to='/Jigglypuff'><Img src={Jigglypuff} /> </Link></td>
                    </tr>
                    <tr>
                        <td> <Link to='/Peach'><Img src={Peach} /></Link> </td>
                        {/* <td> <Link to='/Daisy'><Img src={Daisy} /> </Link></td> */}
                        <td> <Link to='/Bowser'><Img src={Bowser} /></Link> </td>
                        {/* <td> <Link to='/IceClimbers'><Img src={IceClimbers} /> </Link></td> */}
                        <td> <Link to='/Sheik'><Img src={Sheik} /></Link> </td>
                        <td> <Link to='/Zelda'><Img src={Zelda} /> </Link></td>
                        <td> <Link to='/DrMario'><Img src={DrMario} /> </Link></td>
                        {/* <td><Link to='/Pichu'><Img src={Pichu} /></Link> </td> */}
                        <td><Link to='/Falco'><Img src={Falco} /></Link> </td>
                        <td><Link to='/Marth'><Img src={Marth} /></Link> </td>
                        <td><Link to='/Lucina'><Img src={Lucina} /></Link> </td>
                        {/* <td> <Link to='/YoungLink'><Img src={YoungLink} /></Link> </td> */}
                        <td> <Link to='/Ganondorf'><Img src={Ganondorf} /> </Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/MewTwo'><Img src={MewTwo} /></Link> </td>
                        <td><Link to='/Roy'><Img src={Roy} /></Link> </td>
                        {/* <td><Link to='/Chrom'><Img src={Chrom} /></Link> </td> */}
                        <td><Link to='/GameWatch'><Img src={GameWatch} /> </Link></td>
                        <td><Link to='/MetaKnight'><Img src={MetaKnight} /></Link> </td>
                        <td><Link to='/Pit'><Img src={Pit} /></Link> </td>
                        <td><Link to='/DarkPit'><Img src={DarkPit} /> </Link></td>
                        <td><Link to='/ZeroSuitSamus'><Img src={ZeroSuitSamus} /> </Link></td>
                        <td> <Link to='/Wario'><Img src={Wario} /> </Link></td>
                        {/* <td><Link to='/Snake'><Img src={Snake} /></Link> </td> */}
                        <td><Link to='/Ike'><Img src={Ike} /></Link> </td>
                        {/* <td><Link to='/PokemonTrainer'><Img src={PokemonTrainer} /></Link> </td> */}
                        <td> <Link to='/DiddyKong'><Img src={DiddyKong} /> </Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/Lucas'><Img src={Lucas} /></Link> </td>
                        <td><Link to='/Sonic'><Img src={Sonic} /></Link> </td>
                        <td><Link to='/KingDedede'><Img src={Luigi} /></Link> </td>
                        <td><Link to='/Olimar'><Img src={Olimar} /> </Link></td>
                        <td><Link to='/Lucario'><Img src={Lucario} /></Link> </td>
                        <td><Link to='/ROB'><Img src={ROB} /> </Link></td>
                        <td> <Link to='/ToonLink'><Img src={ToonLink} /> </Link></td>
                        {/* <td><Link to='/Wolf'><Img src={Wolf} /></Link> </td> */}
                        <td><Link to='/Villager'><Img src={Villager} /></Link> </td>
                        <td><Link to='/MegaMan'><Img src={MegaMan} /> </Link></td>
                        <td><Link to='/WiiFitTrainer'><Img src={WiiFitTrainer} /></Link> </td>
                        <td> <Link to='/Rosalina'><Img src={Rosalina} /> </Link></td>
                        <td><Link to='/LittleMac'><Img src={LittleMac} /></Link> </td>
                    </tr>
                    <tr>
                        <td><Link to='/Greninja'><Img src={Greninja} /></Link> </td>
                        <td> <Link to='/MiiBrawler'><Img src={MiiBrawler} /> </Link></td>
                        <td><Link to='/MiiSwordfighter'><Img src={MiiSwordfighter} /></Link> </td>
                        <td><Link to='/MiiGunner'><Img src={MiiGunner} /></Link> </td>
                        <td><Link to='/Palutena'><Img src={Palutena} /></Link> </td>
                        <td><Link to='/PACMAN'><Img src={PACMAN} /> </Link></td>
                        <td><Link to='/Robin'><Img src={Robin} /> </Link></td>
                        <td><Link to='/Shulk'><Img src={Shulk} /></Link> </td>
                        <td> <Link to='/BowserJr'><Img src={BowserJr} /></Link></td>
                        <td><Link to='/DuckHunt'><Img src={DuckHunt} /></Link> </td>
                        <td><Link to='/Ryu'><Img src={Ryu} /></Link> </td>
                        {/* <td><Link to='/Ken'><Img src={Ken} /></Link> </td> */}
                        <td><Link to='/Cloud'><Img src={Cloud} /> </Link></td>
                        <td><Link to='/Corrin'><Img src={Corrin} /> </Link></td>
                        <td><Link to='/Bayonetta'><Img src={Bayonetta} /> </Link></td>
                        {/* <td><Link to='/Inkling'><Img src={Inkling} /></Link> </td> */}
                    </tr>
                    <tr>
                        {/* <td><Link to='/Ridley'><Img src={Ridley} /> </Link></td> */}
                        {/* <td><Link to='/Simon'><Img src={Simon} /> </Link></td> */}
                        {/* <td><Link to='/Richter'><Img src={Richter} /> </Link></td> */}
                        {/* <td> <Link to='/KingKrool'><Img src={KingKrool} /></Link> </td> */}
                        {/* <td> <Link to='/Isabelle'><Img src={Isabelle} /></Link> </td> */}
                        {/* <td> <Link to='/Incineroar'><Img src={Incineroar} /></Link> </td> */}
                    </tr>
                </tbody>
            </table >);
    }
}

export default SmashTable;