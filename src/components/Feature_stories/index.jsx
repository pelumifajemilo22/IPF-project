import React from 'react'
import story1 from './FeatureImage/story 1.jpeg'
import story2 from './FeatureImage/story 2.jpeg'
import story3 from './FeatureImage/story 3.jpeg'
import {Link} from 'react-router-dom'

import {FeatureContainer, FeatureH1, FeatureCard, FeatureWrapper, FeatureImage,FeatureButton } from './FeatureElement.jsx'
const FeatureStory = () => {
    return (
        <FeatureContainer id="Feature">
            <FeatureH1>Our Stories</FeatureH1>
            <FeatureWrapper>
                <FeatureCard>
                    <FeatureImage src={story1}/>
                
                </FeatureCard>
             
                <FeatureCard>
                    <FeatureImage src={story2}/>
                 
                </FeatureCard>
                <FeatureCard>
                    <FeatureImage src={story3}/>
                    <Link to = "/">  <FeatureButton>view more stories</FeatureButton></Link>
                
                </FeatureCard>
               
            </FeatureWrapper>
        </FeatureContainer>
    )
}

export default FeatureStory