import React from 'react'
import {Link} from 'react-router-dom'
import {ConnectLeaderButton, IframeGoogleMap} from './ConnecctLeaderElement'

export default function ConnectLeader() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <h3 className="text-center text-info">Join Leaders</h3>
                        <p className="text-center">Club activities, social events, and volunteer projects offer networking opportunities that build personal and professional connections. And Rotarians can extend those networks by visiting other clubs around the globe.</p>
                        <Link to='/'> <ConnectLeaderButton className="text-primary border-primary bg-white text-center m-3">Learn More</ConnectLeaderButton></Link> 
                       
                    </div>
                    <div className="col-sm-6"><IframeGoogleMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30712146.358150188!2d64.39641331378641!3d20.006781121727006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sng!4v1610293397146!5m2!1sen!2sng" width="360" height="370" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></IframeGoogleMap></div>
                </div>
            </div>
        </div>
    )
}
