import React, { useEffect } from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import SelectOS from './SelectOS';
import './styles/SelectDevice.css';
import { useRecoilState } from 'recoil';
import { tempDeviceVar, tempOsVar } from '../../atoms/Selections';

function IOSDevices() {
    const navigate = useNavigate();

    const [os, setOs] = useRecoilState(tempOsVar);
    const [keyword, setKeyword] = useState('');
    const [showlist, setShowList] = useState(false);
    // console.log(selectdevice)
    useEffect(() => {
        if (os == 'None' || os == null) {
            navigate('/');
        }
    }, [])


    const searchvalue = (e) => {
        setKeyword(e);
    }

    const handleChange=()=>{
        const nextBtn = document.getElementById("nextbtn");
        const deviceName = document.getElementById('ios-device').value;
        if(deviceName != "" && deviceName != " "){
            nextBtn.classList.add("nextbtnactive");
            nextBtn.classList.remove("nextbtninactive");
            sessionStorage.setItem("deviceName",deviceName);
        }
        else{
            nextBtn.classList.add("nextbtninactive");
            nextBtn.classList.remove("nextbtnactive");
            
        }
    }



    return (
        <div className="intro"  style={{height:"30rem"}}>
            <div className="i-right">
                {/* <SelectOS /> */}
                <div className="devices-cont">
                <p className='device-name'>
                    Type your {os} device name
                    </p>
                    <div className="input-cont">
                        <input id='ios-device' placeholder='Ex: Iphone 13 Pro' onChange={handleChange} />
                    </div>

                        <Link to={'/ios-issue'} style={{ textDecoration: 'none' }}>
                            <button id='nextbtn' className='nextbtnactive' >
                                <span> Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>

                </div>
            </div>
        </div>
    )
}

export default IOSDevices