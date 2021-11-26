import React from "react";
import logo from "../img/TableReservation/HCMUT.png";
import "./complete.css";
import { Link } from "react-router-dom";
import firebase from "firebase";

function myFunction() {
    setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("bookingTitle").style.display = "block";
}

function Complete() {
    const reservation_code = localStorage.getItem("Reservation_code")
        ? JSON.parse(localStorage.getItem("Reservation_code"))
        : "";

    const id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : "";
    function handleCancle() {
        const userd = firebase.database().ref("Accounts").child(id);
        userd.update({
            Reservation_code: "0",
        });

        localStorage.setItem("Reservation_code", JSON.stringify("0"));
    }

    return (
        <div className="reservation reservation2">
            <h2 id="reservationHeading">RESERVATION</h2>
            <h3 id="webIntro">Make a reservation at our restaurant</h3>

            <div className="detailsMain" onload={myFunction()}>
                <div className="restaurantInfo">
                    <div className="restaurantLogo">
                        <img id="logo" alt="Restaurant logo" src={logo} />
                    </div>

                    <div className="restaurantName">
                        <p id="name">HCMUT Restaurant</p>
                    </div>
                </div>

                <div className="reservationComplete">
                    <div id="loader" className="spinner"></div>
                </div>

                <div style={{ display: "none" }} id="bookingTitle" class="animate-bottom">
                    <h3>COMPLETE BOOKING!</h3>
                    <h1>{`Your Reservation Code is: ${reservation_code}`}</h1>
                    <p>Thanks for reservation at HCMUT Restaurant.</p>
                    <p>We hope to have the pleasure of doing business with you in the future.</p>
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
                <div className="button">
                    <button id="backHomeButton" onClick={handleCancle}>
                        <span>Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Complete;
