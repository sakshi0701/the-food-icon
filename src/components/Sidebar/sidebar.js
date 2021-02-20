import React from 'react';
import { SidebarContainer, CloseIcon, Icon, SidebarWrap, SidebarMenu, SidebarLink, SideButtonWrap, SideRoute } from "./sidestyle";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrap>
                <SidebarMenu>
                </SidebarMenu>
           </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
