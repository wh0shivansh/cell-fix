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

function AndroidDevices() {
    const navigate = useNavigate();
    const selectdevice = 0;
    const [os, setOs] = useRecoilState(tempOsVar);
    const [keyword, setKeyword] = useState('');
    const [showlist, setShowList] = useState(false);
    // console.log(selectdevice)
    useEffect(() => {
        if (os == 'None' || os == null) {
            navigate('/');
        }
    }, [])

    const handleChange=()=>{
        const nextBtn = document.getElementById("nextbtn");
        const deviceName = document.getElementById('android-device').value;
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


    const searchvalue = (e) => {
        setKeyword(e);
    }


    return (
        <div className="intro" style={{height:"30rem"}}>
            <div className="i-right">
                {/* <SelectOS /> */}
                <div className="devices-cont">
                    <p className='device-name'>
                    Type your {os} device name
                    </p>
                    <div className="input-cont">
                        <input id='android-device' onChange={handleChange} placeholder='Ex: Redmi Note 7 Pro'/>
                    </div>

                        <Link to={'/android-issue'} style={{ textDecoration: 'none' }}>
                            <button className='nextbtninactive' id='nextbtn'>
                                <span> Next</span>
                            </button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default AndroidDevices