import React, { useState, useEffect } from "react";
import "./contact.css";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import axios from "axios";
import Swal from 'sweetalert2';
import API_CONFIG from '../../apiConfig'

export default function Contact() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("https://www.boulou.io/Blulou-backend/csrf-token")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
        console.log(setProducts, "products");

    }, [])

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        helpType: "",
        subject: "",
        message: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.fullName || !formData.email || !formData.helpType || !formData.subject || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!emailPattern.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!formData.agree) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        var name = formData.fullName;
        var email = formData.email;
        var helpType = formData.helpType;
        var subject = formData.subject;
        var message = formData.message;

        var arr = [name, email, helpType, subject, message];
        
        console.log(arr,"asdsadsadsadsadsa");
        

        const encryptedCode = encryptCode(arr);

        Swal.fire({
            title: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const response = await axios.get(`${API_CONFIG.BASE_URL}/store_contact_detals/` + encryptedCode, arr, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": products.csrf_token,
                },
                withCredentials: true,
            });

            console.log("Form Data Submitted:", formData);
            Swal.close();

            if (response.data.success == 200) {
                Swal.fire({
                    icon: "success",
                    title: "Form submitted successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    fullName: "",
                    email: "",
                    helpType: "",
                    subject: "",
                    message: "",
                    agree: false,
                });
            }

        }

        catch (error) {
            Swal.close();
            Swal.fire({
                icon: "error",
                title: "Submission failed",
                text: "Something went wrong. Please try again later.",
            });
            console.error("Submission error:", error);
        }
    }

    return (

        <div className="body-demo">
            <WebNavbar />
            <div className="container">
                <h2 style={{ textAlign: "center", color: "black", fontWeight: "bold" }}>Contact-Us</h2>
                <br />
                <div className="row">
                    <div className="col-lg-6" style={{ paddingTop: "60px" }}>
                        <h1>Verified B2B Data Provider Is The Right Choice
                            For Your Success!</h1>

                        <h5 style={{ color: "black", paddingTop: "60px" }}>Boulou Custom-built, accurate B2B data solutions, including the UK B2B email database
                            are specially crafted to meet all your needs.</h5>
                    </div>

                    <div className="col-lg-6">
                        <div className="right-demos">
                            <h2 className="form-title-demo" style={{ color: "white", textAlign: "center" }}>Contact Form</h2>
                            <form className="form-demo" onSubmit={handleSubmit}>
                                <label htmlFor="helpType" style={{ color: "white", marginBottom: "5px" }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Your full name"
                                    className="input-demo"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                <label htmlFor="helpType" style={{ color: "white", marginBottom: "5px" }}>
                                    Business Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your work email"
                                    className="input-demo"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="helpType" style={{ color: "white", marginBottom: "5px" }}>
                                    How can we help you?
                                </label>
                                <select
                                    name="helpType"
                                    className="input-demo"
                                    value={formData.helpType || ""}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="Talk to Sales">Talk to Sales</option>
                                    <option value="Talk to Support">Talk to Support</option>
                                    <option value="Talk to HR">Talk to HR</option>
                                    <option value="Remove my data">Remove my data</option>
                                    <option value="Others">Others</option>
                                </select>
                                <label htmlFor="helpType" style={{ color: "white", marginBottom: "5px" }}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter your current company"
                                    className="input-demo"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />

                                <label htmlFor="helpType" style={{ color: "white", marginBottom: "5px" }}>
                                    Message
                                </label>
                                <textarea
                                    type="text"
                                    name="message"
                                    placeholder="Enter your current company"
                                    className="input-demo"
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                                <label className="checkbox-label" style={{ color: "white" }}>
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        className="checkbox-demo"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                        required
                                    />
                                    I agree to Terms and Conditions & Privacy Policy
                                </label>

                                <button type="submit" className="submit-button-demo">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <WebFooter />
        </div>

    );
}
