import React, { useEffect } from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import SelectOS from './SelectOS';
import './styles/SelectDevice.css';
import { useRecoilState } from 'recoil';
import { tempDeviceVar, tempIssueArrayVar, tempOsVar } from '../../atoms/Selections';

function AndroidIssue() {
    const navigate = useNavigate();

    const [os, setOs] = useRecoilState(tempOsVar);
    const [selectdevice, setSelectDevice] = useRecoilState(tempDeviceVar);
    const [issuelist, setIssueList] = useRecoilState(tempIssueArrayVar);


    const [keyword, setKeyword] = useState('');
    const [showlist, setShowList] = useState(false);
    // console.log(selectdevice)
    useEffect(() => {
        if (sessionStorage.getItem("deviceName") == null) {
            navigate('/');
        }
    }, [])
    const deviceName = sessionStorage.getItem("deviceName");
    const referal = sessionStorage.getItem("referal");

    const searchvalue = (e) => {
        setKeyword(e);
    }



    const Issue = [
        { name: 'Back Glass Repair', id: 1 },
        { name: 'Speaker Repair', id: 2 },
        { name: 'Mic Repair', id: 3 },
        { name: 'Screen/Display Repair', id: 4 },
        { name: 'Front Camera Repair', id: 5 },
        { name: 'Rear Camera Repair', id: 6 },
        { name: 'Battery Repair', id: 7 },
        { name: 'Power Button Repair', id: 8 },
        { name: 'Volume Button Repair', id: 9 },
        { name: 'Frame & Housing Repair', id: 10 },
        { name: 'Other Problems - We will contact you to find out more', id: 11 },
    ]


    const AddRemoveIssue = (e) => {

        if (issuelist.includes(e)) {
            setIssueList(issuelist.filter(item => item !== e));
        }
        else {
            setIssueList([...issuelist, e]);
        }
    }
    // console.log(issuelist)


    const sendtoWhatsapp = () => {
        let message = '';
        message += 'Hi, I am using ' + deviceName + ' and I am facing some issues.%0a%0a';
        message += 'Referal - ' + referal + '%0a';
        message += 'Device Name - ' + deviceName + '%0a';
        message += 'OS Name - ' + 'Android' + '%0a';
        message += 'My issue is as follows:%0a%0a';
        for (let i = 0; i < issuelist.length; i++) {
            message += '- ' + issuelist[i] + '%0a';
        }
        message += '%0a';
        message += 'Please help me out.%0a';
        message += 'Thanks%0a';
        message += '%0a';
        message += 'Date: ' + `${new Date().toLocaleString()}` + '%0a';
        console.log(message)
        window.open('https://wa.me/917566772608?text=' + message);
    }
    return (
        <div className="intro"  style={{height:"30rem"}}>

            <div className="i-right">
                {/* <SelectOS /> */}
                <div className="devices-cont">
                    <p className='issue-title'>

                    Showing {deviceName} Issues
                    </p>
                    <div className="input-cont">
                        <input placeholder={`Select ${deviceName} Issue`} onChange={(e) => searchvalue(e.target.value)} onClick={() => setShowList(true)} />
                        <button className='search-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    {showlist == true ?
                        <div className='devices-list'>
                            {Issue
                                .filter(issue => issue.name.toLowerCase().includes(keyword.toLowerCase()))
                                .map(issue => (
                                    <div className={`device-item ${issuelist.includes(issue.name) && 'device-item-active'}`} key={issue.id} onClick={() => AddRemoveIssue(issue.name)}>
                                        <p>{issue.name}</p>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}

                        </div>
                        :
                        <></>}



                    {issuelist != '' ?
                        <button className='nextbtnactive' onClick={sendtoWhatsapp}>
                            Submit
                        </button>
                        : <button className='nextbtninactive' >
                            Submit
                        </button>}
                </div>
            </div>
        </div>
    )
}

export default AndroidIssue