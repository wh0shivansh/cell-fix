import React, { useEffect } from 'react';
import Promise from '../Promises/Promise';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(()=>{
    window.location.reload()
  })
  return (
    <div className='about-page'>
      <div className="nav-replace"></div>
        <Promise/>
    </div>
  )
}

export default AboutPage