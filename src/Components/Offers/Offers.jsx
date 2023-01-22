import React from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import './Offers.css';

const Offers = () => {

    useEffect(()=>{
        const offerCard1 = document.getElementById('offer-card1');
        const offerCard2 = document.getElementById('offer-card2');
        const offerCard3 = document.getElementById('offer-card3');

        if(offerCard1.innerHTML == ""){
            offerCard1.innerHTML = "No upcoming offers";
        }
        if(offerCard2.innerHTML == ""){
            offerCard2.innerHTML = "No ongoing offers";
        }        
        if(offerCard3.innerHTML == ""){
            offerCard3.innerHTML = "No past offers";
        }

        window.location.reload()
    })

  return (
    <div className='offers'>
        <br />
        <br />
        <div className="upcoming-offers">
            <div className="offer-title"><p>Upcoming Offers</p></div>
            <div className="offer-cards" id='offer-card1'>

            {/* <Card title="New Offer" desc="50% off for all new android devices for first users" code="ashu11"/> */}

            </div>
        </div>


        <div className="new-offers">
            <div className="offer-title"><p>Ongoing Offers</p></div>
            <div className="offer-cards"id='offer-card2'>

            </div>
        </div>


        <div className="old-offers">
            <div className="offer-title"><p>Past Offers</p></div>
            <div className="offer-cards"id='offer-card3'>

            </div>
        </div>

    </div>
  )
}

export default Offers