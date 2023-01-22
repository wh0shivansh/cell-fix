import React from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import SelectOS from './SelectOS';
import Main from '../../img/main.png';
import Works from '../Works/Works';
import Promise from '../Promises/Promise';
import Testimonials from '../Testimonials/Testimonials';
import Service from '../Service/Service';


function Intro() {
  const navigate = useNavigate();

  return (
    <div className="intro-wrapper">
    <div className="intro">
      <div className="i-left">
        <div className="i-text">
          <span>With Warranty & Lowest Price</span>
          <span>We repair at your doorstep</span>
          <span>Android | Windows | Ios</span>
          <span>PROFESSIONAL TECHNICIANS</span>
          <span>Most trusted device repair service in Jabalpur</span>
        </div>

        <div className='intro-img'>
            <img src={Main} alt="" />
        </div>
      </div>
      <div className="i-right">
        <SelectOS />

      </div>
    </div>
    <Works/>
    <Promise/>
    <Testimonials/>
    <Service/>
</div>



  )
}

export default Intro