import React from "react";
import logo from "../img/TableReservation/HCMUT.png";
import home from "../img/home.png";
import "./details.css";
import { Link } from "react-router-dom";

function Details() {
    return (
        <div className = "reservation">
            <div class = "reservationHeader">
                <h2 id = "reservationHeading">RESERVATION</h2>        
                <h3 id = "webIntro">Make a reservation at our restaurant</h3>
            </div>

            <div class = "reservationMain">
                <div class = "restaurantInfo">
                    <div class = "restaurantLogo">
                        <img id = "logo" alt = "Restaurant logo" src = {logo} />
                    </div>

                    <div class = "restaurantName">
                        <p id = "name">HCMUT Restaurant</p>
                    </div>
                </div> 

                <div class = "reservationDetails">
                    <h2 id = "detailsHeader">Confirm your details below</h2>
                    <table id = "tableDetails">
                        <tr>
                            <th>Date:</th>
                            <td>November 16, 2021</td>
                        </tr>
                        <tr>
                            <th>Time:</th>
                            <td>11:45 AM</td>
                        </tr>
                        <tr>
                            <th>People:</th>
                            <td>2</td>
                        </tr>
                    </table>
                    <table id = "memberDetails">
                        <tr>
                            <th>First Name:</th>
                            <td>Chain</td>
                        </tr>
                        <tr>
                            <th>Last Name:</th>
                            <td>Pima</td>
                        </tr>
                        <tr>
                            <th>Mobile Number:</th>
                            <td>0779555994</td>
                        </tr>
                        <tr>
                            <th>Email Address:</th>
                            <td>nguoibian0541@gmail.com</td>
                        </tr>
                    </table>
                </div>

                <div class = "terms">
                    <input type = "checkbox" id = "termsCheckbox" value = "terms" />
                    <label id = "terms_conditions">I have read and accept the Booking Terms and Conditions</label>
                </div>
            </div>

            <div class = "navigationButton">
                <Link to = "/reservate">
                    <div class = "button">
                        <button id = "backButton"><span>Back</span></button>
                    </div>
                </Link>
                <Link to = "/terms">
                    <div class = "button">
                        <button id = "nextButton"><span>Next</span></button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Details;