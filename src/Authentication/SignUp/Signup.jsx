import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaBriefcase, FaGlobe } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getExampleNumber } from 'libphonenumber-js';
import axios from "axios";
import Swal from 'sweetalert2';
import API_CONFIG from '../../apiConfig'
import sign from '../../assets/signup.png'

const CreateAccount = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'business'
    const [formData, setFormData] = useState({
        // Profile Info
        fullName: "",
        phoneNumber: "",
        workEmail: "",
        password: "",
        // Business Info
        companyName: "",
        jobTitle: "",
        website: "",
        industry: ""
    });
    const [otp, setOtp] = useState("");
    const [userOtp, setUserOtp] = useState("");
    const [verified, setVerified] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [products, setProducts] = useState([]);
    const [valueotp, setvalueotp] = useState("");
    const [latestOtp, setLatestOtp] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://www.boulou.io/Blulou-backend/csrf-token")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
        console.log(setProducts, "products");
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    function decryptCode(encryptedCode) {
        return decodeURIComponent(escape(atob(encryptedCode)));
    }

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Profile Form Data on Submit:", formData);
        var name = formData.fullName;
        var phone = formData.phoneNumber;
        var email = formData.workEmail;
        var password = formData.password;

        var arr = [name, phone, email, password];
        const encryptedCode = encryptCode(arr);

        try {
            Swal.fire({
                title: "Creating Account...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const response = await axios.get(`${API_CONFIG.BASE_URL}/create_account/` + encryptedCode, formData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": products.csrf_token,
                },
                withCredentials: true,
            });

            Swal.close();

            console.log("API Response:", response.data);

            if (response.data.success == 200) {
                const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
                setOtp(generatedOtp);
                setGeneratedOtp(generatedOtp);

                const dataArray = Object.entries(response.data);
                const valueotp = dataArray[1][1];
                setvalueotp(valueotp);

                setActiveTab('otp'); // Move to OTP verification
            } else if (response.data.success == 400) {
                Swal.fire({
                    text: 'Email Already Exist',
                    icon: 'info',
                    showConfirmButton: false,
                    timer: 1800
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: "Please try again.",
                    showConfirmButton: true
                });
            }
        } catch (error) {
            Swal.close();
            console.error("API Error:", error);

            if (error.response) {
                console.error("Server Response Data:", error.response.data);
                console.error("Status Code:", error.response.status);

                if (error.response.status == 500) {
                    Swal.fire({
                        text: 'Something Went Wrong. Please Try Again Later!!',
                        icon: 'info',
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: error.response.data.message || "Unknown error",
                        showConfirmButton: true,
                    });
                }
            } else if (error.request) {
                console.error("No Response from Server:", error.request);
                Swal.fire({
                    icon: "warning",
                    title: "No Response",
                    text: "Server is not responding.",
                    showConfirmButton: true
                });
            } else {
                console.error("Request Error:", error.message);
                Swal.fire({
                    icon: "error",
                    title: "Request Failed",
                    text: "Something went wrong.",
                    showConfirmButton: true
                });
            }
        }
    };

    const handleBusinessSubmit = async (e) => {
        e.preventDefault();
        
        console.log("Business Form Data on Submit:", formData);
        var company = formData.companyName;
        var jobTitle = formData.jobTitle;
        var website = formData.website;
        var industry = formData.industry;

        var arr = [company, jobTitle, website, industry];
        const encryptedCode = encryptCode(arr);

        try {
            Swal.fire({
                title: "Creating Business Account...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const response = await axios.get(`${API_CONFIG.BASE_URL}/create_business_account/` + encryptedCode, formData, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": products.csrf_token,
                },
                withCredentials: true,
            });

            Swal.close();

            console.log("API Response:", response.data);

            if (response.data.success == 200) {
                const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
                setOtp(generatedOtp);
                setGeneratedOtp(generatedOtp);

                const dataArray = Object.entries(response.data);
                const valueotp = dataArray[1][1];
                setvalueotp(valueotp);

                setActiveTab('otp'); // Move to OTP verification
            } else if (response.data.success == 400) {
                Swal.fire({
                    text: 'Business Email Already Exist',
                    icon: 'info',
                    showConfirmButton: false,
                    timer: 1800
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: "Please try again.",
                    showConfirmButton: true
                });
            }
        } catch (error) {
            Swal.close();
            console.error("API Error:", error);

            if (error.response) {
                console.error("Server Response Data:", error.response.data);
                console.error("Status Code:", error.response.status);

                if (error.response.status == 500) {
                    Swal.fire({
                        text: 'Something Went Wrong. Please Try Again Later!!',
                        icon: 'info',
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: error.response.data.message || "Unknown error",
                        showConfirmButton: true,
                    });
                }
            } else if (error.request) {
                console.error("No Response from Server:", error.request);
                Swal.fire({
                    icon: "warning",
                    title: "No Response",
                    text: "Server is not responding.",
                    showConfirmButton: true
                });
            } else {
                console.error("Request Error:", error.message);
                Swal.fire({
                    icon: "error",
                    title: "Request Failed",
                    text: "Something went wrong.",
                    showConfirmButton: true
                });
            }
        }
    };

    const verifyOtp = async () => {
        try {
            const validOtp = latestOtp || valueotp;
    
            Swal.fire({
                title: "Verifying OTP...",
                text: "Please wait",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
    
            if (userOtp == validOtp) {
                setVerified(true);
    
                if (activeTab === 'profile') {
                    const old_name = formData.fullName;
                    const old_phone = formData.phoneNumber;
                    const old_email = formData.workEmail;
                    const old_password = formData.password;
    
                    const my_arr = [old_name, old_phone, old_email, old_password];
                    const my_encryptedCode = encryptCode(my_arr);
    
                    const response = await axios.get(`${API_CONFIG.BASE_URL}/create_my_account/` + my_encryptedCode, formData, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": products.csrf_token,
                        },
                        withCredentials: true,
                    });
    
                    console.log(response, "API Response");
                } else {
                    const old_company = formData.companyName;
                    const old_jobTitle = formData.jobTitle;
                    const old_website = formData.website;
                    const old_industry = formData.industry;
    
                    const my_arr = [old_company, old_jobTitle, old_website, old_industry];
                    const my_encryptedCode = encryptCode(my_arr);
    
                    const response = await axios.get(`${API_CONFIG.BASE_URL}/create_my_business_account/` + my_encryptedCode, formData, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": products.csrf_token,
                        },
                        withCredentials: true,
                    });
    
                    console.log(response, "API Response");
                }
    
                Swal.close();
    
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                Swal.close();
                Swal.fire({
                    text: 'Invalid OTP. Please try again.',
                    icon: 'info',
                    showConfirmButton: false,
                    timer: 1800
                });
            }
        } catch (error) {
            Swal.close();
            console.error("Error fetching OTP:", error);
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                text: "Unable to verify OTP. Please try again.",
                showConfirmButton: true
            });
        }
    };

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
    
            var email = activeTab === 'profile' ? formData.workEmail : formData.companyEmail;
            var arr = email;
    
            const encryptedCode = encryptCode(arr);
    
            const response = await axios.get(`${API_CONFIG.BASE_URL}/resend/` + encryptedCode, arr, {
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
            console.error("Error resending OTP:", error);
            Swal.fire({
                icon: "error",
                title: "Failed to resend OTP",
                text: "Please try again later.",
                showConfirmButton: true
            });
        }
    };

    const handleOtpInput = (e, index) => {
        let value = e.target.value;
        if (isNaN(value)) return;

        let otpArray = userOtp.split("");
        otpArray[index] = value;
        setUserOtp(otpArray.join(""));

        if (value && index < 3) {
            document.getElementsByClassName("otp-box")[index + 1].focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && index > 0) {
            let otpArray = userOtp.split("");
            otpArray[index] = "";
            setUserOtp(otpArray.join(""));
            document.getElementsByClassName("otp-box")[index - 1].focus();
        }
    };

    const handlePhoneChange = (value) => {
        if (value) {
            try {
                const phoneNumber = parsePhoneNumber(value);
                if (phoneNumber) {
                    const countryCode = phoneNumber.country;
                    const exampleNumber = getExampleNumber(countryCode);

                    if (exampleNumber) {
                        const maxLength = exampleNumber.nationalNumber.length;
                        const enteredNumber = phoneNumber.nationalNumber || "";

                        if (enteredNumber.length > maxLength) {
                            setError(`Phone number exceeds the limit for ${countryCode}`);
                            return;
                        }
                    }
                }
            } catch (err) {
                console.error("Error parsing phone number:", err);
            }
        }

        setError("");
        setFormData({ ...formData, phoneNumber: value });
    };

    return (
        <div className="container-fluid signupimage">
            <div className="row">
                <div className="col-lg-6">
                    <img src={sign} className="signframe" alt="signup" />
                </div>
                <div className="col-lg-6">
                    <div className="container mobile-container" style={{ width: "75%" }}>
                        <h1 style={{ textAlign: "center", color: "white", marginBottom: "20px" }}>Create an account</h1>

                        {activeTab !== 'otp' && (
                            <div className="modern-tab-container">
                                <div className="modern-tabs">
                                    <button
                                        className={`modern-tab ${activeTab === 'profile' ? 'modern-tab-active' : ''}`}
                                        onClick={() => setActiveTab('profile')}
                                    >
                                        <span className="modern-tab-text">Profile Info</span>
                                        <div className="modern-tab-indicator"></div>
                                    </button>
                                    <button
                                        className={`modern-tab ${activeTab === 'business' ? 'modern-tab-active' : ''}`}
                                        onClick={() => setActiveTab('business')}
                                    >
                                        <span className="modern-tab-text">Business Info</span>
                                        <div className="modern-tab-indicator"></div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'profile' && (
                            <form onSubmit={handleProfileSubmit}>
                                <input type="hidden" name="_token" value={products.csrf_token} />
                                <div style={{ textAlign: "left" }}>
                                    <span>Full Name</span>
                                </div>

                                <div className="input-group">
                                    <FaUser className="icon" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <span>Phone Number</span>
                                </div>
                                <div className="phone-input-wrapper">
                                    <PhoneInput
                                        international
                                        defaultCountry="US"
                                        value={formData.phoneNumber}
                                        onChange={handlePhoneChange}
                                        limitMaxLength={true}
                                    />
                                    {error && <p style={{ color: "red" }}>{error}</p>}
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <span>Work Email</span>
                                </div>
                                <div className="input-group">
                                    <FaEnvelope className="icon" />
                                    <input
                                        type="email"
                                        name="workEmail"
                                        placeholder="Work Email"
                                        value={formData.workEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <span>Password</span>
                                </div>
                                <div className="input-group" style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
                                    <FaLock className="icon" style={{ marginRight: "10px" }} />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            flex: 1,
                                            paddingRight: "40px",
                                            height: "40px",
                                        }}
                                    />

                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: "absolute",
                                            right: "10px",
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            color: "#333",
                                        }}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <div className="checkbox-container">
                                    <input type="checkbox" required />
                                    <span style={{ color: "black" }}>
                                        I agree to the <a style={{ textDecoration: "none" }} href="#">Terms & Conditions</a> and <a style={{ textDecoration: "none" }} href="#">Privacy Policy</a>
                                    </span>
                                </div>

                                <button type="submit" className="create-btn">Create Account</button>
                            </form>
                        )}

                        {activeTab === 'business' && (
                            <form onSubmit={handleBusinessSubmit}>
                                <div style={{ textAlign: "left" }}>
                                    <span>Company Name</span>
                                </div>
                                <div className="input-group">
                                    <FaBuilding className="icon" />
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <span>Job Title</span>
                                </div>
                                <div className="input-group">
                                    <FaBriefcase className="icon" />
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        placeholder="Job Title"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                <div style={{ textAlign: "left" }}>
                                    <span>Company Email</span>
                                </div>
                                <div className="input-group">
                                    <FaEnvelope className="icon" />
                                    <input
                                        type="email"
                                        name="workEmail"
                                        placeholder="Company Email"
                                        value={formData.workEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <br />
                                {/* <div style={{ textAlign: "left" }}>
                                    <span>Website (Optional)</span>
                                </div>
                                <div className="input-group">
                                    <FaGlobe className="icon" />
                                    <input
                                        type="text"
                                        name="website"
                                        placeholder="Website"
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                </div> */}
                              
                                {/* <div style={{ textAlign: "left" }}>
                                    <span>Industry (Optional)</span>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="industry"
                                        placeholder="Industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                    />
                                </div> */}
                          
                                <div style={{ textAlign: "left" }}>
                                    <span>Password</span>
                                </div>
                                <div className="input-group" style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
                                    <FaLock className="icon" style={{ marginRight: "10px" }} />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            flex: 1,
                                            paddingRight: "40px",
                                            height: "40px",
                                        }}
                                    />

                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: "absolute",
                                            right: "10px",
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            color: "#333",
                                        }}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" required />
                                    <span style={{ color: "black" }}>
                                        I agree to the <a style={{ textDecoration: "none" }} href="#">Terms & Conditions</a> and <a style={{ textDecoration: "none" }} href="#">Privacy Policy</a>
                                    </span>
                                </div>

                                <button type="submit" className="create-btn">Create Business Account</button>
                            </form>
                        )}

                        {activeTab === 'otp' && (
                            <div className="otp-containers">
                                <h3 className="OTPwords">OTP Verification</h3>
                                <p>Enter the OTP sent to {formData.workEmail}</p>

                                <div className="otp-inputs">
                                    {Array(4).fill("").map((_, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            className="otp-box"
                                            value={userOtp[index] || ""}
                                            onChange={(e) => handleOtpInput(e, index)}
                                            onKeyDown={(e) => handleBackspace(e, index)}
                                        />
                                    ))}
                                </div>

                                <div className="d-flex">
                                    <button className="create-account-btn" onClick={verifyOtp}>
                                        Verify
                                    </button>
                                    <button style={{ marginLeft: "20px" }} className="back-btn" onClick={() => setActiveTab(verified ? 'profile' : activeTab)}>
                                        <FaArrowLeft className="back-icon" /> Back
                                    </button>
                                </div>
                                <br />
                                <p>
                                    Didn't receive the OTP? <a style={{ textDecoration: "none" }} href="#" onClick={resendOTP}>Resend OTP</a>
                                </p>
                            </div>
                        )}

                        {verified && (
                            <div className="success-message" style={{ marginTop: "100px" }}>
                                <h3>🎉 Account Created Successfully!</h3>
                                <p>Welcome to our platform.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;