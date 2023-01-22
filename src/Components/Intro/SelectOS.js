import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { tempOsVar } from '../../atoms/Selections';
import './styles/SelectOS.css'
import Android from '@iconscout/react-unicons/icons/uil-android';
import Apple from '@iconscout/react-unicons/icons/uil-apple';

const SelectOS = () => {
    const [os, setOs] = useRecoilState(tempOsVar);
    // console.log(os);
    const navigate = useNavigate();

    const referral = "ashu20";

    const handleOs = (e) => {
        let inputVal = document.getElementById("referal-input").value;
        if(inputVal.toLowerCase() == referral){

            if (os == 'Android') {
                // console.log('Android page');
                sessionStorage.setItem("referal",referral);
                navigate('/android-devices');
            }
            else if (os == 'IOS') {
                // console.log('IOS page');
                sessionStorage.setItem("referal",referral);
                navigate('/ios-devices');
            }
        }
        else if(inputVal == ""){
            let referral = "";
            if (os == 'Android') {
                // console.log('Android page');
                sessionStorage.setItem("referal",referral);
                navigate('/android-devices');
            }
            else if (os == 'IOS') {
                // console.log('IOS page');
                sessionStorage.setItem("referal",referral);
                navigate('/ios-devices');
            }      
        }
        else{
            document.getElementById("error-box").innerHTML = "Invalid Code";
        }

    }
    return (
        <div className='select-os-outer'>
            <h1 className='color-white'>What type of device are you using?</h1>
            <div className="select-os-inner">
                <button onClick={() => setOs('Android')} className={os === 'Android' ? 'osactive' : 'osinactive'}><span><Android/></span>Android</button>
                <button onClick={() => setOs("IOS")} className={os === 'IOS' ? 'osactive' : 'osinactive'}><span><Apple/></span>Iphone</button>
                <input type="text" placeholder='Referal Code' id='referal-input' className='referal-input'/>
                <div className="error-box" id='error-box'>Have referal code? If not leave empty</div>
                {/* <button onClick={() => setOs('Windows')} className={os === 'Windows' ? 'osactive' : 'osinactive'}>Windows</button> */}
            </div>
            {os == 'Android' || os == 'IOS' ?
                <button className='nextbtnactive' onClick={handleOs}>
                    <span className='btn-font'>Confirm & Proceed</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                : <button className='nextbtninactive'>
                    <span className='btn-font'>Confirm & Proceed</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>}
        </div>
    )
}

export default SelectOS