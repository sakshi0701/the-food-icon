import React from 'react';
import { FaBars } from "react-icons/fa";
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {

    // scrolls up when we click the logo or name
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>The Food Icon</NavLogo>
                        <MobileIcon onClick = {toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='food'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Food</NavLinks>
                            </NavItem>
                        </NavMenu>                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

