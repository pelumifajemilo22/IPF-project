import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/pages/About'
import ForMember from './components/pages/ForMember'
import GetInvolved from './components/pages/GetInvolved'
import Home from './components/pages/Home'
import NewsandFeature from './components/pages/NewsandFeature'
import OurCause from './components/pages/OurCause'
import OurPrograms from './components/pages/OurPrograms'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <Router>
    <Switch>
     <Route path ='/' component = {Home} exact/>
     <Route path ='/about' component = {About} exact/>
     <Route path ='/formember' component = {ForMember} exact/>
     <Route path ='/getinvolved' component = {GetInvolved} exact/>
     <Route path ='/newsandfeature' component = {NewsandFeature} exact/>
     <Route path ='/ourcause' component = {OurCause} exact/>
     <Route path ='/ourprograms' component = {OurPrograms} exact/>
     <Route path ='/signin' component = {SignIn} exact/> 
     <Route path ='/signup' component = {SignUp} exact/> 
   
    </Switch>
    </Router> 
   
  );
}

export default App;   
