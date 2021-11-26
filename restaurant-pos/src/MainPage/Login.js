import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import firebase from "../components/firebase";
import { UserContext } from "../components/UserContext";

function Login(props) {
    const [useracc, setUseracc] = useState();

    useEffect(() => {
        const accRef = firebase.database().ref("Accounts");
        accRef.on("value", (snapshot) => {
            const accs = snapshot.val();
            const accList = [];
            for (let id in accs) {
                accList.push({ id, ...accs[id] });
            }
            setUseracc(accList);
        });
    }, []);

    const { user, setUser } = useContext(UserContext);

    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    };

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const checkAcc = () => {
        if (useracc.filter(isExist).length !== 0) {
            alert("Đăng nhập thành công");
        } else {
            alert("Tài khoản hoặc mật khẩu không đúng!");
        }
    };

    function isExist(value) {
        if (value.username === username && value.password === password) {
            localStorage.setItem("username", JSON.stringify(username));
            localStorage.setItem("id", JSON.stringify(value.id));
            localStorage.setItem("email", JSON.stringify(value.email));
            localStorage.setItem("point", JSON.stringify(value.dispoint));
            const user = { name: username, discount: value.dispoint };
            setUser(user);
            return true;
        }
        return false;
    }

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
                            <input
                                onChange={handleOnChangeName}
                                value={username}
                                class="impBx"
                                type="text"
                            ></input>
                        </div>

                        <div class="inp">
                            <span>Password</span>
                            <input
                                onChange={handleOnChangePassword}
                                value={password}
                                class="impBx"
                                type="password"
                            ></input>
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
                                <button
                                    onClick={() => {
                                        checkAcc();
                                    }}
                                    type="button"
                                    class="toggle-btn1"
                                >
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
