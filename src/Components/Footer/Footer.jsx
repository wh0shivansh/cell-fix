import React from 'react';
import './Footer.css';
import Logo from '../../img/logo.jpg';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';
import Email from '@iconscout/react-unicons/icons/uil-envelope';
import { Link, useNavigate } from 'react-router-dom';
import Calling from '@iconscout/react-unicons/icons/uil-calling';

function Footer() {

    const navigate = useNavigate();

  return (
    <div className="footer">
        <div className="f-top">


            <div className="f-left">
                <div className="f-logo">
                    <div className='footer-logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <span>Cell</span>
                    <span>Fix</span>
                </div>
                <div className="f-mail">
                <a href='mailto:cellfixxx24@gmail.com'><span className='calling'><Email/></span>cellfix@gmail.com</a>
                </div>
                <div className="f-phone">
                    <a href='tel:7566772608'><span className='calling'><Calling/></span>Call Now</a>
                </div>
            </div>


            <div className="f-center">
                <ul>
                    <li onClick={()=> { window.scrollTo(0, 0);}}><Link to={'/'}>Home</Link></li>
                    <li onClick={()=> { window.scrollTo(0, 0);}}><Link to={'/about'}>About</Link></li>
                    <li onClick={()=> { window.scrollTo(0, 0);}}><Link to={'/offers'}>offers</Link></li>
                </ul>
            </div>


            <div className="f-right">
                <div className="social-links">
                    Connect Socially
                </div>
                <div className="all-icons">
                    <span className="insta social-icons-footer">
                        <UilInstagram></UilInstagram>
                    </span>                    
                    <span className="fb social-icons-footer">
                        <Facebook></Facebook>
                    </span>                    
                    <span className="whatsapp social-icons-footer">
                        <Whatsapp></Whatsapp>
                    </span>                    
                    <span className="email social-icons-footer">
                        <Email></Email>
                    </span>
                </div>

            </div>
        </div>
        <div className="f-bottom">
            <span>@ 2022 CellFix, All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer