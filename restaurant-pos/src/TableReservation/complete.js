import React from "react";
import logo from "../img/TableReservation/HCMUT.png";
import "./complete.css";
import { Link } from "react-router-dom";

function myFunction() {
    setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("bookingTitle").style.display = "block";
}

function Complete() {
    return (
        <div className = "reservation reservation2">
            <h2 id = "reservationHeading">RESERVATION</h2>        
            <h3 id = "webIntro">Make a reservation at our restaurant</h3>

            <div className = "detailsMain" onload = {myFunction()}>
                <div className = "restaurantInfo">
                    <div className = "restaurantLogo">
                        <img id = "logo" alt = "Restaurant logo" src = {logo} />
                    </div>

                    <div className = "restaurantName">
                        <p id = "name">HCMUT Restaurant</p>
                    </div>
                </div> 

                <div className = "reservationComplete">
                    <div id = "loader" className = "spinner"></div>
                </div>

                <div style={{display:"none"}} id="bookingTitle" class="animate-bottom">
                    <h1>COMPLETE BOOKING!</h1>
                    <p>Thanks for reservation at HCMUT Restaurant.</p>
                    <p>We hope to have the pleasure of doing business with you in the future.</p>
                </div>
            </div>

            <div className = "navigationButton">
                <Link to = "/">
                    <div className = "button">
                        <button id = "backHomeButton"><span>Back to home</span></button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Complete;