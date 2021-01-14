import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,


} from './NavbarElement';
const Navbar = ({ toggle }) => {
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
           <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='/about'
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/formember'
                >
                  For Member
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/getinvolved'
                >
                  Get Involved
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/newsandfeature'
                 
                >
                 News and Feature
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/getinvolved'
             
                >
                  Get Involved
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/ourcause'
                 
                >
                 Our Cause
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='/ourprograms'
                
                >
                  Our Programs
                </NavLinks>
              </NavItem>
            
             
            </NavMenu>
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
