import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { DateUtils } from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';
import logo from "../img/TableReservation/HCMUT.png";
import "./tableRes.css";
import { Link } from "react-router-dom";

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

/*
function disableTime(currentHour, currentMinute) {    
    var reservateTime = document.getElementById('reservateTime');
    let i = 0;
    while (true) {
        let option = reservateTime.options[i];
        let tempTime = option.value;
        tempTime = tempTime.split(':');
        let hour = parseInt(tempTime[0]);
        let minute = parseInt(tempTime[1]);
        if (hour < currentHour) {
            option.disabled = true;
        } else if (hour == currentHour) {                    
            reservateTime.options[i].disabled = true;
            if (currentMinute <= 30) {
                reservateTime.options[i + 2].selected = true;
                break;                   
            } else {
                reservateTime.options[i + 1].disabled = true;
                reservateTime.options[i + 3].selected = true;
                break;
            }
        }
        i++;
    }
}
*/

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

function TableRes() {
    const [startDate, setStartDate] = useState(new Date());

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
                    <Select id = "reservate_time" options = {reservateTime}/>
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
                            <input type = "text" id = "mobileNumber" required placeholder = "Mobile Number" pattern = "\d{10}" />
                        </div>
                        <div className = "email">
                            <input type = "email" id = "email" required placeholder = "Email" />
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
                <Link to = "/details">
                    <div className = "button">
                        <button id = "nextButton"><span>Next</span></button>
                    </div>
                </Link>
            </div>   
        </div>
    );
}

export default TableRes;