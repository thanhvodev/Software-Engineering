import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./ForgotPass.css";

const ForgotPass = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

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

    function isExist(value) {
        if (value.username === username && value.email === email) {
            return true;
        }
        return false;
    }

    const resetPassword = () => {
        if (useracc.filter(isExist).length === 0) alert("Tên đăng nhập hoặc email không tồn tại!");
        else if (password !== confirmPass) alert("Vui lòng xác nhận đúng mật khẩu muốn đổi!");
        else {
            const userd = firebase.database().ref("Accounts").child(useracc.filter(isExist)[0].id);
            userd.update({
                password: password,
            });
            alert("Đặt lại mật khẩu thành công!");
            window.location.href = "/login";
        }
    };

    return (
        <div className="ForgotPass">
            <div className="forgotbox">
                <div id="cancelContainer">
                    <Link id="X" to="/">
                        <h4>X</h4>
                    </Link>
                </div>
                <div id="welcome">Reset Password</div>
                <div>
                    <div class="form">
                        <div class="inp">
                            <span>Username</span>
                            <input
                                class="impBx"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>

                        <div class="inp">
                            <span>Email</span>
                            <input
                                class="impBx"
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>

                        <div class="inp">
                            <span>Password</span>
                            <input
                                class="impBx"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>

                        <div class="inp">
                            <span>Confirm Password</span>
                            <input
                                class="impBx"
                                type="password"
                                onChange={(e) => setConfirmPass(e.target.value)}
                            ></input>
                        </div>

                        <div class="remember">
                            <Link to="/login">
                                <a>Return to Login Page</a>
                            </Link>
                        </div>
                        <div class="btn-box">
                            <button type="button" class="toggle-btn1" onClick={resetPassword}>
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;
