import React from 'react'
import './Testimonials.css'
import profilePic1 from "../../img/profile3.jpg"
import profilePic2 from "../../img/profile4.jpg"
import profilePic3 from "../../img/profile5.jpg"
import profilePic4 from "../../img/profile6.jpg"
import { useNavigate } from 'react-router-dom'
import Pen from '@iconscout/react-unicons/icons/uil-pen'
import Feedback1 from '../../img/feedback1.jpg';

const Testimonials = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/review");
  }

  return (
    <div className="t-wrapper" id='Testinomials'>

      <div className="t-heading">
        <span>Client always get</span>
        <span>Exceptional Work</span>
      </div>

      <div className="feedbacks">


        <div className="feedback">
          <div className="feedback-img">
            <img src={Feedback1} alt="" />
          </div>
          <div className="feedback-text">
            <span className='quotation1'>“</span>
            <p>
              
            Very genuine work done by CellFix and Team at my doorstep.
            </p>
            <span className='quotation2'>“</span>
          </div>
          <div className="feedback-text"></div>
        </div>


      </div>


      <div className="write-a-review">
        <button id='write-a-review' onClick={handleClick}>
          Write a review <span className="pen-icon" ><Pen /></span>
        </button>
      </div>
    </div>
  )
}

export default Testimonials