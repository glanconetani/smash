import React, { Component } from 'react';
import styled from 'styled-components';

export const NavBar = styled.div`
background-color: #669;

`;
export const Content = styled.div`
    background-color: #111;

`;

class NavigationBar extends Component {

    render() {
        return (
            <div>
                <NavBar>
                    Search Bar      
                    About Us
                </NavBar>

            </div>
        );
    }
}

export default NavigationBar;