
import React, {useState} from 'react'
import Sidebar from '../components/sidebar/Index'
import Navbar from '../components/Navbar/Index'
import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection/Index'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/DataInfo'
import Services from '../components/Services/Index'
import Footer from '../components/Footer/Index'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen = {isOpen} toggle= {toggle}/>
          <Navbar toggle={toggle} />  
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree }/>
          <Services/>
          <Footer/>
        </>
    )
}

export default Home
