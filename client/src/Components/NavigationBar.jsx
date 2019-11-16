import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logoimg from '../../../images/SmashLogo.jpg';

import { Navbar, Nav } from 'react-bootstrap';

export const NavBar = styled.div`
background-color: #669;

`;
export const Content = styled.div`
    background-color: #111;

`;

class NavigationBar extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `newPath`;
        //this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">SmashDB</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/'>Characters</Nav.Link>
                        <Nav.Link href='/AboutUs'>About Us</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
