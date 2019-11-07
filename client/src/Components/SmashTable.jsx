import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"
// import marioPic from "../../../images/thumbnails/Mario.png"


class SmashTable extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/Mario'><img src={marioPic} alt="mario" /></Link>
                        </td>
                        <td>
                            <Link to='/Donkey_Kong'>Donkey_Kong</Link></td>
                        <td>
                            <Link to='/Link'>Link</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Kirby'>Kirby</Link></td>
                        <td>
                            <Link to='/Fox'>Fox</Link></td>
                        <td>
                            <Link to='/Pikachu'>Pikachu</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Luigi'>Luigi</Link></td>
                        <td>
                            <Link to='/Ness'>Ness</Link></td>
                        <td>
                            <Link to='/Captain_Falcon'>Captain_Falcon</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Jigglypuff'>Jigglypuff</Link></td>
                        <td>
                            <Link to='/Peach'>Peach</Link></td>
                        <td>
                            <Link to='/Daisy'>Daisy</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Zelda'>Zelda</Link></td>
                        <td>
                            <Link to='/Dr._Mario'>Dr._Mario</Link></td>
                        <td>
                            <Link to='/Pichu'>Pichu</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Falco'>Falco</Link></td>
                        <td>
                            <Link to='/Marth'>Marth</Link></td>
                        <td>
                            <Link to='/Lucina'>Lucina</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to='/Zero_Suit_Samus'>Zero_Suit_Samus</Link></td>
                        <td>
                            <Link to='/Wario'>Wario</Link></td>
                        <td>
                            <Link to='/Snake'>Snake</Link></td>
                    </tr>
                </tbody>
            </table>);
    }
}

export default SmashTable;