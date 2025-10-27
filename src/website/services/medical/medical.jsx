import React, { useEffect, useState } from "react";
import WebNavbar from "../../navbar";
import WebFooter from "../../footer";
import { Link } from "react-router-dom";
import accuracy from '../../../assets/accuracy.png'
import target from '../../../assets/target.png'
import cart from '../../../assets/cart.png'
import compliance from '../../../assets/compliance.png'
import marketing from '../../../assets/medical.png'
import celebrate from '../../../assets/lady2.png'
import laptops from '../../../assets/laptops.png'
import workman from '../../../assets/workman.png'
import {
    FaFileMedical,
    FaMoneyCheckAlt,
    FaBan,
    FaUserMd,
} from "react-icons/fa";
import Swal from 'sweetalert2';
import axios from "axios";
import API_CONFIG from '../../../apiConfig'
import './medical.css'

const cardData = [
    {
        icon: <FaFileMedical size={40} className="text-primary mb-3" />,
        title: "Claim Submission",
        description:
            "We prepare and submit claims to insurance companies, ensuring compliance with industry standards and payer requirements.",
    },
    {
        icon: <FaMoneyCheckAlt size={40} className="text-primary mb-3" />,
        title: "Payment Posting",
        description:
            "We handle payment processing, ensuring correct allocation of payments to patient accounts.",
    },
    {
        icon: <FaBan size={40} className="text-primary mb-3" />,
        title: "Denial Management",
        description:
            "Our team quickly addresses denied or rejected claims, reducing delays and ensuring that your practice gets paid on time.",
    },
    {
        icon: <FaUserMd size={40} className="text-primary mb-3" />,
        title: "Patient Billing",
        description:
            "We manage patient statements and billing inquiries, ensuring a smooth process for both your practice and your patients.",
    },
];

const features = [
    {
        title: 'Accuracy',
        text: 'With our team of certified medical coders and experienced billing professionals, we ensure that every claim is processed accurately, minimizing rejections and payment delays.',
        imgLeft: true,
        imgSrc: accuracy,
    },
    {
        title: 'Compliance',
        text: 'We stay up-to-date with the latest healthcare regulations, including HIPAA, ICD-10, and CMS guidelines, to ensure your practice remains compliant.',
        imgLeft: false,
        imgSrc: compliance,
    },
    {
        title: 'Cost-Effective',
        text: 'Outsourcing your medical billing and coding to Boulou Blue helps reduce overhead costs associated with in-house billing departments, including training, software, and administrative expenses.',
        imgLeft: true,
        imgSrc: cart,
    },
    {
        title: 'Technology-Driven Solutions',
        text: 'Our advanced software solutions integrate with your practice management system, streamlining the billing process and ensuring fast, error-free claim submissions.',
        imgLeft: false,
        imgSrc: target
    },
];

const specialties = [
    ["Family Medicine", "Orthopedics", "Radiology", "Getting Started is Easy"],
    ["Internal Medicine", "Pediatrics", "Physical Therapy"],
    ["Cardiology", "Gastroenterology", "Mental Health Services"]
];

const Medical = () => {

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
                        <h2 className="fw-bold mb-3">Medical Billing</h2>
                        <p className="mb-4">
                            At Boulou Blue, we provide efficient, accurate, and reliable medical billing and coding services, designed to meet the complex needs of healthcare providers. With our expert team and state-of-the-art technology, we ensure that your practice maximizes revenue, minimizes errors, and stays compliant with industry regulations.
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
                        <div key={index} className="col-md-6 col-lg-3 mb-4">
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
                <h2 className="title-blue">Medical Coding</h2>
                <p className="subtitle-blue">
                    Accurate coding is essential to avoid costly errors and ensure
                    compliance. We offer:
                </p>

                <div className="coding-cards-blue">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="coding-card-blue">
                                <img
                                    src={laptops}
                                    alt="ICD-10-CM Coding"
                                    className="card-image-blue"
                                />
                                <div className="card-content-blue">
                                    <h3 className="card-title-blue">ICD-10-CM Coding</h3>
                                    <p className="card-text-blue">
                                        Our certified coders use the latest ICD-10 coding standards to
                                        ensure your services are accurately categorized.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mob">
                            <div className="coding-card-blue">
                                <img
                                    src={workman}
                                    alt="CPT and HCPCS Coding"
                                    className="card-image-blue"
                                />
                                <div className="card-content-blue">
                                    <h3 className="card-title-blue">CPT And HCPCS Coding</h3>
                                    <p className="card-text-blue">
                                        Accurate medical coding ensures proper reimbursement, while
                                        regular chart audits identify issues and ensure compliance with
                                        regulations and payer requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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


            <section className="specialties-section">
                <h2 className="section-title">Specialties We Serve</h2>
                <p className="section-subtitle">
                    We proudly provide billing and coding services to a wide range of specialties, including but not limited to:
                </p>

                <div className="specialties-grid">
                    {specialties.map((column, colIndex) => (
                        <ul key={colIndex} className="specialties-column">
                            {column.map((item, idx) => (
                                <li key={idx} className="specialty-item">
                                    <span className="checkmark">✔️</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                <p className="section-footer">
                    Are you ready to improve your revenue cycle management and reduce the administrative burden on your practice?
                    Partner with Boulou Blue for seamless medical billing and coding services. Contact us today to schedule a free consultation or
                    learn more about how we can support your healthcare business.
                </p>
            </section>

            <div className="container py-5" style={{ color: "black" }}>
                <h2 className="text-center text-primary mb-5">Why Choose Boulou ?</h2>
                {features.map((feature, index) => (
                    <div className="row align-items-center mb-5" key={index}>
                        <div className={`col-md-6 ${feature.imgLeft ? '' : 'order-md-2'}`}>
                            <img style={{ width: "40%" }} src={feature.imgSrc} alt={feature.title} className="img-fluid rounded shadow-sm" />
                        </div>
                        <div className={`col-md-6 ${feature.imgLeft ? '' : 'order-md-1'}`}>
                            <h5 className="text-primary">{feature.title}</h5>
                            <p>{feature.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <WebFooter />
        </>

    );
};

export default Medical;
