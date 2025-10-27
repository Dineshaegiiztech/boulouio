import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import navbar from '../assets/navbar.png';
import subscription from '../assets/subscription.png';
import coins from '../assets/coins.png';
import profile from '../assets/profile.png';

function MyNavbar() {

    const [Name, setName] = useState("");
    const creditsLeft = useSelector((state) => state.credit.creditsLeft);
    const navigate = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem("user_name"));
    }, []);

    const Logout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/", { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">

                {/* Logo */}
                <a className="navbar-brand" href="/prospect-search">
                    <img src={navbar} style={{ height: "40px", width: "130px" }} alt="Logo" />
                </a>

                {/* Toggler */}
                <button  style={{padding:"12px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* Center Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{paddingLeft:"45px", gap:"20px"}}>
                        <li className="nav-item">
                            <a className="nav-link Prospect" href="/prospect-search">Prospect Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link Prospect" href="/saved-search">Saved Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link Prospect" href="/downloads">Downloads</a>
                        </li>
                    </ul>

                    {/* Right Section */}
                    <div className="d-flex align-items-center">

                        {/* Subscriptions */}
                        <a href="/subscription" className="nav-link d-flex align-items-center">
                            <img src={subscription} style={{ width: "20px" }} alt="Subscriptions" />&nbsp;
                            <span style={{ fontSize: "12px", color: "white" }}>Subscriptions</span>
                        </a>

                        {/* Credit Box */}
                        <div className="credit-box d-flex align-items-center mx-3">
                            <span style={{ fontSize: "12px" }} className="credit-text">Credit {creditsLeft}</span>&nbsp;
                            <img src={coins} style={{ width: "20px" }} alt="Credits" />
                        </div>

                        {/* Profile Dropdown */}
                        <div className="dropdown user-profile">
                            <button className="btn dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={profile} alt="User" className="profile-img" /> {Name}
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/my-profile">Profile</a></li>
                                <li><a className="dropdown-item" href="/payments-tracking">Payment Tracking</a></li>
                                <li><a className="dropdown-item" href="/credits-tracking">Credits Tracking</a></li>
                                <li><a className="dropdown-item">Help</a></li>
                                <li><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={Logout}>Logout</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar;
