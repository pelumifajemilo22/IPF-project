import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {

  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  

} from './InfoELement';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
   img
}) => {
    console.log(img)
  return (
    <>
   
    
    <InfoContainer lightBg={lightBg} id='signup'>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              {/* <BtnWrap>
                  <button className="btn btn-success "><Link to="/signup" className="text-white">{buttonLabel}</Link></button>
              </BtnWrap> */}
            </TextWrapper>
          </Column1>
          <Column2>
          <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../cloth1.jpeg" alt="loading" />
                </div>
                <div>
                    <img src="../cloth2.jpeg" alt="loading"/>
                </div>
                <div>
                    <img src="../cloth4.jpeg" alt="loading"/>
                </div>
            </Carousel>
        </div>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
 
  </>
  );
};

export default InfoSection;
