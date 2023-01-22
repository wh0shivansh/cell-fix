import React from 'react';
import './Works.css';
import Click from '../../img/click.png';
import Quote from '../../img/quote.png';
import Technician from '../../img/worker.png';

function Works() {
  return (
    <div className="work">
      <div className="work-bg-img"></div>
        <div className="w-top">
          How it works at&nbsp;<span className='color-orange'>CellFix?</span>
        </div>
        <div className="w-bottom">
            <div className="wb-1">
              <div className="wb-img">
                <img src={Click} alt="" />
              </div>
              Select your <br />
              device & issue
            </div>
            <div className="wb-2">
              <div className="wb-img">
                <img src={Quote} alt="" />
              </div>
              Get a FREE <br />
              quote instantly
            </div>
            <div className="wb-3">
              <div className="wb-img">
                <img src={Technician} alt="" />
              </div>
              Technician visits your <br />
              to fix device in no time
            </div>
        </div>
    </div>
  )
}

export default Works