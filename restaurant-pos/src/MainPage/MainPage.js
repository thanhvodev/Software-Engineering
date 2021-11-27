import React, { useContext } from "react";
import Navtest from "./Nav-test";
import cart from "../img/cart.svg";
import "./MainPage.css";
import useCart from "./useCart";
import Cart from "../MainPage/Cart";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserContext";
import Checktime from "../TableReservation/checktime";

function MainPage() {
    const { isShowing, toggle } = useCart(false);
    const { user, setUser } = useContext(UserContext); // sai
    const username_from_local = localStorage.getItem("username")
        ? JSON.parse(localStorage.getItem("username"))
        : "";

    const reservation_code = localStorage.getItem("Reservation_code")
        ? JSON.parse(localStorage.getItem("Reservation_code"))
        : "";

    /* __________________________________________________ */

    /* _____________________________________ */
    if (username_from_local) {
        Checktime();
    }
    /* _____________________________________ */
    return (
        <div className="menu">
            <div className="container-fluid  MainPage">
                <div className="row">
                    <div className="upperbody">
                        <div className="container-fluid">
                            <div className="header row d-flex justify-content-end">
                                <div className={username_from_local ? "col-7" : "col-8"}></div>
                                {!username_from_local ? (
                                    <Link to="/register" className="btn btn-3 col-1">
                                        <h5>Register</h5>
                                    </Link>
                                ) : (
                                    <></>
                                )}
                                {username_from_local ? (
                                    <Link to="/profile" className="btn btn-3 col-1">
                                        <h5>Profile</h5>
                                    </Link>
                                ) : (
                                    <></>
                                )}
                                {username_from_local ? (
                                    reservation_code == 0 ? (
                                        <Link to="/reservate" className="btn btn-3 col-1">
                                            <h5>Reservations</h5>
                                        </Link>
                                    ) : (
                                        <Link to="/complete" className="btn btn-3 col-1">
                                            <h5>Reservations</h5>
                                        </Link>
                                    )
                                ) : (
                                    <></>
                                )}

                                {!username_from_local ? (
                                    <Link to="/login" className="btn btn-3 col-1">
                                        <h5>Login</h5>
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setUser(null);
                                            localStorage.removeItem("username");
                                            localStorage.removeItem("id");
                                            localStorage.removeItem("point");
                                            localStorage.removeItem("email");
                                        }}
                                        className="btn btn-3 col-1"
                                    >
                                        <h5>Log Out</h5>
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className="btn btn-secondary col-1"
                                    onClick={toggle}
                                >
                                    <img src={cart} alt="cart icon" width="25px" height="25px" />
                                </button>
                            </div>
                        </div>

                        <div id="maincontent">
                            <Navtest />
                        </div>
                    </div>

                    <div>
                        <Cart isShowing={isShowing} hide={toggle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
