import React from 'react';
import './Service.css';
import Email from '@iconscout/react-unicons/icons/uil-envelope';
import Calling from '@iconscout/react-unicons/icons/uil-calling';


function Service() {
  return (
    <div className="s-wrapper">
      <div className="s-heading">
        <div className="s-title">Request a callback</div>
        <div className="s-para">We are always their to help you. If you can't manage to go out due to any reason. Just request a callback and our technician will visit your home soon.</div>
      </div>

      <div className="contact-details">
        <div className="mail">
          <a href="mailto:cellfixxx24@gmail.com"><span className='calling'><Email/></span>cellfixxx24@gmail.com</a>
        </div>
        <div className="phone">
          <a href="tel:7566772608"><span className='calling'><Calling/></span>Call Now!</a>
        </div>
      </div>
    </div>

  )
}

export default Service