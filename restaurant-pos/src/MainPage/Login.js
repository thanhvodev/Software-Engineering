import React from "react";
import background from "../img/background.jpg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="Loginpage">
            <div className="loginbox">
                <div id="cancelContainer">
                    <Link id="X" to="/">
                        <h4>X</h4>
                    </Link>
                </div>
                <div id="welcome">Login</div>
                <div>
                    <div class="form">
                        <div class="inp">
                            <span>Username</span>
                            <input class="impBx" type="text"></input>
                        </div>

                        <div class="inp">
                            <span>Password</span>
                            <input class="impBx" type="password"></input>
                        </div>
                        <div class="remember">
                            <label id="checkbox">
                                {" "}
                                <input type="checkbox"></input> Remember me
                            </label>
                            <Link to="/forgotpass">
                                <a>Forgot password?</a>
                            </Link>
                        </div>
                        <div class="btn-box">
                            <Link to="/">
                                <button type="button" class="toggle-btn1">
                                    Log in
                                </button>
                            </Link>
                            <Link to="/register">
                                <button type="button" class="toggle-btn2">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
