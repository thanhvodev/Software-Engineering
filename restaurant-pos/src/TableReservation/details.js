import React from "react";
import logo from "../img/TableReservation/HCMUT.png";
import "./details.css";
import { Link } from "react-router-dom";
import firebase from "firebase";

function Details() {
    //var checked_temrms = document.getElementById("termsCheckbox").checked;
    const party_size = localStorage.getItem("z_tableRes_party_size")
        ? JSON.parse(localStorage.getItem("z_tableRes_party_size"))
        : "";
    const FN = localStorage.getItem("z_tableRes_firstname")
        ? JSON.parse(localStorage.getItem("z_tableRes_firstname"))
        : "";
    const LN = localStorage.getItem("z_tableRes_lastname")
        ? JSON.parse(localStorage.getItem("z_tableRes_lastname"))
        : "";
    const number = localStorage.getItem("z_tableRes_mobile_number")
        ? JSON.parse(localStorage.getItem("z_tableRes_mobile_number"))
        : "";
    const email = localStorage.getItem("z_tableRes_email")
        ? JSON.parse(localStorage.getItem("z_tableRes_email"))
        : "";

    const date = localStorage.getItem("z_tableRes_date")
        ? JSON.parse(localStorage.getItem("z_tableRes_date"))
        : "";
    const time = localStorage.getItem("z_tableRes_time")
        ? JSON.parse(localStorage.getItem("z_tableRes_time"))
        : "";

    const id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";

    function handleComplete() {
        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        const numtable = getRandomInt(1, 30);

        const table_code = "TABLE-" + numtable;

        const userd = firebase.database().ref("Accounts").child(id);
        userd.update({
            Reservation_code: table_code,
        });

        localStorage.setItem("Reservation_code", JSON.stringify(table_code));
    }

    return (
        <div className="reservation reservation2">
            <div class="reservationHeader">
                <h2 id="reservationHeading">RESERVATION</h2>
                <h3 id="webIntro">Make a reservation at our restaurant</h3>
            </div>

            <div class="reservationMain">
                <div class="restaurantInfo">
                    <div class="restaurantLogo">
                        <img id="logo" alt="Restaurant logo" src={logo} />
                    </div>

                    <div class="restaurantName">
                        <p id="name">HCMUT Restaurant</p>
                    </div>
                </div>

                <div class="reservationDetails">
                    <h2 id="detailsHeader">Confirm your details below</h2>
                    <table id="tableDetails">
                        <tr>
                            <th>Date:</th>
                            <td>{date}</td>
                        </tr>
                        <tr>
                            <th>Time:</th>
                            <td>{time}</td>
                        </tr>
                        <tr>
                            <th>People:</th>
                            <td>{party_size}</td>
                        </tr>
                    </table>
                    <table id="memberDetails">
                        <tr>
                            <th>First Name:</th>
                            <td>{FN}</td>
                        </tr>
                        <tr>
                            <th>Last Name:</th>
                            <td>{LN}</td>
                        </tr>
                        <tr>
                            <th>Mobile Number:</th>
                            <td>{number}</td>
                        </tr>
                        <tr>
                            <th>Email Address:</th>
                            <td>{email}</td>
                        </tr>
                    </table>
                </div>

                <div class="terms">
                    <input type="checkbox" id="termsCheckbox" value="terms" checked= "true"/>
                    <label id="terms_conditions">
                        <span>I have read and accept the </span>
                        <Link to="/terms">
                            <span>Booking Terms and Conditions</span>
                        </Link>
                    </label>
                </div>
            </div>

            <div class="navigationButton">
                <Link to="/reservate">
                    <div class="button">
                        <button id="backButton">
                            <span>Back</span>
                        </button>
                    </div>
                </Link>

                <Link to="/complete">
                    <div class="button">
                        <button id="continueButton" onClick={handleComplete}>
                            <span>Complete Booking</span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Details;
