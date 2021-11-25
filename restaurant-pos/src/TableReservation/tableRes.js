import React, { useRef } from "react";
import logo from "../img/TableReservation/HCMUT.png";
import "./tableRes.css";
import { Link } from "react-router-dom";

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

function tableRes() {
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var newdate = year + "-" + month + "-" + day;
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
                    <label for = "resvateData">Date</label><br />
                    <input type = "date" id = "reservateDate" pattern = "dd-mm-yyyy" defaultValue = {newdate} min = {newdate} /><br />
                    <label for = "reservateTime">Time</label><br />
                    <select id = "reservateTime" name = "Time Reservation" onClick = {disableTime(hour, minute)}>
                        <optgroup label = "Breakfast">
                            <option label = "7:00 AM" value = "7:00"></option>
                            <option label = "7:30 AM" value = "7:30"></option>
                            <option label = "8:00 AM" value = "8:00"></option>
                            <option label = "8:30 AM" value = "8:30"></option>
                            <option label = "9:00 AM" value = "9:00"></option>
                            <option label = "9:30 AM" value = "9:30"></option>
                            <option label = "10:00 AM" value = "10:00"></option>
                            <option label = "10:30 AM" value = "10:30"></option>
                        </optgroup>
                        <optgroup label = "Lunch">
                            <option label = "1:00 PM" value = "13:00"></option>
                            <option label = "1:30 PM" value = "13:30"></option>
                            <option label = "2:00 PM" value = "14:00"></option>
                            <option label = "2:30 PM" value = "14:30"></option>
                            <option label = "3:00 PM" value = "15:00"></option>
                            <option label = "3:30 PM" value = "15:30"></option>
                            <option label = "4:00 PM" value = "16:00"></option>
                            <option label = "4:30 PM" value = "16:30"></option>
                            <option label = "5:00 PM" value = "17:00"></option>
                        </optgroup>
                        <optgroup label = "Dinner">
                            <option label = "5:30 PM" value = "17:30"></option>
                            <option label = "6:00 PM" value = "18:00"></option>
                            <option label = "6:30 PM" value = "18:30"></option>
                            <option label = "7:00 PM" value = "19:00"></option>
                            <option label = "7:30 PM" value = "19:30"></option>
                            <option label = "8:00 PM" value = "20:00"></option>
                            <option label = "8:30 PM" value = "20:30"></option>
                            <option label = "9:00 PM" value = "21:00"></option>
                            <option label = "9:30 PM" value = "21:30"></option>
                        </optgroup>
                    </select>
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

export default tableRes;