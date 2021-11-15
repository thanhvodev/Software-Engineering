import React, { useState, useEffect, useContext } from "react";
import background from "../img/background.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
import firebase from "../components/firebase";
import { UserContext } from "../components/UserContext";
import Profile from "./Profile";

function Login(props) {
  const { user, setUser } = useContext(UserContext);

  const [useracc, setUseracc] = useState();
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkAcc = () => {
    useracc.forEach(checkExist);
  };

  function checkExist(value, index, array) {
    console.log(value);
    if (value.username == username && value.password == password) {
      alert("Login successfully");
      setUser(username);
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("id", JSON.stringify(value.id));
    }
  }

  useEffect(() => {
    const accRef = firebase.database().ref("Accounts");
    accRef.on("value", (snapshot) => {
      const accs = snapshot.val();
      const accList = [];
      for (let id in accs) {
        accList.push({ id, ...accs[id] });
      }
      setUseracc(accList);
      console.log(accList);
      console.log(accList[0].id)
    });
  }, []);

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
