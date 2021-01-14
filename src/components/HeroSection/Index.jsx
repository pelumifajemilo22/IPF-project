import React from 'react';
import Video from '../../Video/first.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
 
} from './HeroElement';

const HeroSection = () => {
  

 
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>People of Action</HeroH1>
        <HeroP>
        Rotary is where neighbors, friends, and problem-solvers share ideas, join leaders, and take action to create lasting change.
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
           Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
