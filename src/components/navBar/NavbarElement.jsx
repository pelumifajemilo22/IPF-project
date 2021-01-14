import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#fff': '#fff')};
height: 80px;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top:0;
z-index: 10;

@media screen and (max-width: 480px){
    background: ${({scrollNav}) => (scrollNav ? '#000': '#000')};
    margin-top: 0px
}

@media screen and (max-width: 960px){
    transition: 0.8s all ease
}
`;

export const NavbarContainer = styled.div `

display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
border: 1px solid #fff
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li`

height: 80px;`;

export const NavLinks = styled(LinkR)`
color: rgb(5, 70, 80);
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 20px;
font-weight: bold;

&:hover{
    text-decoration: none;
}

&.active {
    border-bottom: 3px solid  rgb(5, 70, 80);
    text-decoration: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;

}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: rgb(5, 70, 80)
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color: rgb(5, 70, 80);
        
    }
}
`