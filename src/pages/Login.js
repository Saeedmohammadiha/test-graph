import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import styles from "./login.module.scss";
import Popup from "../components/Popup";
import avatar from '../assets/images.png'

export default function Login() {
  const navigate = useNavigate();
  const [togglePopup, setTogglePopup] = useState(false);
  const [titlePopup, setTitlePopup] = useState();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues((prevalue) => {
      return {
        ...prevalue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:3001/login", values, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        if (response.data.result === "success") {
          window.localStorage.setItem("token", response.data.token);
          navigate("/list");
        } else {
          setTitlePopup(response.data.result);
          setTogglePopup(!togglePopup);
        }
      })
      .catch((err) => {
        console.log(err);
        setTitlePopup("error! Please Try Again");
      });
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["form-container"]}>
          <div className={styles["form"]}>
            <img src={avatar} />
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              placeholder="Saeed"
              type="text"
              onChange={(e) => handleChange(e)}
              name="username"
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              placeholder="..."
              type="password"
              onChange={(e) => handleChange(e)}
              name="password"
            />
            <button
              className={styles["submit-button"]}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {togglePopup && (
        <Popup titlePopup={titlePopup} setTogglePopup={setTogglePopup} />
      )}
    </>
  );
}
