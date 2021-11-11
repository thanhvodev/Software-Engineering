import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navtest from "./Nav-test";
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
import Category6 from "./Category6";
import Category5 from "./Category5";
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
        <div className="container-fluid">
            <div className="row">
                <div>
                    <div className="MainPage">
                        <div className="container-fluid">
                            <div className="row">
                                <div id="Backtohome" className="col-11">
                                    <img id="home" src={home} alt="Home Icon" width="50px" height="50px" />
                                    <p>Back to Home</p>
                                    <Link
                                        to="/register"
                                        style={{
                                            marginLeft: "50px",
                                            marginTop: "15px",
                                        }}
                                    >
                                        <button>Register</button>
                                    </Link>
                                </div>

                                <button type="button" className="btn btn-secondary col-1" onClick={toggle}>
                                    <img src={cart} alt="cart icon" width="25px" height="25px" />
                                </button>
                            </div>
                        </div>

                        <div id="maincontent">
                            <Navtest />
                        </div>
                    </div>
                </div>
                <div>
                    <Cart isShowing={isShowing} hide={toggle} />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
