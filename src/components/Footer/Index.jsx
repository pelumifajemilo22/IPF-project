import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterLink,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElement';


const Footer = () => {
    const toggleFooter = () => {
        scroll.scrollToTop();
      };
    
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>About Us </FooterLinkTitle>

          <FooterLink to='/'>General Information</FooterLink>
          <FooterLink to='/'>Testimonial</FooterLink>
          <FooterLink to='/'>Privacy</FooterLink>
          <FooterLink to='/'>Terms of Services</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
          <FooterLinkTitle>Contact Us </FooterLinkTitle>

          <FooterLink to='/'>General Secretary</FooterLink>
          <FooterLink to='/'>Treasurer</FooterLink>
          <FooterLink to='/'>Membership</FooterLink>
          </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>

          <FooterLinkItems>
          <FooterLinkTitle>Social Media </FooterLinkTitle>

          <FooterLink to='/'>Instagram</FooterLink>
          <FooterLink to='/'>Facebook</FooterLink>
          <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
          </FooterLinksWrapper>
          </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleFooter}>IPF</SocialLogo>
            <WebsiteRights>
              IPF {new Date().getFullYear()} All rights reserved. 
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
