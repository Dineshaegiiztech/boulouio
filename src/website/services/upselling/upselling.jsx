import React, { useEffect, useState } from "react";
import WebNavbar from "../../navbar";
import WebFooter from "../../footer";
import { Link } from "react-router-dom";
import salesrocket from '../../../assets/salesrocket.png'
import marketing from '../../../assets/lady.png'
import celebrate from '../../../assets/lady2.png'
import './GetQuoteForm.css';
import { FaCogs, FaPhoneAlt, FaUserTie, FaHeadset, FaChartBar, FaClock } from "react-icons/fa";
import Swal from 'sweetalert2';
import axios from "axios";
import API_CONFIG from '../../../apiConfig'

const cardData = [
    {
        icon: <FaHeadset size={40} className="text-primary mb-3" />,
        title: "Industry Expertise",
        description:
            "Expert upselling and cross-selling strategies tailored to your industry for impactful results.",
    },
    {
        icon: <FaCogs size={40} className="text-primary mb-3" />,
        title: "Tailored Strategies",
        description:
            "We believe in a personalized approach. Our team develops strategies that reflect your unique brand identity, customer behavior, and market dynamics, ensuring that each recommendation resonates with your audience.",
    },
    {
        icon: <FaPhoneAlt size={40} className="text-primary mb-3" />,
        title: "Streamlined Processes",
        description:
            "By handling your upselling and cross-selling initiatives, we streamline your sales processes, reducing the burden on your internal teams and optimizing resource allocation.",
    },
    {
        icon: <FaUserTie size={40} className="text-primary mb-3" />,
        title: "Enhanced Customer Experience",
        description:
            "Our approach focuses on adding value to your customers’ experience. We craft compelling offers that not only boost sales but also build stronger customer relationships.",
    },
    {
        icon: <FaChartBar size={40} className="text-primary mb-3" />,
        title: "Data-Driven Results",
        description:
            "We leverage advanced analytics to monitor performance and refine strategies. Our commitment to data-driven decision-making ensures that we deliver tangible, measurable results and continually enhance our approach.",
    },
    {
        icon: <FaClock size={40} className="text-primary mb-3" />,
        title: "Flexible Solutions",
        description:
            "Whether you need a full-scale implementation or specific support for certain campaigns, our services are adaptable to fit your requirements and business goals.",
    },
];

const Upselling = () => {

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
                        <h2 className="fw-bold mb-3">Outsource Your Upselling and Cross-Selling</h2>
                        <p className="mb-4">
                            Elevate your revenue potential effortlessly by entrusting your upselling and cross-selling needs to our dedicated team of professionals. We provide customized, results-oriented strategies designed to integrate seamlessly with your business operations, enhancing customer engagement and driving growth.
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
                    {cardData.map((card, index) => (
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

            <WebFooter />
        </>

    );
};

export default Upselling;
