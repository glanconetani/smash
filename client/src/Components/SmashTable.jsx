import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Bayonetta from "../../../images/thumbnails/Bayonetta.png"
import BowserJr from "../../../images/thumbnails/BowserJr.png"
import Bowser from "../../../images/thumbnails/Bowser.png"
import CaptainFalcon from "../../../images/thumbnails/CaptainFalcon.png"
import Charizard from "../../../images/thumbnails/Charizard.png"
import Cloud from "../../../images/thumbnails/Cloud.png"
import Corrin from "../../../images/thumbnails/Corrin.png"
// import Daisy from "../../../images/thumbnails/Daisy.png"
import DarkPit from "../../../images/thumbnails/DarkPit.png"
import DonkeyKong from "../../../images/thumbnails/DonkeyKong.png"
import DiddyKong from "../../../images/thumbnails/DiddyKong.png"
import DrMario from "../../../images/thumbnails/Dr.Mario.png"
import DuckHunt from "../../../images/thumbnails/DuckHunt.png"
import Falco from "../../../images/thumbnails/Falco.png"
import Fox from "../../../images/thumbnails/Fox.png"
import GameWatch from "../../../images/thumbnails/Game&Watch.png"
import Ganondorf from "../../../images/thumbnails/Ganondorf.png"
import Greninja from "../../../images/thumbnails/Greninja.png"
import Ike from "../../../images/thumbnails/Ike.png"
import Jigglypuff from "../../../images/thumbnails/Jigglypuff.png"
import KingDedede from "../../../images/thumbnails/KingDedede.png"
import Kirby from "../../../images/thumbnails/Kirby.png"
import LinkChar from "../../../images/thumbnails/Link.png"
import LittleMac from "../../../images/thumbnails/LittleMac.png"
import Lucario from "../../../images/thumbnails/Lucario.png"
import Lucas from "../../../images/thumbnails/Lucas.png"
import Lucina from "../../../images/thumbnails/Lucina.png"
import Luigi from "../../../images/thumbnails/Luigi.png"
import Mario from "../../../images/thumbnails/Mario.png"
import Marth from "../../../images/thumbnails/Marth.png"
import MegaMan from "../../../images/thumbnails/MegaMan.png"
import MetaKnight from "../../../images/thumbnails/MetaKnight.png"
import MewTwo from "../../../images/thumbnails/Mewtwo.png"
import MiiBrawler from "../../../images/thumbnails/MiiBrawler.png"
import MiiGunner from "../../../images/thumbnails/MiiGunner.png"
import MiiSwordfighter from "../../../images/thumbnails/MiiSwordfighter.png"
import Ness from "../../../images/thumbnails/Ness.png"
import Olimar from "../../../images/thumbnails/Olimar.png"
import PACMAN from "../../../images/thumbnails/PAC-MAN.png"
import Palutena from "../../../images/thumbnails/Palutena.png"
import Peach from "../../../images/thumbnails/Peach.png"
import Pikachu from "../../../images/thumbnails/Pikachu.png"
import Pit from "../../../images/thumbnails/Pit.png"
import ROB from "../../../images/thumbnails/R.O.B..png"
import Robin from "../../../images/thumbnails/Robin.png"
import Rosalina from "../../../images/thumbnails/Rosalina&Luma.png"
import Roy from "../../../images/thumbnails/Roy.png"
import Ryu from "../../../images/thumbnails/Ryu.png"
import Samus from "../../../images/thumbnails/Samus.png"
import Sheik from "../../../images/thumbnails/Sheik.png"
import Shulk from "../../../images/thumbnails/Shulk.png"
import Sonic from "../../../images/thumbnails/Sonic.png"
import ToonLink from "../../../images/thumbnails/ToonLink.png"
import Villager from "../../../images/thumbnails/Villager.png"
import Wario from "../../../images/thumbnails/Wario.png"
import WiiFitTrainer from "../../../images/thumbnails/WiiFitTrainer.png"
import Yoshi from "../../../images/thumbnails/Yoshi.png"
import Zelda from "../../../images/thumbnails/Zelda.png"
import ZeroSuitSamus from "../../../images/thumbnails/ZeroSuitSamus.png"
import { IncomingMessage } from 'http';
import styled from 'styled-components';

