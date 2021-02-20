import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as RLink } from "react-router-dom";
import { Link as SLink } from "react-scroll";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100% ;
height: 100%;
background: linear-gradient(90deg, rgb(110,94,254)0%, rgba(73,63,252,1)100%);
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
// whether the side bar is there or not
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
// top: 0;
`;

export const CloseIcon = styled(FaTimes)`
color: white;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline:none;
`;

export const SidebarWrap = styled.div`
color: white;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-yemplate-colums: 1fr;
grid-template-rows: repeat(6,80px);

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,60px);
}
`;

export const SidebarLink = styled(SLink)`
display:flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: white;
cursor: pointer;

&:hover{
    color: lightblue;
    transition: 0.2s ease-in-out;
}
`;

export const SideButtonWrap = styled.div`
display: flex;
justify-content: center;
`;

export const SideRoute = styled(RLink)`
border-radius: 50px;
background:  rgb(38, 190, 100);
white-white: nowrap;
padding: 16px 64px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover {
    background: rgb(38, 224, 119);
    color: white;
    transition: 0.2s ease-in-out;
}
`;