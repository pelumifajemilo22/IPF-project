import React from 'react'
import service1 from './images/service 1.jpeg'
import service2 from './images/service 2.jpeg'
import service3 from './images/service 3.jpeg'
import service4 from './images/service 4.jpeg'


import {ServicesContainer, ServicesH1, ServicesH2, ServicesCard, ServicesWrapper, ServicesImage, ServicesP } from './ServicesElement'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Cause</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesImage src={service1}/>
                    <ServicesH2>Helping the Helpless</ServicesH2>
                    <ServicesP>We help those that less privilege finacially.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImage src={service2}/>
                    <ServicesH2>Providing Loan</ServicesH2>
                    <ServicesP>IPF provides loans for its members to achieve their goals</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImage src={service3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns  5% cash back</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImage src={service4}/>
                    <ServicesH2>Small Scale business</ServicesH2>
                    <ServicesP>IPF support small to medium scale businesses</ServicesP>
                </ServicesCard>
               
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
