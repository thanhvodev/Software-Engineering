import firebase from "./../components/firebase";
import React, { useState, useEffect } from "react";
import { UserContext } from "../components/UserContext";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Profile({ history }) {
  const username_from_local = localStorage.getItem("username")
    ? JSON.parse(localStorage.getItem("username"))
    : "";
  const id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id"))
    : "";
  const [username, setUsername] = useState(username_from_local);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  
  useEffect(() => {
    if (username_from_local === "") {
      history.push("/login");
    }
  });
  const updateProfile = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Your password is not correct");
    } else {
      const user = firebase.database().ref("Accounts").child(id);
      user.update({
        username:username,
        password:password
      })
      alert("You have successfully updated your information");
      history.push('/')
    }
  };
  return (
    <form className="Loginpage" onSubmit={updateProfile}>
      <div className="loginbox">
        <div id="cancelContainer">
          <Link id="X" to="/">
            <h4>X</h4>
          </Link>
        </div>
        <div style={{ fontSize: "2rem", marginLeft: "2rem" }}>User Profile</div>
        <div>
          <div class="form">
            <div class="inp">
              <span>Username</span>
              <input
                value={username}
                class="impBx"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

            <div class="inp">
              <span>Password</span>
              <input
                value={password}
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
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              ></input>
            </div>
            <div class="btn-box">
              <button type="submit" class="toggle-btn1">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Profile;
