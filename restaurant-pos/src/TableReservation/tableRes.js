import React from "react";
import logo from "../img/TableReservation/HCMUT.png";
import table from "../img/TableReservation/table.png";
import home from "../img/home.png";
import "./tableRes.css";
import { Link } from "react-router-dom";

function tableRes() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hour = dateObj.getUTCHours();
    var minute = dateObj.getMinutes();

    var newdate = year + "/" + month + "/" + day;
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
                    <input type = "number" id = "reservatePartySize" value = "1" min = "1" max = "20" /><br />
                    <label for = "resvateData">Date</label><br />
                    <input type = "date" id = "reservateDate" value = {newdate} min = {newdate} /><br />
                    <label for = "reservateTime">Time</label><br />
                    <select id = "reservateTime" name = "Time Reservation">
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

                    <div className = "button">
                        <button id = "searchButton"><span>Search</span></button>
                    </div>
                </div>

                <div className = "table">
                    <label for = "reserveTable">Choose a table</label><br />
                    <div className = "tableList">
                        <div className = "tableItem">
                            <img id = "table1" src = {table} />
                            <figcaption>Table 1</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table2" src = {table} />
                            <figcaption>Table 2</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table3" src = {table} />
                            <figcaption>Table 3</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table4" src = {table} />
                            <figcaption>Table 4</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table5" src = {table} />
                            <figcaption>Table 5</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table6" src = {table} />
                            <figcaption>Table 6</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table7" src = {table} />
                            <figcaption>Table 7</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table8" src = {table} />
                            <figcaption>Table 8</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table9" src = {table} />
                            <figcaption>Table 9</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table10" src = {table} />
                            <figcaption>Table 10</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table11" src = {table} />
                            <figcaption>Table 11</figcaption>
                        </div>
                        <div className = "tableItem">
                            <img id = "table12" src = {table} />
                            <figcaption>Table 12</figcaption>
                        </div>
                    </div>
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