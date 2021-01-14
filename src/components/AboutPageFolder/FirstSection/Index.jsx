import React from 'react'
import {Link} from 'react-router-dom'
import {Paragraph, SecondParagraph} from './FirstSectionElement'

export default function FirstSection() {
    return (
       <div className="container-fluid">
           <div className="row">
               <div>
                   <Paragraph>Rotary is a global network of 1.2 million neighbors, friends, leaders, and paragraphroblem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities, and in ourselves.</Paragraph>
                   <SecondParagraph>Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to take action on sustainable projects. From literacy and peace to water and health, we are always working to better our world, and we stay committed to the end.</SecondParagraph>
                   <SecondParagraph className="mt-2 text-center ">Learn more about our <Link to="/">Structure</Link> and our foundation and our <Link to="/">Strategic Vision</Link></SecondParagraph>
               </div>

           </div>
       </div>
    )
}