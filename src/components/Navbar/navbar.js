import React from 'react';
import { Nav,NavbarContainer,NavLogo, NavMenu, NavItem, NavLinks } from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {

    // scrolls up when we click the logo or name
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const toBottom = () => {
        scroll.scrollToBottom();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>The Food Icon</NavLogo> 
                    <NavMenu>
                        <NavItem>
                            <NavLinks onClick={toBottom}>Your Profile</NavLinks>
                        </NavItem>
                    </NavMenu>                  
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

