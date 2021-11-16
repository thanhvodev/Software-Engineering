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
  const email_form_local = localStorage.getItem("email")
    ? JSON.parse(localStorage.getItem("email"))
    : "";
  const point = localStorage.getItem("point")
    ? JSON.parse(localStorage.getItem("point"))
    : "";
  const [username, setUsername] = useState(username_from_local);
  const [email, setEmail] = useState(email_form_local);
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
        username: username,
        password: password,
        email: email
      })
      alert("You have successfully updated your information");
      history.push('/')
      localStorage.setItem("email", JSON.stringify(email))
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
          <div class="inp">
            <span style={{ color: "red" }}>Email</span>
            <input
              value={email}
              class="impBx"
              type="text"
              onChange={(e) => setEmail(e.target.value)}

              style={{ color: "purple", width: "50%" }}

            ></input>
          </div>
          <div class="inp">
            <span>Point</span>
            <input
              value={point}
              class="impBx"
              type="text"
              disabled
            ></input>
          </div>


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
              <span>Update Password</span>
              <input
                value={password}
                class="impBx"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div class="inp">
              <span>Confirm Update Password</span>
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
