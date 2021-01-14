import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper,SidebarRoute, SideBtnWrap, SidebarMenu } from './SidebarElement';

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/about' onClick={toggle} >About</SidebarLink>
          <SidebarLink to='/formember' onClick={toggle}>For Member</SidebarLink>
          <SidebarLink to='/getinvolved' onClick={toggle}>Get Involved</SidebarLink>
          <SidebarLink to='/newsandfeature' onClick={toggle}>News and Feature</SidebarLink>
          <SidebarLink to='/ourcause' onClick={toggle}>Our Cause</SidebarLink>
          <SidebarLink to='/ourprograms' onClick={toggle}>Our Programs</SidebarLink>
      
        </SidebarMenu>
       
        <SideBtnWrap>
            <SidebarRoute to ='/signin' onClick={toggle}>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
 
export default Sidebar;
