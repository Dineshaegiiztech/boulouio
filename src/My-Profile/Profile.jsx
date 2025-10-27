import React, { useState, useEffect } from "react";
import "./Profile.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import API_CONFIG from "../apiConfig";
import axios from "axios";

import Swal from 'sweetalert2';

import { useDispatch } from "react-redux";
import { showCredit } from "../redux/creditSlice";
import { useNavigate } from "react-router-dom";
import defaultAvatar from '../assets/profile.png'

const UserProfile = () => {
    // const defaultAvatar = "/src/assets/profile.png";
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        async function fetching() {

            fetch("https://www.boulou.io/Blulou-backend/csrf-token")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error("Error fetching products:", error));
            console.log(products, "products");

            const userId = localStorage.getItem("user_id");

            console.log(userId, "userIf profile");

            const encryptedCode = encryptCode(userId);

            const response = await axios.get(`${API_CONFIG.BASE_URL}/get_profile_details/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(response, "response my profile");

            setUser((prevUser) => ({
                ...prevUser,
                firstName: response.data.data[0].fullname || "",
                phoneNumber: response.data.data[0].phone || "",
                email: response.data.data[0].email || "",
                password: response.data.data[0].password || ""
            }));

            const responsecredit = await axios.get(`${API_CONFIG.BASE_URL}/check_credit_amount/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(responsecredit, "responsecredit");

            const credit_amount = responsecredit.data.credit_amount

            dispatch(showCredit(credit_amount));

        }
        fetching()

    }, [])

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleCancel = (e) => {
        navigate('/prospect-search')
    };

    const handleSave = async () => {

        var name = user.firstName;
        var phone = user.phoneNumber;
        var email = user.email;
        var password = user.password;

        var arr = [name, phone, email, password];

        console.log(user, "updateuser");

        const my_encryptedCode = encryptCode(arr);

        const response = await axios.get(`${API_CONFIG.BASE_URL}/update_profile_details/` + my_encryptedCode, user, {
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": products.csrf_token,
            },
            withCredentials: true,
        });


        console.log(response, "updated profile");

        if (response.data.success == 200) {
            Swal.fire({
                text: 'Profile Updated Successfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 1800
            });

        }

    };

    const handlePhoneChange = (value) => {
        setUser({ ...user, phoneNumber: value });
    };


    return (
        <div className="profile-container" style={{ marginTop: "40px" }}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="profile-header">My Profile</h2>
                <div className="avatar-container">
                    <label htmlFor="file-upload" className="-label">
                        <img src={defaultAvatar} alt="Profile" className="avatar-img" />
                    </label>
                </div>
            </div>

            <div className="profile-box">
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        readOnly
                        className="disabled-input"
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <PhoneInput
                        international
                        defaultCountry="US"
                        value={user.phoneNumber}
                        onChange={handlePhoneChange}
                        limitMaxLength={true}
                    />
                </div>

                <div className="form-group password-container">
                    <label>Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="show-password-button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <div className="d-flex justify-content-end">
                <button onClick={handleCancel} className="cancel-button">Cancel</button>&nbsp;&nbsp;&nbsp;
                <button onClick={handleSave} className="save-button">Save</button>
            </div>
            <br />
        </div>
    );
};

export default UserProfile;
