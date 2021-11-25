import React from "react";
import logo from "../img/TableReservation/HCMUT.png";
import "./terms.css";
import { Link } from "react-router-dom";

function Terms() {
    return (
        <div className="reservation reservation2">
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

                <div className="reservationTerms">
                    <h2 id="termsHeader">Booking Terms and Conditions</h2>
                    <p id="terms_conditions">
                        Please note we may require a valid credit card number to confirm bookings.
                        Unless we specifically refer to a "refundable deposit", we do NOT charge
                        anything to the credit card unless there is a "no show" of which we have no
                        prior notice. Refundable deposits are credited in full to your account
                        balance on payment on departure. By making a reservation with us and
                        providing contact details you are "opting in" to our marketing programme. If
                        you do not wish to receive marketing material from ourselves please email
                        the contact address on the email we send you with "Unsubscribe" as the
                        subject.
                    </p>
                </div>
            </div>

            <div className="navigationButton">
                <Link to="/details">
                    <div className="button">
                        <button id="backButton">
                            <span>Back</span>
                        </button>
                    </div>
                </Link>
                <div className="button">
                    <button id="continueButton">
                        <span>Accept and Continue</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Terms;
