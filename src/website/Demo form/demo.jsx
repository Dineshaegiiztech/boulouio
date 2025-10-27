import React, { useState, useEffect } from "react";
import "./demo.css";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import axios from "axios";
import Swal from 'sweetalert2';
import API_CONFIG from '../../apiConfig'

export default function DemoForm() {

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
        phone: "",
        company: "",
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
        if (!formData.fullName || !formData.email || !formData.phone || !formData.company) {
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
        var phone = formData.phone;
        var email = formData.email;
        var company = formData.company;

        var arr = [name, email, phone, company];

        const encryptedCode = encryptCode(arr);

        Swal.fire({
            title: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const response = await axios.get(`${API_CONFIG.BASE_URL}/resend_demo_details/` + encryptedCode, arr, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": products.csrf_token,
                },
                withCredentials: true,
            });

            console.log("Form Data Submitted:", formData);
            // alert("Form submitted successfully!");
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
                    phone: "",
                    company: "",
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
            <div className="container-demo">
                {/* Left Side */}
                <div className="left-demo">
                    <p className="">Reach the right decision-makers with ease</p>
                    <h1 className="" style={{ color: "black"}}>
                        Accelerate your outreach and close deals faster with Boulou – a leading provider of premium B2B contact data.
                    </h1>
                    <br />
                    <p className="description-demo">
                        At <span className="red-text-demo">Boulou</span>, we deliver highly accurate B2B contact information to help you connect with key decision-makers, expand your reach, and drive meaningful sales growth.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="right-demo">
                    <h2 className="form-title-demo" style={{color:"white", textAlign:"center"}}>Book Live Demo</h2>
                    <form className="form-demo" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your full name"
                            className="input-demo"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your work email"
                            className="input-demo"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="input-demo"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter your current company"
                            className="input-demo"
                            value={formData.company}
                            onChange={handleChange}
                        />

                        <label className="checkbox-label" style={{color:"white"}}>
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
                            Request a Demo
                        </button>
                    </form>
                </div>
            </div>
            <WebFooter />
        </div>

    );
}
