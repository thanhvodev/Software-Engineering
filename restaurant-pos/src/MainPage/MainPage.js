import React from "react";
import Navtest from "./Nav-test";
import home from "../img/home.png";
import cart from "../img/cart.svg";
import "./MainPage.css";
import useCart from "./useCart";
import Cart from "../MainPage/Cart";
import Register from "../MainPage/register";
import { Link } from "react-router-dom";

function MainPage() {
    const { isShowing, toggle } = useCart(false);
    return (
        <div className="menu">
            <div className="container-fluid  MainPage">
                <div className="row">
                    <div className="upperbody">
                        <div className="container-fluid">
                            <div className="header row">
                                <div id="Backtohome" className="col-9">
                                    <img id="home" src={home} alt="Home Icon" width="50px" height="50px" />
                                    <p>Back to Home</p>
                                </div>
                                <Link to="/register" className="btn btn-3 col-1">
                                    <h5>Register</h5>
                                </Link>
                                <Link to="/login" className="btn btn-3 col-1">
                                    <h5>Login</h5>
                                </Link>
                                <button type="button" className="btn btn-secondary col-1" onClick={toggle}>
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
