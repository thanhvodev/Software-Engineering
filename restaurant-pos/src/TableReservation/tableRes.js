import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';
import logo from "../img/TableReservation/HCMUT.png";
import "./tableRes.css";
import { Link } from "react-router-dom";
import validator from 'validator';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function disableTime(reservateTime) {
    const dateObj = new Date();
    let currentHour = dateObj.getHours();
    let currentMinute = dateObj.getMinutes();

    let tempAllTime = [];
    for (let i = 0; i < 3; i++) {
        tempAllTime = tempAllTime.concat(reservateTime[i].options);
    }
    let numTime = tempAllTime.length;
    for (let i = 0; i < numTime; i++) {
        let tempTime = tempAllTime[i].value;
        tempTime = tempTime.split(':');
        let hour = parseInt(tempTime[0]);
        if (hour < currentHour) {
            tempAllTime[i].isDisabled = true;
        } else if (hour == currentHour) {                    
            tempAllTime[i].isDisabled = true;
            if (currentMinute <= 30) {
                //return tempAllTime[i + 2].value;
                break;                 
            } else {
                tempAllTime[i + 1].isDisabled = true;
                //return tempAllTime[i + 3].value;
                break;
            }
        }
    }
}

function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}
  
function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}
  
const FORMAT_DAY = 'dd/MM/yyyy';

const reservateTime = [
    {
        label: "Breakfast",
        options: [
            { label: "7:00 AM", value: "7:00" },
            { label: "7:30 AM", value: "7:30" },
            { label: "8:00 AM", value: "8:00" },
            { label: "8:30 AM", value: "8:30" },
            { label: "9:00 AM", value: "9:00" },
            { label: "9:30 AM", value: "9:30" },
            { label: "10:00 AM", value: "10:00" },
            { label: "10:30 AM", value: "10:30" }
        ]
    },
    {
        label: "Lunch",
        options: [
            { label: "1:00 PM", value: "13:00" },
            { label: "1:30 PM", value: "13:30" },
            { label: "2:00 PM", value: "14:00" },
            { label: "2:30 PM", value: "14:30" },
            { label: "3:00 PM", value: "15:00" },
            { label: "3:30 PM", value: "15:30" },
            { label: "4:00 PM", value: "16:00" },
            { label: "4:30 PM", value: "16:30" },
            { label: "5:00 PM", value: "17:00" }
        ]
    },
    {
        label: "Dinner",
        options: [
            { label: "5:30 PM", value: "17:30" },
            { label: "6:00 PM", value: "18:00" },
            { label: "6:30 PM", value: "18:30" },
            { label: "7:00 PM", value: "19:00" },
            { label: "7:30 PM", value: "19:30" },
            { label: "8:00 PM", value: "20:00" },
            { label: "8:30 PM", value: "20:30" },
            { label: "9:00 PM", value: "21:00" },
            { label: "9:30 PM", value: "21:30" }
        ]
    }
];

disableTime(reservateTime);

function TableRes() {
    var isPhoneValid = false;    
    var isMailValid = false;
    const validateEmail = (e) => {
        var email = e.target.value
  
        if (validator.isEmail(email)) {
            isMailValid = true;
        } else {
            isMailValid = false;
        }
    }

    const validatePhoneNumber = (pn) => {
        
        var phoneNumber = pn.target.value

        if (validator.isMobilePhone(phoneNumber)) {
            isPhoneValid = true;
        } else {
            isPhoneValid = false;
        }
    }

    return (
        <div className = "reservation">
            <h2 id = "reservationHeading">RESERVATION</h2>        
            <h3 id = "webIntro">Make a reservation at our restaurant</h3>            

            <div className = "reservationMain">
                <div className = "restaurantInfo">
                    <div className = "restaurantLogo">
                        <img id = "logo" alt = "Restaurant logo" src = {logo} />
                    </div>
                    <div className = "restaurantName">
                        <p id = "name">HCMUT Restaurant</p>
                    </div>
                </div> 

                <div className = "tableInfo">
                    <label for = "reservatePartySize">Party Size</label><br />
                    <input type = "number" id = "reservatePartySize" defaultValue = "1" min = "1" max = "20" /><br />
                    <label for = "reservateDate">Date</label><br />
                    <DayPickerInput
                        formatDate={formatDate}
                        format={FORMAT_DAY}
                        parseDate={parseDate}
                        value = {`${dateFnsFormat(new Date(), FORMAT_DAY)}`}
                        dayPickerProps = {{
                            disabledDays: { before: new Date() }
                        }}
                    />
                    <br />
                    <label for = "reservateTime">Time</label><br />
                    <Select id = "reservateTime" options = {reservateTime} />
                </div>

                <div className = "memberInfo">
                    <label for = "contactDetails">Contact Details</label>
                    <div className = "name">
                        <div className = "firstName">
                            <input type = "text" id = "firstName" required placeholder = "First Name" />
                        </div>
                        <div className = "lastName">
                            <input type = "text" id = "lastName" required placeholder = "Last Name" />
                        </div>
                    </div>
                    <div className = "contact">
                        <div className = "mobileNumber">
                            <input type = "text" id = "mobileNumber" required placeholder = "Mobile Number" onChange={(pn) => validatePhoneNumber(pn)} />
                        </div>
                        <div className = "email">
                            <input type = "email" id = "email" required placeholder = "Email" onChange={(e) => validateEmail(e)} />
                        </div>
                    </div>
                    <div className = "comment">
                        <label for = "comment">Comments</label>
                        <textarea id = "comment" placeholder = "Please leave a few other requests for table reservation information" name = "comment" rows = "5" maxlength = "2000" ></textarea>
                    </div>
                </div>
            </div>

            <div className = "navigationButton">
                <Link to = "/">
                    <div className = "button">
                        <button id = "backHomeButton"><span>Back to home</span></button>
                    </div>
                </Link>
                {(true) ? 
                (<Link to = "/details">
                    <div className = "button">
                        <button id = "nextButton"><span>Next</span></button>
                    </div>
                </Link>)
                : 
                (<div className = "button">
                    <button id = "nextButton"><span>Next</span></button>
                </div>)}
                
            </div>   
        </div>
    );
}

export default TableRes;