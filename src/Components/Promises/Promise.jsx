import React from 'react';
import './Promise.css';
import Logo from '../../img/logo.jpg';

function Promise() {
  return (
    <div className="promise">
        <div className="p-heading">
            Why CellFix?
        </div>
        <div className="p-description">
        We provide quick service process at your doorstep. CellFix is one of the best reasonable mobile phone doorstep service, we are fixing all models of smartphones. Our service includes touch screen repair, broken and physical damage repair, charging port, power button, side button, camera repair, headphone jack, wifi, bluetooth, battery replacement, software troubleshoot and up-gradation.
        </div>

        <div className="p-sec-3">
          <div className="p-left">
               <span className='info-span'>
                    <h2 className='span-title'>All Brands and Models</h2>
                    <p className='span-para'>We repair all android and Ios models</p>
               </span>               
               <span className='info-span'>
                    <h2 className='span-title'>Best Price</h2>
                    <p className='span-para'>We have the best price in the market</p>
               </span>               
               
               <span className='info-span'>
                    <h2 className='span-title'>Quick Service</h2>
                    <p className='span-para'>Our service is quick and at your doorstep</p>
               </span>               
               
               <span className='info-span'>
                    <h2 className='span-title'>Skilled Technicians</h2>
                    <p className='span-para'>Team of certified technicians is at your service</p>
               </span>
          </div>
          <div className="p-middle">
               <img src={Logo} alt="" />
          </div>
          <div className="p-right">
               <span className='info-span'>
                    <h2 className='span-title'>Data Security</h2>
                    <p className='span-para'>Don't worry, your data is safe with us!</p>
               </span>               
               
               <span className='info-span'>
                    <h2 className='span-title'>Genuine Parts</h2>
                    <p className='span-para'>We provide quality & original products only!</p>
               </span>               
               
               <span className='info-span'>
                    <h2 className='span-title'>6 Months Warranty</h2>
                    <p className='span-para'>Warranty on all the repaired products! (Does not include <br />accidental damage )</p>
               </span>
          </div>
        </div>
    </div>
  )
}

export default Promise