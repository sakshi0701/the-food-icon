import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import { Link as SLink } from "react-scroll";

export const Nav = styled.nav`
    background: linear-gradient(90deg, darkgreen, green);
    height: 80px;
    margin-top: -80px; 
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.5s all ease; 
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    border-bottom: 3px solid rgb(9, 73, 0);
`;

export const NavLogo = styled(RLink)`
    color: white;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    font-size: 40px;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Lobster', cursive;

    @media screen and (max-width: 280px) {
        font-size: 35px;
    } 

    &:hover {
        text-decoration: none;
        color: white;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(SLink)`   
    color: white;
    margin-top: 3px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        text-decoration: none;
        color: white;
        font-size: 17px;
        transition: .5s;
    } 
`;

// export const NavButton = styled.nav`
// display: flex;
// align-items: center;

// @media screen and (max-width: 760px) {
//     display: none;
// }
// `;

// export const NavButtonLink = styled(RLink)`
// border-radius: 50px;
// color: white;
// background:  rgb(38, 190, 100);
// white-space:nowrap;
// padding: 10px 22px;
// font-size: 16px;
// outline: none;
// border: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none;

// &:hover {
//     transition: all 0.2s ease-in-out;
//     background: rgb(38, 224, 119);
// }
// `;