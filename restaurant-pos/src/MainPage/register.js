import React, { useState, useEffect } from "react";
import firebase from "../components/firebase";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const handleOnChangeName = (e) => {
        setName(e.target.value);
    };

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    };

    function isExist(value) {
        return value.username === username;
    }

    const createAccount = () => {
        const accRef = firebase.database().ref("Accounts");
        const acc = {
            username,
            email,
            password,
            dispoint: 0,
            phistory: "",
            isOnline: false,
            z_tableRes_party_size: 0,
            z_tableRes_date: "",
            z_tableRes_time: "",
            z_tableRes_firstname: "",
            z_tableRes_lastname: "",
            z_tableRes_mobile_number: "",
            z_tableRes_email: "",
            z_tableRes_comment: "",
            Reservation_code: "",
        };

        if (useracc.filter(isExist).length === 0) {
            accRef.push(acc);
            alert("Đăng kí thành công");
        } else {
            alert("Tên đăng nhập đã tồn tại!");
        }
    };

    return (
        <div className="register">
            <div className="container h-100">
                <Link to="/category1" className="btn btn-3 bg-primary">
                    <h5>Back to Menu</h5>
                </Link>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Sign up
                                        </p>

                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example1c">
                                                        Username
                                                    </label>
                                                    <input
                                                        onChange={handleOnChangeName}
                                                        type="text"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        value={username}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example3c">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        onChange={handleOnChangeEmail}
                                                        type="email"
                                                        id="form3Example3c"
                                                        className="form-control"
                                                        value={email}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label
                                                        className="form-label"
                                                        for="form3Example4c"
                                                        value={password}
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        onChange={handleOnChangePassword}
                                                        type="password"
                                                        id="form3Example4c"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" for="form3Example4cd">
                                                        Confirm your password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="form3Example4cd"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in{" "}
                                                    <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <Link to="/">
                                                    <button
                                                        onClick={createAccount}
                                                        type="button"
                                                        className="btn btn-primary btn-lg"
                                                    >
                                                        Register
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;
