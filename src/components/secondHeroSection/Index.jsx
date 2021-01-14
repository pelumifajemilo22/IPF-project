import React from 'react';
import Video from '../../Video/second.mp4';
import {
    SecondHeroContainer,
    SecondHeroBg,
    SecondVideoBg,
    SecondHeroContent,
    SecondHeroH1,
    SecondHeroButton
  
} from './SeondHeroElement';

const SecondHeroSection = () => {

  return (
    <SecondHeroContainer id='home'>
      <SecondHeroBg>
        <SecondVideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </SecondHeroBg>
      <SecondHeroContent>
        <SecondHeroH1>Help us change lives locally and around the world</SecondHeroH1> 
        <SecondHeroButton>Get Involved</SecondHeroButton><br/>
        <SecondHeroButton>Donate</SecondHeroButton><br/>
        <SecondHeroButton>Join</SecondHeroButton>
       
      
      </SecondHeroContent>
    </SecondHeroContainer>
  );
};

export default SecondHeroSection;
