import React, { Component } from 'react'
import Header from '../Header/Index'
import Navbar from '../navBar/Index'
import HeroSection from '../AboutPageFolder/HeroSection/Index'
import FirstSection from '../AboutPageFolder/FirstSection/Index'

export default class About extends Component {
    render() {
        return (
           <>
           <Header/>
           <Navbar/>
           <HeroSection/>
           <FirstSection/>
           </>
        )
    }
}
