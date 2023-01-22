import React from 'react';
import { useState } from 'react';
import './Card.css';

const Card = (props) => {

    const [isActive,setActive] = useState(false);

    const handleClick=()=>{
        const codeBox = document.getElementById("code-box");
        codeBox.innerHTML = "code copied!";
    }

  return (
    <div className='card'>
        <div className="card-title">
            {props.title}
        </div>
        <div className="card-desc">
            <p>{props.desc}</p>
        </div>
        <div className="card-perm">
            Use below Code to Avail The Offer.
        </div>

        <hr className='card-hr'/>

        <div className="card-code" onClick={() => {navigator.clipboard.writeText(props.code)}}>
            <p id='code-box' onClick={handleClick}>use code {props.code}</p>
        </div>
    </div>
  )
}

export default Card