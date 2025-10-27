import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Forget.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import API_CONFIG from '../../apiConfig'
import mail from '../../assets/mailicon.png'
import loginpageimage from '../../assets/loginoffice.png'
import pass from '../../assets/passicon.png'

export default function Forget() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [showOTPSection, setShowOTPSection] = useState(false);
    const [showPasswordSection, setShowPasswordSection] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [showGeneratedOtp, setShowGeneratedOtp] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [products, setProducts] = useState([]);

    const [ResetOTP, setResetOTP] = useState("")
    const [latestOtp, setLatestOtp] = useState("");


    useEffect(() => {
        fetch("https://www.boulou.io/Blulou-backend/csrf-token")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
        console.log(setProducts, "products");

    }, []);


    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const generateRandomOtp = () => {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    // const handleLogin = async () => {
    //     let errors = {};
    //     if (!email) {
    //         errors.email = "Email is required!";
    //     } else if (!validateEmail(email)) {
    //         errors.email = "Invalid email format!";
    //     }

    //     setErrors(errors);

    //     if (Object.keys(errors).length === 0) {

    //         var my_arr = [email];
    //         const my_encryptedCode = encryptCode(my_arr);

    //         const response = await axios.get(`${API_CONFIG.BASE_URL}/reset_password/` + my_encryptedCode, my_arr, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRF-Token": products.csrf_token,
    //             },
    //             withCredentials: true,
    //         });

    //         console.log(response, "response");

    //         if (response.data.success == 200) {
    //             setShowOTPSection(true);
    //             setResetOTP(response.data.data)
    //         }

    //         else if (response.data.success == 400) {
    //             Swal.fire({
    //                 icon: "warning",
    //                 title: "Email is Invalid",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }

    //         const newOtp = generateRandomOtp();
    //         setGeneratedOtp(newOtp);
    //         setShowGeneratedOtp(true);
    //         setOtp(["", "", "", ""]);
    //     }
    // };

    const handleLogin = async () => {
        let errors = {};

        if (!email) {
            errors.email = "Email is required!";
        } else if (!validateEmail(email)) {
            errors.email = "Invalid email format!";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                Swal.fire({
                    title: "Requesting Reset Link...",
                    text: "Please wait",
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                var my_arr = [email];
                const my_encryptedCode = encryptCode(my_arr);

                const response = await axios.get(`${API_CONFIG.BASE_URL}/reset_password/` + my_encryptedCode, my_arr, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": products.csrf_token,
                    },
                    withCredentials: true,
                });

                Swal.close();
                console.log(response, "response");

                if (response.data.success == 200) {
                    setShowOTPSection(true);
                    setResetOTP(response.data.data);
                } else if (response.data.success == 400) {
                    Swal.fire({
                        icon: "warning",
                        title: "Email is Invalid",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                const newOtp = generateRandomOtp();
                setGeneratedOtp(newOtp);
                setShowGeneratedOtp(true);
                setOtp(["", "", "", ""]);
            } catch (error) {
                Swal.close();
                console.error("Error during password reset:", error);
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong",
                    text: "Unable to process your request. Please try again.",
                    showConfirmButton: true
                });
            }
        }
    };

    const handleChange = (index, event) => {
        const value = event.target.value;
        if (/^\d?$/.test(value)) {
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            let newOtp = [...otp];
            if (newOtp[index]) {
                newOtp[index] = "";
            } else if (index > 0) {
                newOtp[index - 1] = "";
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
            setOtp(newOtp);
        }
    };

    // const handleVerifyOTP = async () => {
    //     const enteredOtp = otp.join("");

    //     const validOtp = latestOtp || ResetOTP;

    //     if (enteredOtp == validOtp) {

    //         setShowPasswordSection(true);

    //     } else {
    //         alert("Invalid OTP! Please try again.");
    //     }
    // };

    const handleVerifyOTP = async () => {
        const enteredOtp = otp.join("");
        const validOtp = latestOtp || ResetOTP;

        console.log(enteredOtp, "enteredOtp");

        console.log(validOtp, "validOtp");

        Swal.fire({
            title: "Verifying OTP...",
            text: "Please wait",
            allowOutsideClick: false,
            // didOpen: () => {
            //     Swal.showLoading();
            // }
        });

        try {
            if (enteredOtp == validOtp) {
                Swal.close();
                Swal.fire({
                    icon: "success",
                    title: "OTP Verified!",
                    showConfirmButton: false,
                    timer: 1500
                });

                setShowPasswordSection(true);
            } else {
                Swal.close();
                Swal.fire({
                    icon: "error",
                    title: "Invalid OTP",
                    text: "Please try again.",
                    showConfirmButton: false,
                    timer: 1800
                });
            }
        } catch (error) {
            Swal.close();
            console.error("OTP verification error:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong. Please try again.",
                showConfirmButton: true
            });
        }
    };


    // const handleUpdatePassword = async () => {
    //     let errors = {};

    //     if (!password) {
    //         errors.password = "Password is required!";
    //     } else if (password.length < 6) {
    //         errors.password = "Password must be at least 6 characters long!";
    //     }

    //     if (!confirmPassword) {
    //         errors.confirmPassword = "Confirm Password is required!";
    //     } else if (password !== confirmPassword) {
    //         errors.confirmPassword = "Passwords do not match!";
    //     }

    //     setErrors(errors);

    //     if (Object.keys(errors).length === 0) {

    //         var my_arr = [email, confirmPassword]
    //         const my_encryptedCode = encryptCode(my_arr);

    //         const response = await axios.get(`${API_CONFIG.BASE_URL}/change_password/` + my_encryptedCode, my_arr, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRF-Token": products.csrf_token,
    //             },
    //             withCredentials: true,
    //         });

    //         console.log(response, "change password");

    //         if (response.data.success == 200) {

    //             Swal.fire({
    //                 icon: "success",
    //                 title: "Password Updated Succesfully",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             })

    //             setTimeout(() => {
    //                 navigate("/");
    //             }, 2000);

    //         }


    //     }
    // };

    const handleUpdatePassword = async () => {
        let errors = {};

        if (!password) {
            errors.password = "Password is required!";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long!";
        }

        if (!confirmPassword) {
            errors.confirmPassword = "Confirm Password is required!";
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match!";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                Swal.fire({
                    title: "Updating Password...",
                    text: "Please wait",
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                var my_arr = [email, confirmPassword];
                const my_encryptedCode = encryptCode(my_arr);

                const response = await axios.get(`${API_CONFIG.BASE_URL}/change_password/` + my_encryptedCode, my_arr, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": products.csrf_token,
                    },
                    withCredentials: true,
                });

                Swal.close();
                console.log(response, "change password");

                if (response.data.success == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Password Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Update Failed",
                        text: "Something went wrong. Please try again.",
                        showConfirmButton: true
                    });
                }
            } catch (error) {
                Swal.close();
                console.error("Password update error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to update password. Please try again later.",
                    showConfirmButton: true
                });
            }
        }
    };


    // const resendOTP = async () => {

    //     const encryptedCode = encryptCode(email);

    //     const response = await axios.get(`${API_CONFIG.BASE_URL}/forgot_opt/` + encryptedCode, email, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-CSRF-Token": products.csrf_token,
    //         },
    //         withCredentials: true,
    //     });

    //     if (response.data.success == 200) {
    //         Swal.fire({
    //             icon: "success",
    //             title: "OTP Sent to your Email",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    //     setLatestOtp(response.data.data);
    //     console.log(response, "response resend OTP");

    // }

    const resendOTP = async () => {
        try {
            Swal.fire({
                title: "Resending OTP...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const encryptedCode = encryptCode(email);

            const response = await axios.get(`${API_CONFIG.BASE_URL}/forgot_opt/` + encryptedCode, email, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": products.csrf_token,
                },
                withCredentials: true,
            });

            Swal.close();

            if (response.data.success == 200) {
                Swal.fire({
                    icon: "success",
                    title: "OTP Sent to your Email",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Resend OTP",
                    text: "Please try again later.",
                    showConfirmButton: true
                });
            }

            setLatestOtp(response.data.data);
            console.log(response, "response resend OTP");

        } catch (error) {
            Swal.close();
            console.error("Error while resending OTP:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong. Please try again.",
                showConfirmButton: true
            });
        }
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (errors.confirmPassword) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
        }
    };


    return (
        <div className="container-fluid gradientcolorng">
            <div className="container row">
                <div className="col-lg-6">
                    <img src={loginpageimage} className="loginframe" alt="Login" />
                </div>
                <div className="col-lg-6">
                    <div className="section2">
                        <h1 style={{ fontWeight: "600" }}>Log in to Boulou.io</h1>
                        <p>Your go-to email validation tool with instant Catchall verification.</p>
                    </div>
                    <h1 style={{ textAlign: "center", color: "#1e3a8a", fontWeight: "bold" }}>Reset Password</h1>
                    <br />
                    <div className="login-container">
                        <div className="login-box">
                            {!showOTPSection && !showPasswordSection && (
                                <>
                                    <h2 className="label">Work Email</h2>
                                    <div className="input-container">
                                        <span className="icon"><img style={{ width: "18px" }} src={mail} alt="Mail" /></span>
                                        <input
                                            type="email"
                                            className="input-field"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {errors.email && <p className="error-text">{errors.email}</p>}
                                    <button className="create-account-btn" onClick={handleLogin}>Login</button>
                                </>
                            )}

                            {showOTPSection && !showPasswordSection && (
                                <div className="otp-container">
                                    <h2 style={{ textAlign: "center", color: "#1e3a8a", fontWeight: "bold" }}>OTP Verification</h2>
                                    <br />
                                    <h2 className="label">Enter OTP</h2>
                                    <p>We have sent a 4-digit OTP to your email.</p>
                                    {/* {showGeneratedOtp && (
                                        <p style={{ color: "black", fontSize: "14px" }}>
                                            <strong>Generated OTP (for testing): {generatedOtp}</strong>
                                        </p>
                                    )} */}
                                    <div className="otp-inputs">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${index}`}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleChange(index, e)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                className="otp-box"
                                            />
                                        ))}

                                    </div>
                                    <p style={{ color: "black", fontSize: "12px" }}>
                                        Didn’t receive the OTP? {" "}
                                        <span style={{ color: "blue", cursor: "pointer" }} onClick={resendOTP}>
                                            Resend OTP
                                        </span>
                                    </p>
                                    <div className="d-flex">
                                        <button className="create-account-btn" onClick={handleVerifyOTP}>Verify</button>
                                        <button style={{ marginLeft: "20px" }} className="back-btn" onClick={() => setShowOTPSection(false)}>
                                            <FaArrowLeft className="back-icon" /> Back
                                        </button>
                                    </div>

                                </div>
                            )}

                            {/* {showPasswordSection && (
                                <div className="password-reset-container">
                                    <h1 style={{ textAlign: "center", color: "#1e3a8a", fontWeight: "bold" }}>Reset Password</h1>
                                    <br />
                                    <h2 className="label">New Password</h2>
                                    <input
                                        type="password"
                                        className="input-field"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    {errors.password && <p className="error-text">{errors.password}</p>}

                                    <h2 className="label">Confirm Password</h2>
                                    <input
                                        type="password"
                                        className="input-field"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                                    <button className="update-btn" onClick={handleUpdatePassword}>Update</button>
                                </div>
                            )} */}
                            {showPasswordSection && (
                                <div className="password-reset-container">
                                    {/* <h1 style={{ textAlign: "center", color: "#1e3a8a", fontWeight: "bold" }}>Reset Password</h1> */}
                                    <br />

                                    {/* New Password Field */}
                                    <h2 className="label">New Password</h2>
                                    <div className="input-container">
                                        <span className="icon">
                                            <img style={{ width: "18px" }} src={pass} alt="Password" />
                                        </span>
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            className="input-field"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <button
                                            type="button"
                                            className="eye-icon"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                    {errors.password && <p className="error-text">{errors.password}</p>}

                                    {/* Confirm Password Field */}
                                    <h2 className="label">Confirm Password</h2>
                                    <div className="input-container">
                                        <span className="icon">
                                            <img style={{ width: "18px" }} src={pass} alt="Password" />
                                        </span>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            className="input-field"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                        <button
                                            type="button"
                                            className="eye-icon"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                                    <button className="update-btn" onClick={handleUpdatePassword}>Update</button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