const Img = styled.img`width: 100px;`



class SmashTable extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td> <Link to='/characters/Mario'><Img src={Mario} /></Link> </td>
                        <td> <Link to='/characters/DonkeyKong'><Img src={DonkeyKong} /></Link> </td>
                        <td> <Link to='/characters/Link'><Img src={LinkChar} /></Link> </td>
                        <td> <Link to='/characters/Samus'><Img src={Samus} /></Link></td>
                        {/* <td><Link to='/characters/DarkSamus'><Img src={DarkSamus} /></Link> </td> */}
                        <td> <Link to='/characters/Yoshi'><Img src={Yoshi} /></Link> </td>
                        <td><Link to='/characters/Kirby'><Img src={Kirby} /> </Link></td>
                        <td><Link to='/characters/Fox'><Img src={Fox} /></Link> </td>
                        <td><Link to='/characters/Pikachu'><Img src={Pikachu} /></Link> </td>
                        <td><Link to='/characters/Luigi'><Img src={Luigi} /></Link></td>
                        <td><Link to='/characters/Ness'><Img src={Ness} /> </Link></td>
                        <td><Link to='/characters/CaptainFalcon'><Img src={CaptainFalcon} /></Link> </td>
                        <td><Link to='/characters/Jigglypuff'><Img src={Jigglypuff} /> </Link></td>
                    </tr>
                    <tr>
                        <td> <Link to='/characters/Peach'><Img src={Peach} /></Link> </td>
                        {/* <td> <Link to='/characters/Daisy'><Img src={Daisy} /> </Link></td> */}
                        <td> <Link to='/characters/Bowser'><Img src={Bowser} /></Link> </td>
                        {/* <td> <Link to='/characters/IceClimbers'><Img src={IceClimbers} /> </Link></td> */}
                        <td> <Link to='/characters/Sheik'><Img src={Sheik} /></Link> </td>
                        <td> <Link to='/characters/Zelda'><Img src={Zelda} /> </Link></td>
                        <td> <Link to='/characters/DrMario'><Img src={DrMario} /> </Link></td>
                        {/* <td><Link to='/characters/Pichu'><Img src={Pichu} /></Link> </td> */}
                        <td><Link to='/characters/Falco'><Img src={Falco} /></Link> </td>
                        <td><Link to='/characters/Marth'><Img src={Marth} /></Link> </td>
                        <td><Link to='/characters/Lucina'><Img src={Lucina} /></Link> </td>
                        {/* <td> <Link to='/characters/YoungLink'><Img src={YoungLink} /></Link> </td> */}
                        <td> <Link to='/characters/Ganondorf'><Img src={Ganondorf} /> </Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/characters/MewTwo'><Img src={MewTwo} /></Link> </td>
                        <td><Link to='/characters/Roy'><Img src={Roy} /></Link> </td>
                        {/* <td><Link to='/characters/Chrom'><Img src={Chrom} /></Link> </td> */}
                        <td><Link to='/characters/GameWatch'><Img src={GameWatch} /> </Link></td>
                        <td><Link to='/characters/MetaKnight'><Img src={MetaKnight} /></Link> </td>
                        <td><Link to='/characters/Pit'><Img src={Pit} /></Link> </td>
                        <td><Link to='/characters/DarkPit'><Img src={DarkPit} /> </Link></td>
                        <td><Link to='/characters/ZeroSuitSamus'><Img src={ZeroSuitSamus} /> </Link></td>
                        <td> <Link to='/characters/Wario'><Img src={Wario} /> </Link></td>
                        {/* <td><Link to='/characters/Snake'><Img src={Snake} /></Link> </td> */}
                        <td><Link to='/characters/Ike'><Img src={Ike} /></Link> </td>
                        {/* <td><Link to='/characters/PokemonTrainer'><Img src={PokemonTrainer} /></Link> </td> */}
                        <td> <Link to='/characters/DiddyKong'><Img src={DiddyKong} /> </Link></td>
                    </tr>
                    <tr>
                        <td><Link to='/characters/Lucas'><Img src={Lucas} /></Link> </td>
                        <td><Link to='/characters/Sonic'><Img src={Sonic} /></Link> </td>
                        <td><Link to='/characters/KingDedede'><Img src={Luigi} /></Link> </td>
                        <td><Link to='/characters/Olimar'><Img src={Olimar} /> </Link></td>
                        <td><Link to='/characters/Lucario'><Img src={Lucario} /></Link> </td>
                        <td><Link to='/characters/ROB'><Img src={ROB} /> </Link></td>
                        <td> <Link to='/characters/ToonLink'><Img src={ToonLink} /> </Link></td>
                        {/* <td><Link to='/characters/Wolf'><Img src={Wolf} /></Link> </td> */}
                        <td><Link to='/characters/Villager'><Img src={Villager} /></Link> </td>
                        <td><Link to='/characters/MegaMan'><Img src={MegaMan} /> </Link></td>
                        <td><Link to='/characters/WiiFitTrainer'><Img src={WiiFitTrainer} /></Link> </td>
                        <td> <Link to='/characters/Rosalina'><Img src={Rosalina} /> </Link></td>
                        <td><Link to='/characters/LittleMac'><Img src={LittleMac} /></Link> </td>
                    </tr>
                    <tr>
                        <td><Link to='/characters/Greninja'><Img src={Greninja} /></Link> </td>
                        <td> <Link to='/characters/MiiBrawler'><Img src={MiiBrawler} /> </Link></td>
                        <td><Link to='/characters/MiiSwordfighter'><Img src={MiiSwordfighter} /></Link> </td>
                        <td><Link to='/characters/MiiGunner'><Img src={MiiGunner} /></Link> </td>
                        <td><Link to='/characters/Palutena'><Img src={Palutena} /></Link> </td>
                        <td><Link to='/characters/PACMAN'><Img src={PACMAN} /> </Link></td>
                        <td><Link to='/characters/Robin'><Img src={Robin} /> </Link></td>
                        <td><Link to='/characters/Shulk'><Img src={Shulk} /></Link> </td>
                        <td> <Link to='/characters/BowserJr'><Img src={BowserJr} /></Link></td>
                        <td><Link to='/characters/DuckHunt'><Img src={DuckHunt} /></Link> </td>
                        <td><Link to='/characters/Ryu'><Img src={Ryu} /></Link> </td>
                        {/* <td><Link to='/characters/Ken'><Img src={Ken} /></Link> </td> */}
                        <td><Link to='/characters/Cloud'><Img src={Cloud} /> </Link></td>
                        <td><Link to='/characters/Corrin'><Img src={Corrin} /> </Link></td>
                        <td><Link to='/characters/Bayonetta'><Img src={Bayonetta} /> </Link></td>
                        {/* <td><Link to='/characters/Inkling'><Img src={Inkling} /></Link> </td> */}
                    </tr>
                    <tr>
                        {/* <td><Link to='/characters/Ridley'><Img src={Ridley} /> </Link></td> */}
                        {/* <td><Link to='/characters/Simon'><Img src={Simon} /> </Link></td> */}
                        {/* <td><Link to='/characters/Richter'><Img src={Richter} /> </Link></td> */}
                        {/* <td> <Link to='/characters/KingKrool'><Img src={KingKrool} /></Link> </td> */}
                        {/* <td> <Link to='/characters/Isabelle'><Img src={Isabelle} /></Link> </td> */}
                        {/* <td> <Link to='/characters/Incineroar'><Img src={Incineroar} /></Link> </td> */}
                    </tr>
                </tbody>
            </table >);
    }
}

export default SmashTable;