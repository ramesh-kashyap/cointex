import React, { useState } from "react";
import Api from "../../Requests/Api";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function ChangePass() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const [passwordType, setPasswordType] = useState({
    current: "password",
    new: "password",
    confirm: "password",
  });

  const [isActive, setIsActive] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const setpasswordView = (field) => {
    setPasswordType((prevState) => ({
      ...prevState,
      [field]: prevState[field] === "password" ? "text" : "password",
    }));

    setIsActive((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (cpassword === newpassword) {
      try {
        const response = await Api.post("/change-password", {
          password: password,
          newpassword: newpassword,
        });
        if (response.data) {
          navigate("/", response.data, "Your password has been changed");
        }
      } catch (error) {
        console.error("Something went wrong, please try again:", error);
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <div>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a onClick={()=>navigate('/Userinfo')} className="left back-btn">
          <i className="icon-left-btn"></i>
        </a>
        <h3>Change login password</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <form>
            <fieldset className="mt-4">
              <label className="mb-8">Current password</label>
              <div className="box-auth-pass">
                <input
                  type={passwordType.current}
                  required
                  placeholder="Enter current password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password-field"
                />
                <span
                  className={`show-pass ${isActive.current ? "active" : ""}`}
                  onClick={() => setpasswordView("current")}
                >
                  <i className="icon-view"></i>
                  <i className="icon-view-hide"></i>
                </span>
              </div>
            </fieldset>
            <fieldset className="mt-16">
              <label className="mb-8">New login password</label>
              <div className="box-auth-pass">
                <input
                  type={passwordType.new}
                  required
                  placeholder="Enter your new password"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  className="password-field"
                />
                <span
                  className={`show-pass ${isActive.new ? "active" : ""}`}
                  onClick={() => setpasswordView("new")}
                >
                  <i className="icon-view"></i>
                  <i className="icon-view-hide"></i>
                </span>
              </div>
            </fieldset>
            <fieldset className="mt-16">
              <label className="mb-8">Confirm new login password</label>
              <div className="box-auth-pass">
                <input
                  type={passwordType.confirm}
                  required
                  placeholder="Enter your new password"
                  value={newpassword}
                  onChange={(e) => setNewpassword(e.target.value)}
                  className="password-field"
                />
                <span
                  className={`show-pass ${isActive.confirm ? "active" : ""}`}
                  onClick={() => setpasswordView("confirm")}
                >
                  <i className="icon-view"></i>
                  <i className="icon-view-hide"></i>
                </span>
              </div>
            </fieldset>
            <button className="mt-40 tf-btn lg" onClick={submitForm}>
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
