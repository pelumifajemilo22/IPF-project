import React from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

export default function NavIndex() {
  return (
    <div className='header'>
      <div className='divContainer'>
        <input type="checkbox" name ="" id="check"/>
        {/* <div className='logo-container'>
          <h3 className='logo text-white'>
            IPF <span className='text-white'>Name</span>
          </h3>
        </div> */}
        <div className='nav-btn'>

          <div className='nav-links'>
            <ul>
              <li className='nav-link'>
                <a href='#'>About IPF
                <FaCaretDown className='caret' />
                </a>
                <div className='dropdown'>
                  <ul>
                    <li className='dropdown-link'>
                      <a href='#'>About us</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>History</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Our Aim and Purpose</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Our Vision</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Our Constitution</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Our Patrons</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Our Past Presidents</a>
                    </li>
                 
                    <li className='dropdown-link'>
                      <a href='#'>
                        Our Team <FaCaretRight className='caret' />
                      </a>
                      <div className='dropdown second'>
                        <ul>
                          <li className='dropdown-link'>
                            <a href='#'>President</a>
                          </li>
                          <li className='dropdown-link'>
                            <a href='#'>Vice President</a>
                          </li>
                          <li className='dropdown-link'>
                            <a href='#'>General Secretary </a>
                          </li>
                          <li className='dropdown-link'>
                            <a href='#'>Executive Member </a>
                          </li>
                       
                          <div className='arrow'></div>
                        </ul>
                      </div>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Key Partners</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Contact Us</a>
                    </li>
                    <div className='arrow'></div>
                  </ul>
                </div>
              </li>
              <li className='nav-link'>
                <a href='#'>
                  Events
                  <FaCaretDown className='caret' />
                </a>
                <div className='dropdown'>
                  <ul>
                    <li className='dropdown-link'>
                      <a href='#'>Upcoming Events</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Past Events</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>
                        Photo Gallery 
                      </a>
                    
                    </li>
                   
                    <div className='arrow'></div>
                  </ul>
                </div>
              </li>
              <li className='nav-link'>
                <a href='#'>
                  Our Cause
                  <FaCaretDown className='caret' />
                </a>
                <div className='dropdown'>
                  <ul>
                    <li className='dropdown-link'>
                      <a href='#'>Indo Eye Care</a>
                    </li>
                                      
                    <div className='arrow'></div>
                  </ul>
                </div>
              </li>
              <li className='nav-link'>
                <a href='#'>
                  News and Feature
                  <FaCaretDown className='caret' />
                </a>
                <div className='dropdown'>
                  <ul>
                    <li className='dropdown-link'>
                      <a href='#'>Press releases</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Link to different websites</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>
                        Social Media <FaCaretRight className='caret' />
                      </a>
                      <div className='dropdown second'>
                        <ul>
                          <li className='dropdown-link'>
                            <a href='#'>Facebookk</a>
                          </li>
                          <li className='dropdown-link'>
                            <a href='#'>Instagram</a>
                          </li>
                          <li className='dropdown-link'>
                            <a href='#'>Twitter </a>
                          </li>
                        
                          <div className='arrow'></div>
                        </ul>
                      </div>
                    </li>
                   
                    <div className='arrow'></div>
                  </ul>
                </div>
              </li>
              <li className='nav-link'>
                <a href='#'>Members <FaCaretDown className='caret' /></a>
                <div className='dropdown'>
                  <ul>
                    <li className='dropdown-link'>
                      <a href='#'>Upcoming Events</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>Past Events</a>
                    </li>
                    <li className='dropdown-link'>
                      <a href='#'>
                        Photo Gallery 
                      </a>
                    
                    </li>
                   
                    <div className='arrow'></div>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className='log-sign'>
            <a href='#' className='btn transparent'>
              Sign in
            </a>
            <a href='#' className='btn solid'>
              Sign up
            </a>
          </div>
          
          
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu">
            <div></div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
