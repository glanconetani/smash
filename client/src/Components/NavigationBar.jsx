import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logoimg from '../../../images/SmashLogo.jpg';

import {
  Navbar,
  Nav
} from 'react-bootstrap';

import { Dropdown, DropdownButton } from 'react-bootstrap';

export default class NavigationBar extends Component {
    constuctor() {

    }


    render() {

      let { characters } = this.props;

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">SmashDB</Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link href='/'>Characters</Nav.Link>
                        <Nav.Link href='/AboutUs'>About Us</Nav.Link>
                    </Nav>
                    <DropdownButton className="justify-content-end" title="Characters">
                        {
                          characters.map(character =>
                            <Dropdown.Item href={`/characters/${character.id}`} key={character.name}>
                              {character.name}
                            </Dropdown.Item>
                          )
                        }
                    </DropdownButton>
                </Navbar>
            </div>
        );
    }
}
