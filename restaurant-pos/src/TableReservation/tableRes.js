import React, { useEffect, useState } from "react";
import Select from "react-select";
import { DateUtils } from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import logo from "../img/TableReservation/HCMUT.png";
import "./tableRes.css";
import { Link } from "react-router-dom";
import firebase from "firebase";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

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
        tempTime = tempTime.split(":");
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

const FORMAT_DAY = "dd/MM/yyyy";

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
            { label: "10:30 AM", value: "10:30" },
        ],
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
            { label: "5:00 PM", value: "17:00" },
        ],
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
            { label: "9:30 PM", value: "21:30" },
        ],
    },
];

disableTime(reservateTime);

function TableRes() {
    /* ________________________________________________________________________________ */
    const id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";

    const [party_size, setParty_size] = useState(0);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mobile_number, setMobile_number] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const Reservation = (e) => {
        const userd = firebase.database().ref("Accounts").child(id);
        var date = document.getElementsByClassName("DayPickerInput").item(0)
            .firstElementChild.value;
        var time = document.getElementsByClassName("css-qc6sy-singleValue").item(0).textContent;

        userd.update({
            z_tableRes_party_size: party_size,
            z_tableRes_date: date,
            z_tableRes_time: time,
            z_tableRes_firstname: firstname,
            z_tableRes_lastname: lastname,
            z_tableRes_mobile_number: mobile_number,
            z_tableRes_email: email,
            z_tableRes_comment: comment,
        });

        localStorage.setItem("z_tableRes_party_size", JSON.stringify(party_size));
        localStorage.setItem("z_tableRes_firstname", JSON.stringify(firstname));
        localStorage.setItem("z_tableRes_lastname", JSON.stringify(lastname));
        localStorage.setItem("z_tableRes_mobile_number", JSON.stringify(mobile_number));
        localStorage.setItem("z_tableRes_email", JSON.stringify(email));
        localStorage.setItem("z_tableRes_comment", JSON.stringify(comment));
        localStorage.setItem("z_tableRes_date", JSON.stringify(date));
        localStorage.setItem("z_tableRes_time", JSON.stringify(time));
    };
    /* ________________________________________________________________________________ */

    return (
        <div className="reservation">
            <h2 id="reservationHeading">RESERVATION</h2>
            <h3 id="webIntro">Make a reservation at our restaurant</h3>

            <div className="reservationMain">
                <div className="restaurantInfo">
                    <div className="restaurantLogo">
                        <img id="logo" alt="Restaurant logo" src={logo} />
                    </div>
                    <div className="restaurantName">
                        <p id="name">HCMUT Restaurant</p>
                    </div>
                </div>

                <div className="tableInfo">
                    <label for="reservatePartySize">Party Size</label>
                    <br />
                    <input
                        type="number"
                        id="reservatePartySize"
                        defaultValue="0"
                        min="1"
                        max="20"
                        onChange={(e) => setParty_size(e.target.value)}
                    />
                    <br />
                    <label for="reservateDate">Date</label>
                    <br />
                    <DayPickerInput
                        formatDate={formatDate}
                        format={FORMAT_DAY}
                        parseDate={parseDate}
                        value={`${dateFnsFormat(new Date(), FORMAT_DAY)}`}
                        dayPickerProps={{
                            disabledDays: { before: new Date() },
                        }}
                    />
                    <br />
                    <label for="reservateTime">Time</label>
                    <br />
                    <Select id="reservateTime" options={reservateTime} />
                </div>

                <div className="memberInfo">
                    <label for="contactDetails">Contact Details</label>
                    <div className="name">
                        <div className="firstName">
                            <input
                                type="text"
                                id="firstName"
                                required
                                placeholder="First Name"
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="lastName">
                            <input
                                type="text"
                                id="lastName"
                                required
                                placeholder="Last Name"
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="contact">
                        <div className="mobileNumber">
                            <input
                                type="text"
                                id="mobileNumber"
                                required
                                placeholder="Mobile Number"
                                onChange={(e) => setMobile_number(e.target.value)}
                            />
                        </div>
                        <div className="email">
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="comment">
                        <label for="comment">Comments</label>
                        <textarea
                            id="comment"
                            placeholder="Please leave a few other requests for table reservation information"
                            name="comment"
                            rows="5"
                            maxlength="2000"
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="navigationButton">
                <Link to="/">
                    <div className="button">
                        <button id="backHomeButton">
                            <span>Back to home</span>
                        </button>
                    </div>
                </Link>

                <Link to="/details">
                    <div className="button">
                        <button id="nextButton" onClick={Reservation}>
                            <span>Next</span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TableRes;
