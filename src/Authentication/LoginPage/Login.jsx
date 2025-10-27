import React, { useState, useEffect } from "react";
import "./Login.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API_CONFIG from '../../apiConfig'
import axios from "axios";
import Swal from 'sweetalert2';
import loginpageimage from '../../assets/loginoffice.png'
import mail from '../../assets/mailicon.png'
import pass from '../../assets/passicon.png'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showOTPSection, setShowOTPSection] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [showGeneratedOtp, setShowGeneratedOtp] = useState(false);

    const [products, setProducts] = useState([]);

    const [latestOtp, setLatestOtp] = useState("");

    const [resend, setResend] = useState("");

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

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    const handleLogin = async () => {
        let errors = {};
    
        if (!email) {
            errors.email = "Email is required!";
        } else if (!validateEmail(email)) {
            errors.email = "Invalid email format!";
        }
    
        if (!password) {
            errors.password = "Password is required!";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters!";
        }
    
        setErrors(errors);
    
        if (Object.keys(errors).length === 0) {
            try {
                Swal.fire({
                    title: "Loading...",
                    text: "Please wait",
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
    
                var my_arr = [email, password];
                const my_encryptedCode = encryptCode(my_arr);
                
    
                const response = await axios.get(`${API_CONFIG.BASE_URL}/login/` + my_encryptedCode, my_arr, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": products.csrf_token,
                    },
                    withCredentials: true,
                });
    
                Swal.close(); // close loading once response is received
    
                console.log(response, "login details");
    
                if (response.data.success == 400) {
                    Swal.fire({
                        icon: "warning",
                        title: "Email or Password is Invalid",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
    
                if (response.data.success == 200) {
                    var my_arr = email;
                    const my_encryptedCode = encryptCode(my_arr);
    
                    localStorage.setItem("isLoggedIn", "true");
    
                    setShowGeneratedOtp(true);
                    setShowOTPSection(true);
                    setOtp(["", "", "", ""]);
    
                    // Show loading again before OTP resend
                    Swal.fire({
                        title: "Sending OTP...",
                        text: "Please wait",
                        allowOutsideClick: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });
    
                    const otpResponse = await axios.get(`${API_CONFIG.BASE_URL}/resend/` + my_encryptedCode, my_arr, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": products.csrf_token,
                        },
                        withCredentials: true,
                    });
    
                    Swal.close(); // close loading after OTP is received
    
                    setGeneratedOtp(otpResponse.data.data);
                }
    
                localStorage.setItem("user_id", response.data.data.id);
                localStorage.setItem("user_name", response.data.data.fullname);
                console.log(response.data.data.id, "OTP");
                console.log(response.data.data.fullname, "login response.data.data.name");
            } catch (error) {
                Swal.close(); // ensure Swal is closed even if an error happens
                Swal.fire({
                    icon: "info",
                    title: "Email or Password is Invalid!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.error("Login error:", error);
            }
        }
    };

    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setResend(e.target.value)
        if (errors.email) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
    };

    //     const validOtp = latestOtp || generatedOtp;
    //     const enteredOtp = otp.join("");

    //     if (enteredOtp == validOtp) {
    //         navigate("/prospect-search")
    //         window.scroll(top)
    //     } else {
    //         Swal.fire({
    //             text: 'Invalid OTP. Please try again.',
    //             icon: 'info',
    //             showConfirmButton: false,
    //             timer: 1800
    //         });
    //     }

    // };

    const handleVerifyOTP = () => {
        const validOtp = latestOtp || generatedOtp;
        const enteredOtp = otp.join("");
    
        Swal.fire({
            title: "Verifying OTP...",
            text: "Please wait",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    
        setTimeout(() => {
            if (enteredOtp == validOtp) {
                Swal.close();
                navigate("/prospect-search");
                window.scrollTo(0, 0);
            } else {
                Swal.close();
                Swal.fire({
                    text: 'Invalid OTP. Please try again.',
                    icon: 'info',
                    showConfirmButton: false,
                    timer: 1800
                });
            }
        }, 1000); // Optional: simulate delay for UX smoothness
    };


    const resendOTP = async () => {
        try {
            Swal.fire({
                title: "Sending OTP...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
    
            const encryptedCode = encryptCode(resend);
    
            const response = await axios.get(`${API_CONFIG.BASE_URL}/forgot_opt/` + encryptedCode, resend, {
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
            }
    
            setLatestOtp(response.data.data);
            console.log(response, "response resend OTP");
        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: "error",
                title: "Failed to resend OTP",
                text: error.message || "Please try again.",
                showConfirmButton: true,
            });
            console.error("Error resending OTP:", error);
        }
    };
    

    return (
        // <div>
        //     <div className="container-fluid gradientcolorng">
        //         <div className="container row">
        //             <div className="col-lg-6">
        //                 <img src={loginpageimage} className="loginframe" alt="Login" />
        //             </div>

        //             <div className="col-lg-6">
        //                 <div className="section2">
        //                     <h1 style={{ fontWeight: "600" }}>Log in to Boulou.io</h1>
        //                     <p>Your go-to email validation tool with instant Catchall verification.</p>
        //                 </div>

        //                 <br />

        //                 <div className="login-container">
        //                     <div className="login-box">
        //                         {!showOTPSection ? (
        //                             <>
        //                                 <h2 className="label">Work Email</h2>
        //                                 <div className="input-container">
        //                                     <span className="icon"><img style={{ width: "18px" }} src={mail} alt="Mail" /></span>
        //                                     <input
        //                                         type="email"
        //                                         className="input-field"
        //                                         placeholder="Enter your email"
        //                                         value={email}
        //                                         onChange={handleEmailChange}
        //                                     />
        //                                 </div>
        //                                 {errors.email && <p className="error-text">{errors.email}</p>}

        //                                 <h2 className="label">Password</h2>
        //                                 <div className="input-container">
        //                                     <span className="icon"><img style={{ width: "18px" }} src={pass} alt="Password" /></span>
        //                                     <input
        //                                         type={showPassword ? "text" : "password"}
        //                                         className="input-field"
        //                                         placeholder="Enter your password"
        //                                         value={password}
        //                                         onChange={handlePasswordChange}
        //                                     />
        //                                     <button
        //                                         type="button"
        //                                         className="eye-icon"
        //                                         onClick={() => setShowPassword(!showPassword)}
        //                                     >
        //                                         {showPassword ? "🙈" : "👁️"}
        //                                     </button>
        //                                 </div>

        //                                 <div style={{ fontSize: "12px", textAlign: "end", color: "blue", cursor: "pointer" }}>
        //                                     <Link style={{ textDecoration: "none" }} to="/forget-password"><span>Forget Password</span></Link>
        //                                 </div>

        //                                 {errors.password && <p className="error-text">{errors.password}</p>}

        //                                 <br />

        //                                 <p className="policy-text">
        //                                     By clicking on “Login” button, you agree to our{" "}
        //                                     <Link to="/privacy-policy" className="link">Privacy Policy</Link> and{" "}
        //                                     <Link to="/terms-conditions" className="link">Terms of Service</Link>
        //                                 </p>

        //                                 <button className="create-account-btn" onClick={handleLogin}>Login</button>

        //                                 <br /><br />
        //                                 <p className="policy-text">Don’t have an account?
        //                                     <Link to="/sign-up" style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>
        //                                        &nbsp; Create an account
        //                                     </Link>
        //                                 </p>
        //                             </>
        //                         ) : (
        //                             <div className="otp-container">
        //                                 <h1 style={{ textAlign: "center", color: "#1e3a8a", fontWeight: "bold" }}>OTP Verification</h1>
        //                                 <br />
        //                                 <h2 className="label">Enter OTP</h2>
        //                                 <p>We have sent a 4-digit OTP to your email.</p>


        //                                 <div className="otp-inputs">
        //                                     {otp.map((digit, index) => (
        //                                         <input
        //                                             key={index}
        //                                             id={`otp-input-${index}`}
        //                                             type="text"
        //                                             maxLength="1"
        //                                             value={digit}
        //                                             onChange={(e) => handleChange(index, e)}
        //                                             onKeyDown={(e) => handleKeyDown(index, e)}
        //                                             className="otp-box"
        //                                         />
        //                                     ))}
        //                                 </div>

        //                                 <p style={{ color: "black", fontSize: "12px" }}>
        //                                     Didn’t receive the OTP? {" "}
        //                                     <span style={{ color: "blue", cursor: "pointer" }} onClick={resendOTP}>
        //                                         Resend OTP
        //                                     </span>
        //                                 </p>

        //                                 <div className="d-flex">
        //                                     <button className="create-account-btn" onClick={handleVerifyOTP}>
        //                                         Verify
        //                                     </button>
        //                                     <button style={{ marginLeft: "20px" }} className="back-btn" onClick={() => setShowOTPSection(false)}>
        //                                         <FaArrowLeft className="back-icon" /> Back
        //                                     </button>
        //                                 </div>
        //                             </div>
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="container-fluid gradientcolorng d-flex align-items-center justify-content-center">
            <div className="row w-100 mx-0">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <img src={loginpageimage} className="loginframe img-fluid" alt="Login" />
                </div>
                 <div className="col-lg-6">
                        <div className="section2">
                            <h1 style={{ fontWeight: "600" }}>Log in to Boulou.io</h1>
                            <p>Your go-to email validation tool with instant Catchall verification.</p>
                        </div>

                        <br />

                        <div className="login-container">
                            <div className="login-box">
                                {!showOTPSection ? (
                                    <>
                                        <h2 className="label">Work Email</h2>
                                        <div className="input-container">
                                            <span className="icon"><img style={{ width: "18px" }} src={mail} alt="Mail" /></span>
                                            <input
                                                type="email"
                                                className="input-field"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                        {errors.email && <p className="error-text">{errors.email}</p>}

                                        <h2 className="label">Password</h2>
                                        <div className="input-container">
                                            <span className="icon"><img style={{ width: "18px" }} src={pass} alt="Password" /></span>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="input-field"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <button
                                                type="button"
                                                className="eye-icon"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? "🙈" : "👁️"}
                                            </button>
                                        </div>

                                        <div style={{ fontSize: "12px", textAlign: "end", color: "blue", cursor: "pointer" }}>
                                            <Link style={{ textDecoration: "none" }} to="/forget-password"><span>Forget Password</span></Link>
                                        </div>

                                        {errors.password && <p className="error-text">{errors.password}</p>}

                                        <br />

                                        <p className="policy-text">
                                            By clicking on “Login” button, you agree to our{" "}
                                            <Link to="/privacy-policy" className="link">Privacy Policy</Link> and{" "}
                                            <Link to="/terms-conditions" className="link">Terms of Service</Link>
                                        </p>

                                        <button className="create-account-btn" onClick={handleLogin}>Login</button>

                                        <br /><br />
                                        <p className="policy-text">Don’t have an account?
                                            <Link to="/sign-up" style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>
                                               &nbsp; Create an account
                                            </Link>
                                        </p>
                                    </>
                                ) : (
                                    <div className="otp-container">
                                        <h1 style={{ textAlign: "center", color: "#1e3a8a", fontWeight: "bold" }}>OTP Verification</h1>
                                        <br />
                                        <h2 className="label">Enter OTP</h2>
                                        <p>We have sent a 4-digit OTP to your email.</p>


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
                                            <button className="create-account-btn" onClick={handleVerifyOTP}>
                                                Verify
                                            </button>
                                            <button style={{ marginLeft: "20px" }} className="back-btn" onClick={() => setShowOTPSection(false)}>
                                                <FaArrowLeft className="back-icon" /> Back
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
