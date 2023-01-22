import React from 'react';
import Intro from '../Intro/Intro';
import Promise from '../Promises/Promise';
import Works from '../Works/Works';
import './Review.css';
import { useRef } from 'react';
import Pen from '@iconscout/react-unicons/icons/uil-pen';
import emailjs, { send } from '@emailjs/browser';
import Tick from '@iconscout/react-unicons/icons/uil-download-alt'

const Review = () => {

    const form = useRef();
    const sendEmail=(e)=>{
            e.preventDefault();

            emailjs.sendForm('service_d2u6kjw','template_xcp3qcj',form.current,'Nxjq8h-RSswWEa0v_')
                .then((result)=>{
                    console.log(result.text);
                },(error)=>{
                    console.log(error.text);
                })
            document.getElementById('name').value="";
            document.getElementById('mail').value="";
            document.getElementById('textarea').value="";
            document.getElementById('instagram').value="";

            document.getElementById('confirm-mail').classList.add("confirm-mail");
            document.getElementById('confirm-mail').classList.remove("display-none");
    }

  return (
    <div className='reviews'>
        <div className="nav-replace"></div>

            <div id='confirm-mail' className="display-none">
                Your Review has been recorded &nbsp;<span><Tick/></span>
            </div>
        <div className="review-form">
            <div className="review-title">
                Write A Review <span className='calling'><Pen/></span>
            </div>
            <form action="" ref={form} onSubmit={sendEmail}>
                <br />
                <br />
                <input type="text" id='name' name='name' className='form-input' placeholder='Full Name'/>
                <input type="email" id='mail' name='mail' className='form-input' placeholder='Email'/>
                <input type="text" id='instagram' name='instagram' className='form-input' placeholder='Instagram Id'/>
                <textarea name="review" id='textarea' placeholder='Did you like our service?'></textarea>
                <button id='submit-btn' type='submit'>Submit</button>
            </form>

        </div>


    </div>
  )
}

export default Review