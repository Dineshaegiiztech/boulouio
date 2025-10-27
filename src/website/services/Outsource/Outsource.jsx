import React, { useEffect, useState } from "react";
import WebNavbar from "../../navbar";
import WebFooter from "../../footer";
import { Link } from "react-router-dom";
import marketing from '../../../assets/headphone.png'
import celebrate from '../../../assets/lady2.png'
import { FaPhoneAlt, FaChartLine, FaCogs, FaRocket, FaTools } from "react-icons/fa";
import {
    FaUserTie,
    FaChartBar,
    FaBullseye,
} from "react-icons/fa";
import Swal from 'sweetalert2';
import axios from "axios";
import API_CONFIG from '../../../apiConfig'

const cardDatas = [
    {
        icon: <FaUserTie size={40} className="text-primary mb-3" />,
        title: "Cost Efficiency",
        description:
            "Outsourcing reduces the need for in-house resources and infrastructure, cutting down on operational costs while delivering top-tier results.",
    },
    {
        icon: <FaChartBar size={40} className="text-primary mb-3" />,
        title: "Increased Productivity",
        description:
            "Our team operates with efficiency and expertise, allowing you to redirect your resources to core business activities and strategic initiatives.",
    },
    {
        icon: <FaBullseye size={40} className="text-primary mb-3" />,
        title: "Enhanced Focus",
        description:
            "With our experts managing your telemarketing and outbound sales, you gain valuable time and energy to concentrate on growing your business and serving your clients.",
    },
];

const cardData = [
    {
        icon: <FaPhoneAlt size={40} className="text-primary mb-3" />,
        title: "What We Offer",
        description:
            "Expert Telemarketing Services: Our skilled professionals engage prospects, nurture leads, and drive conversations that convert. We handle every aspect, from cold calling to follow-ups, ensuring your message is communicated effectively.",
    },
    {
        icon: <FaRocket size={40} className="text-primary mb-3" />,
        title: "High-Impact Outbound Sales",
        description:
            "Whether you’re looking to boost B2B or B2C sales, our tailored outbound sales strategies are designed to maximize your reach and optimize your sales funnel. We focus on identifying and targeting high-potential leads that align with your business objectives.",
    },
    {
        icon: <FaChartLine size={40} className="text-primary mb-3" />,
        title: "Customized Campaigns",
        description:
            "We don’t believe in one-size-fits-all solutions. Our team collaborates with you to develop bespoke telemarketing and sales campaigns that resonate with your target audience and reflect your brand’s unique voice.",
    },
    {
        icon: <FaTools size={40} className="text-primary mb-3" />,
        title: "Advanced Technology & Analytics",
        description:
            "Leveraging the latest technology and data-driven insights, we continuously monitor and refine our strategies to ensure optimal performance and measurable results.",
    },
    {
        icon: <FaCogs size={40} className="text-primary mb-3" />,
        title: "Scalable Solutions",
        description:
            "From short-term projects to long-term partnerships, our services are designed to scale with your business needs, providing flexibility and adaptability as you grow.",
    },
];

const Outsource = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("https://www.boulou.io/Blulou-backend/csrf-token")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
        console.log(setProducts, "products");
    }, [])

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        requirements: '',
        consent: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.company) newErrors.company = 'Company name is required';
        if (!formData.requirements) newErrors.requirements = 'Requirements are required';
        if (!formData.consent) newErrors.consent = 'You must agree to the consent';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log(formData);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                requirements: '',
                consent: false,
            });

            var name = formData.name;
            var email = formData.email;
            var phone = formData.phone
            var company = formData.company;
            var requirements = formData.requirements;

            var arr = [name, email, phone, company, requirements];

            console.log(arr, "asdsadsadsadsadsa");

            const encryptedCode = encryptCode(arr);

            Swal.fire({
                title: 'Submitting...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await axios.get(`${API_CONFIG.BASE_URL}/free_quotes_details/` + encryptedCode, arr, {
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
    };

    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Outsource Your Telemarketing & Outbound Sales</h2>
                        <p className="mb-4">
                            Transform your sales strategy with our dedicated telemarketing and outbound sales services. By outsourcing to our expert team, you gain access to a powerhouse of talent and experience, allowing you to focus on what you do best—running your business.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Get a Free Quote<span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={marketing}
                            alt="Hiring managers"
                            className="rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    {cardData.slice(0, 3).map((card, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-0 text-center p-3">
                                <div>{card.icon}</div>
                                <h5 className="card-title mt-3">{card.title}</h5>
                                <p className="card-text text-muted">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center">
                    {cardData.slice(3).map((card, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 shadow-sm border-0 text-center p-3">
                                <div>{card.icon}</div>
                                <h5 className="card-title mt-3">{card.title}</h5>
                                <p className="card-text text-muted">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="medical-coding-section-blue">
                <h2 className="title-blue" style={{ fontSize: "25px" }}>Ready to Elevate Your Sales Strategy?</h2>
                <p className="subtitle-blue" style={{ fontSize: "14px" }}>
                    Experience the benefits of professional telemarketing and outbound sales services. Contact us today to learn how we can help you achieve your sales goals and drive business growth.
                </p>
            </div>


            <div className="container">

                <div className="row">

                    <div className="col-lg-6">
                        <img
                            src={celebrate}
                            alt="Hiring managers"
                            className="rounded shadow" style={{ width: "85%" }}
                        />
                    </div>

                    <div className="col-lg-6">

                        <div className="quote-container">
                            <h2>Get A Free Quote</h2>
                            <hr />
                            <form onSubmit={handleSubmit} className="quote-form">
                                <div className="row">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                        {errors.name && <span className="error">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Your Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                        {errors.email && <span className="error">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                                        {errors.phone && <span className="error">{errors.phone}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} />
                                        {errors.company && <span className="error">{errors.company}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Requirements</label>
                                    <textarea
                                        name="requirements"
                                        rows="3"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                    />
                                    {errors.requirements && <span className="error">{errors.requirements}</span>}
                                </div>

                                <div className="d-md-flex">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        <label>
                                            By checking this box, I consent to receive text messages related to marketing messages
                                            from Bouloublue. You can reply "STOP" at any time to opt out. Message and data rates may
                                            apply. Message frequency may vary, text HELP to +1 866-611-6943 for assistance. For more
                                            information, please refer to our <a href="#">privacy policy</a>, and SMS Terms and
                                            Conditions on our website.
                                        </label>
                                    </div>
                                </div>
                                <br />
                                {errors.consent && <span className="error">{errors.consent}</span>}
                                <div style={{ justifyItems: "center" }}>
                                    <button type="submit" className="submit-btn">Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>

            </div>

            <div className="container py-5">
                <h2 className="text-center fw-bold mb-5" style={{ color: "#2d5da3" }}>Why Partner With Us?</h2>
                <div className="row justify-content-center">
                    {cardDatas.map((card, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 shadow-sm border-0 text-center p-4">
                                <div>{card.icon}</div>
                                <h5 className="card-title mt-3">{card.title}</h5>
                                <p className="card-text text-muted small">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <WebFooter />
        </>

    );
};

export default Outsource;