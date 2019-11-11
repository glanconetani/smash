import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logoimg from '../../../images/SmashLogo.jpg';
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
        this.props.history.push(path);
      }
    render() {
        return (
            <div>
                <NavBar>
                <img src={logoimg} alt="Logo" />   
                <Link to='/AboutUs'>About Us</Link>
                <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                </NavBar>

            </div>
        );
    }
}

export default NavigationBar;