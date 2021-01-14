import React from 'react'
// import Sidebar from '../sidebar/Index'
// import Header from '../Header/Index'
// import Navbar from '../navBar/Index'
import NavIndex from '../NavBar2/Index'
import HeroSection from '../HeroSection/Index'
import InfoSection from '../InfoSection/Index'
import { homeObjOne } from '../InfoSection/DataInfo'
import Services from '../Services/Index'
import FeatureStory from '../Feature_stories/index'
// import ConnectLeader from '../ConnectLeader/index'
import SecondHeroSection from '../secondHeroSection/Index'
import Footer from '../Footer/Index'

const Home = () => {

//  /  const [isOpen, setIsOpen] = useState(false)
    

    // const toggle = () =>{
    //     setIsOpen(!isOpen)
    // }
    return (
        <>
{/*          
          <Sidebar isOpen = {isOpen} toggle= {toggle}/> */}
          {/* <Navbar toggle={toggle} />   */}
          <NavIndex/>
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <Services/>
          <FeatureStory/>
          {/* <ConnectLeader/> */}
          <SecondHeroSection/>
          <Footer/>
        </>
    )
}

export default Home
