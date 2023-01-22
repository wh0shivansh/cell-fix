import React from 'react';
import './Navbar.css';
import Logo from '../../img/logo.jpg';
import Call from '@iconscout/react-unicons/icons/uil-calling';
import Location from '@iconscout/react-unicons/icons/uil-location-pin-alt';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Email from '@iconscout/react-unicons/icons/uil-envelope';

function Navbar() {

    const [isActive,setActive] = useState(false);

    const handleClick=()=>{
        const hamburger = document.getElementById('hamburger');
        const Navbar = document.getElementById('navbar');
        setActive(!isActive);

        if(isActive){
            hamburger.classList.remove("hamburger-open");
            hamburger.classList.add("hamburger-close");
            Navbar.classList.add("nav-open");
            Navbar.classList.remove("nav-close");
        }
        else{
            hamburger.classList.remove("hamburger-close");
            hamburger.classList.add("hamburger-open");
            Navbar.classList.add("nav-close");
            Navbar.classList.remove("nav-open");
        }

    }

    const navClick=()=>{
        window.scrollTo(0,0);
        const hamburger = document.getElementById('hamburger');
        const Navbar = document.getElementById('navbar');
        hamburger.classList.remove("hamburger-close");
        hamburger.classList.add("hamburger-open");  
        Navbar.classList.add("nav-close");
        Navbar.classList.remove("nav-open"); 
    }

  return (
    <div className="navbar">
        <div className="n-left">
            <div className="logo">
                <div className='logo-img'>
                    <img src={Logo} alt="" />
                </div>
                <span>Cell</span>
                <span>Fix</span>
            </div>
        </div>
        <div className="n-right">
            <ul>
                <li onClick={()=>{window.scrollTo(0,0);}}><Link className='li_home' to={"/"}>Home</Link></li>
                <li onClick={()=>{window.scrollTo(0,0);}}><Link to={"/about"}>About</Link></li>
                <li onClick={()=>{window.scrollTo(0,0);}}><Link to={"/offers"}>Offers</Link></li>
                <li><a href='tel:7566772608'><span className='calling'><Call/></span>Call Now</a></li>
                <li><a href=""><span className='calling'><Location/></span>Jabalpur</a></li>
            </ul>
        </div>

        <div className="hamburger hamburger-open" id='hamburger' onClick={handleClick} >
            <div></div>
            <div></div>
        </div>

        <div id="navbar" className='nav-close'>
            <div className="nav-items">
                <div className="home-i i">  <Link onClick={navClick} to={"/"}>Home</Link></div>
                <div className="about-i i"> <Link onClick={navClick} to={"/about"}>About</Link></div>
                <div className="offers-i i"><Link onClick={navClick} to={"/offers"}>Offers</Link></div>
                <div className="mail-i i"><a href='mailto:cellfixxx24@gmail.com'><span className='calling'><Email/></span>cellfixxx24@gmail.com</a></div>
                <div className="call-i i"><a href='tel:7566772608'><span className='calling'><Call/></span>Call Now</a></div>
                <div className="location-i i"><a><span className='calling'><Location/></span>Jabalpur</a></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar