// import React, { useState } from 'react';
// import Navbar from './navbar';
// import './Website.css';
// "/src/assets/loginoffice.png"
// import website from '../assets/web1.png'
// import website2 from '../assets/web2.png'
// import { FaHeart, FaServer, FaTruck, FaUserMd, FaBriefcase, FaQuestion } from 'react-icons/fa';
// import Footer from './footer';
// import { Link } from 'react-router-dom';
import Chatbox from '../chatbot';
import styles from "/src/Chatbox.module.css";
import WhatsappIcon from '../WhatsappIcon';

// const databases = [
//     {
//         icon: <FaHeart color="#f0860f" />,
//         title: 'Home Care Database',
//         description:
//             'Access a tailored Home Care Database designed to streamline elderly care management and drive strategic growth with precision.',
//     },
//     {
//         icon: <FaServer color="#f0860f" />,
//         title: 'IT Database',
//         description:
//             'Stay ahead in the evolving tech landscape with our up-to-date IT Database — your gateway to key industry professionals and decision-makers.',
//     },
//     {
//         icon: <FaTruck color="#f0860f" />,
//         title: 'Fleet Database',
//         description:
//             'Looking for fleet service leads? Our Fleet Database connects you with businesses in need of transport, logistics, and fleet management solutions.',
//     },
//     {
//         icon: <FaBriefcase color="#f0860f" />,
//         title: 'Hiring Managers Database',
//         description:
//             'Discover active hiring managers across industries. Perfect for recruitment agencies seeking fresh leads and lasting partnerships.',
//     },
//     {
//         icon: <FaUserMd color="#f0860f" />,
//         title: 'Healthcare Intelligence',
//         description:
//             'Engage with verified healthcare professionals and decision-makers across the UK — all in one powerful, searchable database.',
//     },
//     {
//         icon: <FaQuestion color="#f0860f" />,
//         title: 'Need Custom Data?',
//         description: '',
//         button: true,
//     },
// ];


// const faqList = [
//     {
//         question: 'Is Boulou free?',
//         answer:
//             'While the full version of Boulou is not free, we do offer a free trial following a free demo session.',
//     },
//     {
//         question: 'Is Boulou GDPR compliant?',
//         answer:
//             'Yes, Boulou is fully GDPR compliant and ensures user data privacy and protection.',
//     },
//     {
//         question: 'Can I integrate my CRM with Boulou ',
//         answer: 'Absolutely! Boulou supports integration with most major CRMs.',
//     },
//     {
//         question: 'Can I download prospects data?',
//         answer: 'Yes, you can download prospects data in multiple formats.',
//     },
//     {
//         question: 'Can I use Boulou for B2C businesses?',
//         answer: 'Yes, Boulou supports both B2B and B2C business models.',
//     },
// ];

// const Website = () => {

//     const [activeIndex, setActiveIndex] = useState(0);

//     const toggleAccordion = (index) => {
//         setActiveIndex(index === activeIndex ? null : index);
//     };

//     return (
//         <div className="website">
//             <div className="">
//                 <Navbar />
//                 <WhatsappIcon phoneNumber="919876543210" className={styles.whatsappLink} />
//                 <Chatbox />
//             </div>

//             <div className="container-web">
//                 {/* <Hero /> */}
//                 <br /><br />
//                 <div className='row'>

//                     <div className='col-lg-6' style={{ textAlign: "justify" }}>
//                         <h2>Insights to Optimize Your Deal</h2>
//                         <br />
//                         <p>Empower your sales strategy with tailored data solutions—turn insights into action and see your deals flourish. With Boulou  you can identify high-value prospects faster and engage them with precision. Our data isn’t just accurate—it’s built for action, helping you close more deals in less time. Say goodbye to generic lists and wasted outreach. Instead, leverage custom-built data filters, from industry and job level to email and mobile contact counts, giving your team the tools they need to connect, convert, and grow. Let your sales efforts thrive with smarter, data-driven decisions.</p>
//                         <br />
//                         <Link to="/demo"><button className="demo-btn">Request a Demo</button></Link>
//                     </div>

//                     <div className='col-lg-6'>
//                         <img src={website} className="" alt="Login" style={{ width: '100%' }} />
//                     </div>

//                 </div>
//             </div>

//             <div className='' style={{ background: "white", color: "black", padding: "0px" }}>
//                 <div className='container' style={{ background: "white", color: "black" }} >

//                     <div className='row'>

//                         <div className='col-lg-5'>
//                             <img src={website2} className="" alt="Login" style={{ width: '60%' }} />
//                         </div>

//                         <div className='col-lg-7' style={{ textAlign: "justify", paddingTop: "25px" }}>
//                             <h2>Custom Build B2B Contact Database</h2>
//                             <br />
//                             <p>Every business has unique needs—so why settle for a one-size-fits-all database? That’s where Boulou  a leading B2B email data provider, comes in. We offer fully customizable B2B contact data tailored to your specific goals. Select industries, job levels, number of emails and mobile contacts—you control it all.

//                                 With Boulou s B2B Prospector, you build a database that aligns perfectly with your business strategy.</p>
//                             <br />
//                             <Link to="/demo"><button className="demo-btn">Book a Demo</button></Link>
//                         </div>

//                     </div>

//                 </div>

//                 <div>

//                     <section className="section-container-web" >
//                         <h2 className="section-title-web">
//                             Comprehensive Database across different niches
//                         </h2>
//                         <div className="card-grid-web">
//                             {databases.map((item, index) => (
//                                 <div className="card-web" key={index}>
//                                     <div className="icon-web">{item.icon}</div>
//                                     <div className="card-content-web">
//                                         <h3>{item.title}</h3>
//                                         {item.description && <p>{item.description}</p>}
//                                         {item.button && (
//                                             <Link to="/demo"><button className="contact-btn-web">Contact us →</button></Link>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>

//                 </div>

//                 <div style={{ padding: "20px" }}>
//                     <h2>Frequently Asked Questions</h2>
//                     <p>Have Questions? Talk to Sales</p>
//                 </div>

//                 <div className="faq-wrapper">

//                     {faqList.map((item, index) => (
//                         <div
//                             key={index}
//                             className={`faq-item ${activeIndex === index ? 'active' : ''}`}
//                         >
//                             <div className="faq-question" onClick={() => toggleAccordion(index)}>
//                                 <span>{item.question}</span>
//                                 <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
//                             </div>
//                             {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
//                         </div>
//                     ))}
//                 </div>
//                 <Footer />
//             </div>

//         </div>

//     );
// };

// export default Website;

import React, { useState, useEffect } from 'react';
import './website.css';
import img1 from '../assets/new.gif'
import img2 from '../assets/new1.gif'
import img3 from '../assets/new2.gif'
import left from '../assets/left.png'
import right from '../assets/right.png'
import boulou from '../assets/boulous.png'
import { FaHeart, FaServer, FaTruck, FaUserMd, FaBriefcase, FaQuestion } from 'react-icons/fa';
import { FaUsers, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';
import { FaDollarSign, FaWrench, FaMapMarkedAlt, FaSitemap, FaDesktop } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import WebFooter from './footer';
import WebNavbar from './navbar';

const attributes = [
    { icon: <FaBriefcase />, label: 'Job Titles' },
    { icon: <FaBuilding />, label: 'Companies' },
    { icon: <FaDollarSign />, label: 'Revenue' },
    { icon: <FaWrench />, label: 'Skills' },
    { icon: <FaMapMarkedAlt />, label: 'Locations' },
    { icon: <FaUsers />, label: 'Company Size' },
    { icon: <FaSitemap />, label: 'Departments' },
    { icon: <FaDesktop />, label: 'Technologies Used' },
];

const iconStyle = {
    backgroundColor: '#EAE6FB',
    color: '#5B3DF5',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '40px',
    marginBottom: '10px',
    width: '125px',
    height: '100px'
};


const databases = [
    {
        icon: <FaHeart color="#f0860f" />,
        title: 'Home Care Database',
        description:
            'Access a tailored Home Care Database designed to streamline elderly care management and drive strategic growth with precision.',
    },
    {
        icon: <FaServer color="#f0860f" />,
        title: 'IT Database',
        description:
            'Stay ahead in the evolving tech landscape with our up-to-date IT Database — your gateway to key industry professionals and decision-makers.',
    },
    {
        icon: <FaTruck color="#f0860f" />,
        title: 'Fleet Database',
        description:
            'Looking for fleet service leads? Our Fleet Database connects you with businesses in need of transport, logistics, and fleet management solutions.',
    },
    {
        icon: <FaBriefcase color="#f0860f" />,
        title: 'Hiring Managers Database',
        description:
            'Discover active hiring managers across industries. Perfect for recruitment agencies seeking fresh leads and lasting partnerships.',
    },
    {
        icon: <FaUserMd color="#f0860f" />,
        title: 'Healthcare Intelligence',
        description:
            'Engage with verified healthcare professionals and decision-makers across the UK — all in one powerful, searchable database.',
    },
    {
        icon: <FaQuestion color="#f0860f" />,
        title: 'Need Custom Data?',
        description: '',
        button: true,
    },
];


const faqList = [
    {
        question: 'Is Boulou free?',
        answer:
            'While the full version of Boulou is not free, we do offer a free trial following a free demo session.',
    },
    {
        question: 'Is Boulou GDPR compliant?',
        answer:
            'Yes, Boulou is fully GDPR compliant and ensures user data privacy and protection.',
    },
    {
        question: 'Can I integrate my CRM with Boulou ',
        answer: 'Absolutely! Boulou supports integration with most major CRMs.',
    },
    {
        question: 'Can I download prospects data?',
        answer: 'Yes, you can download prospects data in multiple formats.',
    },
    {
        question: 'Can I use Boulou for B2C businesses?',
        answer: 'Yes, Boulou supports both B2B and B2C business models.',
    },
];

const stats = [
    { icon: <FaUsers />, value: '800M', label: 'People Profiles' },
    { icon: <FaEnvelope />, value: '150M', label: 'Personal Emails' },
    { icon: <FaBriefcase />, value: '200M', label: 'Work Emails' },
    { icon: <FaPhone />, value: '100M', label: 'Direct Dials' },
    { icon: <FaBuilding />, value: '40M', label: 'Company Profiles' },
];

const containerStyle = {
    backgroundColor: '#ecfbf8',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
};

const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: "black"
};

const badgeContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '20px 0',
};

const badgeStyle = {
    height: '40px',
};

const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '30px',
};

const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    width: '200px',
    height: '300px', // <-- set fixed height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: "black"
};


const ratingHeader = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '15px',
};

const ratingRow = {
    fontSize: '14px',
    margin: '8px 0',
    display: 'flex',
    justifyContent: 'space-between',
};

const companies = [
    {
        name: 'ContactOut 🥇',
        ratings: {
            'Lead Validation': '9.2',
            'Lead Enrichment': '9.2',
            'Lead Quality': '9.2',
            'Lead Analysis': '9.0',
            'Browser Extension': '9.4',
        },
        images: boulou
    },
    {
        name: 'ZoomInfo',
        ratings: {
            'Lead Validation': '8.5',
            'Lead Enrichment': '8.5',
            'Lead Quality': '8.4',
            'Lead Analysis': '8.4',
            'Browser Extension': '8.8',
        },
        images:
            'https://contactout.com/svg/components/zoominfo.svg'
    },
    {
        name: 'Apollo.io',
        ratings: {
            'Lead Validation': '8.8',
            'Lead Enrichment': '8.7',
            'Lead Quality': '8.7',
            'Lead Analysis': '8.8',
            'Browser Extension': '8.7',
        },
        images:
            'https://contactout.com/svg/components/apollo.svg'
    },
    {
        name: 'Lusha',
        ratings: {
            'Lead Validation': '7.9',
            'Lead Enrichment': '7.8',
            'Lead Quality': '7.9',
            'Lead Analysis': '8.0',
            'Browser Extension': '8.3',
        },
        images:
            'https://contactout.com/svg/components/lusha.svg'
    },
];

const cardStyles = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'black'
};

const logoStyle = {
    height: '30px',
    marginBottom: '10px',
};

const gridContainerStyle = {
    backgroundColor: '#f0f7ff',
    padding: '50px 15px',
};

const headingStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '40px',
    fontSize: '24px',
    color: 'black'
};


const testimonials = [
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        quote: '“This is such a great and simple tool to use.”',
        name: 'Tobia St Germain',
        position: 'Recruitment Coordinator, Google',
    },
    {
        logo: 'https://contactout.com/images/logos/tenstorrent-logo.svg',
        quote: '“Find personal mails seamlessly. Thanks for this tool!”',
        name: 'Ekin Bayildiran',
        position: 'Executive Search, Tenstorrent',
    },
    {
        logo: 'https://contactout.com/images/logos/societe-generale-reviews.svg',
        quote: '“Very easy to use, and it gives contact details that are not available on others I have used.”',
        name: 'Barbara Gall',
        position: 'Société Générale',
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg',
        quote: '“Love it! I use it every day.”',
        name: 'Camille Verdier',
        position: 'CNN',
    },
    {
        logo: 'https://contactout.com/images/logos/robert-half-reviews.svg',
        quote: '“Great email tool. I’ve used a few other services and ContactOut is the easiest one to use.”',
        name: 'Jon Nowakowski',
        position: 'Robert Half',
    },
    {
        logo: 'https://contactout.com/images/logos/hsbc-reviews.svg',
        quote: '“Excellent product, very small chance of error.”',
        name: 'Farida Charania',
        position: 'HSBC',
    },
    {
        logo: 'https://contactout.com/images/logos/img-txt-international.png',
        quote:
            '“ContactOut helps us speak to candidates that we otherwise would not be able to reach via social media.”',
        name: 'Aayush Hasani',
        position: 'Director of Business Development',
    },
    {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg',
        quote:
            '“Love this extension and would recommend it to anyone looking for a tool to find email addresses.”',
        name: 'Matt W. Wolfson',
        position: 'Yelp',
    },
    {
        logo: 'https://contactout.com/images/logos/warner-media-reviews.svg',
        quote:
            '“Great product! ContactOut has tripled the yield of our InMail strategy on LinkedIn.”',
        name: 'Ryan Brogan',
        position: 'WarnerMedia',
    },
];

const Website = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const words = ['boulou', 'contact data', 'emails & phone', 'sales leads'];
    const [placeholder, setPlaceholder] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];
        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setPlaceholder((prev) => prev + currentWord.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, 150);
            return () => clearTimeout(timeout);
        } else {
            const pause = setTimeout(() => {
                setPlaceholder('');
                setCharIndex(0);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 1500);
            return () => clearTimeout(pause);
        }
    }, [charIndex, wordIndex]);

    return (
        <div className="website">

            <div className="">
                <WhatsappIcon phoneNumber="919876543210" className={styles.whatsappLink} />
                <Chatbox />
            </div>
            <WebNavbar />
            <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
                {/* Heading */}
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a0d56', textAlign: 'center' }}>
                    Access the world's most reliable contact data
                </h1>

                <div className='container-fluid'>
                    <div className='row'>
                        <p style={{ textAlign: 'center', fontSize: '1.4rem', marginTop: '1rem', color: "black" }}>
                            Get verified  <strong>emails</strong> and <strong>phone numbers</strong> for over 300 million professionals.
                        </p>


                        {/* Search */}

                        <div className='col-lg-3'>
                            <img src={left} style={{ width: "100%" }} />
                        </div>

                        <div className='col-lg-6'>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                                <input
                                    type="text"
                                    placeholder={placeholder}
                                    style={{
                                        width: '350px',
                                        padding: '12px 16px',
                                        fontSize: '1rem',
                                        border: '1px solid #ccc',
                                        borderRight: 'none',
                                        borderRadius: '8px 0 0 8px',
                                    }}
                                />
                                <button
                                    onClick={() => window.open('/login', '_blank')}
                                    style={{
                                        background: 'rgb(255, 136, 23)',
                                        color: 'black',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        padding: '12px 20px',
                                        border: 'none',
                                        borderRadius: '0 8px 8px 0',
                                        cursor: 'pointer',
                                    }}
                                >
                                    🔍 Try a Free Search
                                </button>


                            </div>

                            {/* Logos */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                marginTop: '4rem',
                                gap: '2rem'
                            }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{ height: '60px' }} />
                                <img src="https://diplo-media.s3.eu-central-1.amazonaws.com/2024/11/Tenstorrent.png" alt="Tenstorrent" style={{ height: '60px' }} />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfuntJ4Ic1VT6P41zKAfoeO8XZ0usdXT9Tw&s" alt="WarnerMedia" style={{ height: '60px' }} />
                                <img src="https://www.asifma.org/wp-content/uploads/bfi_thumb/socgen_website-34zu8vyfr8crv8vu6od54zh0e5usc8bqzs04a4odxu9d5gu18.jpg" alt="Societe Generale" style={{ height: '60px' }} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '60px' }} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1200px-Yelp_Logo.svg.png" alt="Yelp" style={{ height: '60px' }} />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src={right} style={{ width: "100%" }} />
                        </div>

                    </div>
                </div>

            </div>

            <div className="container-web">
                {/* <Hero /> */}
                <br /><br />
                <div className='row'>

                    <div className='col-lg-6' style={{ textAlign: "justify", color: "black" }}>
                        <h2>Insights to Optimize Your Deal</h2>
                        <br />
                        <p>Empower your sales strategy with tailored data solutions—turn insights into action and see your deals flourish. With Boulou  you can identify high-value prospects faster and engage them with precision. Our data isn’t just accurate—it’s built for action, helping you close more deals in less time. Say goodbye to generic lists and wasted outreach. Instead, leverage custom-built data filters, from industry and job level to email and mobile contact counts, giving your team the tools they need to connect, convert, and grow. Let your sales efforts thrive with smarter, data-driven decisions.</p>
                        <br />
                        <Link to="/demo"><button className="demo-btn">Request a Demo</button></Link>
                    </div>

                    <div className='col-lg-6'>
                        <img src={img1} className="" alt="Login" style={{ width: '100%' }} />
                    </div>

                </div>
            </div>

            <div style={gridContainerStyle}>
                <h2 style={headingStyle}>Hear what our customers have to say</h2>
                <div className="container">
                    <div className="row">
                        {testimonials.map((t, i) => (
                            <div className="col-md-4 d-flex mb-4" key={i}>
                                <div style={cardStyles} className="w-100">
                                    <div>
                                        <img src={t.logo} alt="logo" style={logoStyle} />
                                        <p style={{ fontStyle: 'italic', marginTop: '10px' }}>{t.quote}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 'bold', marginBottom: 0 }}>{t.name}</p>
                                        <p style={{ color: 'gray', fontSize: '14px' }}>{t.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='' style={{ background: "white", color: "black", padding: "0px" }}>
                <div className='container-fluid' style={{ background: "white", color: "black" }} >

                    <div className='row'>

                        <div className='col-lg-6'>
                            <img src={img2} className="" alt="Login" style={{ width: '100%' }} />
                        </div>

                        <div className='col-lg-6' style={{ textAlign: "justify", paddingTop: "25px" }}>
                            <h2>Custom Build B2B Contact Database</h2>
                            <br />
                            <p>Every business has unique needs—so why settle for a one-size-fits-all database? That’s where Boulou  a leading B2B email data provider, comes in. We offer fully customizable B2B contact data tailored to your specific goals. Select industries, job levels, number of emails and mobile contacts—you control it all.

                                With Boulou s B2B Prospector, you build a database that aligns perfectly with your business strategy.</p>
                            <br />
                            <Link to="/demo"><button className="demo-btn">Book a Demo</button></Link>
                        </div>

                    </div>

                </div>

                <div className="container-fluid text-center py-5" style={{ background: "#f5f9ff" }}>
                    <h2 className="fw-bold mb-3">Prospect faster with the most accurate data ever</h2>

                    <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
                        <div><span className="text-primary">✔</span> Hourly Data Updates</div>
                        <div><span className="text-primary">✔</span> CCPA & GDPR Compliant</div>
                        <div><span className="text-primary">✔</span> Triple-verified with 99% Confidence</div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">
                        {stats.map((stat, index) => (
                            <div className="col" key={index}>
                                <div className="border rounded-3 p-4 h-100 d-flex flex-column align-items-center">
                                    <div className="bg-primary text-white rounded p-2 mb-3" style={{ fontSize: '24px' }}>
                                        {stat.icon}
                                    </div>
                                    <h3 className="fw-bold">{stat.value}</h3>
                                    <p className="text-primary m-0">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-5">
                    <div className="mb-3">
                        <button
                            className="fw-bold text-white"
                            style={{
                                backgroundColor: '#5B3DF5',
                                border: 'none',
                                borderRadius: '20px',
                                padding: '5px 15px',
                            }}
                        >
                            Data Attributes
                        </button>
                    </div>

                    <h2 className="fw-bold">
                        Find the right prospects <br /> with laser precision
                    </h2>

                    <p className="text-muted">
                        Search across 20+ data points to pinpoint the right people and companies more effectively and efficiently.
                    </p>

                    <a href="#" style={{ color: '#5B3DF5', fontWeight: 'bold', textDecoration: 'none' }}>
                        Learn more &rarr;
                    </a>

                    <div className="row mt-4">
                        {attributes.map((attr, idx) => (
                            <div key={idx} className="col-6 col-md-3 text-center mb-4">
                                <div style={iconStyle}>{attr.icon}</div>
                                <div className="fw-large" style={{ fontWeight: "bold", float: "left", paddingLeft: "30px" }}>{attr.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>

                    <section className="section-container-web" >
                        <h2 className="section-title-web">
                            Comprehensive Database across different niches
                        </h2>
                        <div className="card-grid-web">
                            {databases.map((item, index) => (
                                <div className="card-web" key={index}>
                                    <div className="icon-web">{item.icon}</div>
                                    <div className="card-content-web">
                                        <h3>{item.title}</h3>
                                        {item.description && <p style={{ color: "black" }}>{item.description}</p>}
                                        {item.button && (
                                            <Link to="/demo"><button className="contact-btn-web">Contact us →</button></Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                <div style={{ padding: "20px" }}>
                    <h2>Frequently Asked Questions</h2>
                    <p>Have Questions? Talk to Sales</p>
                </div>

                <div className="faq-wrapper">

                    {faqList.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div className="faq-question" onClick={() => toggleAccordion(index)}>
                                <span>{item.question}</span>
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
                        </div>
                    ))}
                </div>
                {/* <Footer /> */}
            </div>

            <div style={containerStyle}>
                <div style={{ fontSize: '20px', color: '#FFB800', marginBottom: '10px' }}>★★★★★</div>
                <div style={titleStyle}>
                    Top-ranked <strong>Lead Intelligence</strong> <br /> solution on G2 Crowd
                </div>

                <div style={badgeContainerStyle} >
                    <img className='mob-new' src='https://contactout.com/images/g2-all-icons-2025.svg' />
                </div>

                <h3 style={{ marginBottom: '20px', color: "black" }}>G2 Crowd Ratings Comparison for Lead Intelligence</h3>

                <div style={tableContainerStyle}>
                    {companies.map((company, idx) => (
                        <div key={idx} style={cardStyle}>
                            <img src={company.images} />
                            {/* <div style={ratingHeader}>{company.name}</div> */}
                            {Object.entries(company.ratings).map(([metric, score], index) => (
                                <div key={index} style={ratingRow}>
                                    <span>{metric}</span>
                                    <span style={{ fontWeight: 'bold' }}>{score}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-fluid" style={{ background: "#faefe2" }}>
                {/* <Hero /> */}
                <br /><br />
                <div className='row'>

                    <div className='col-lg-6' style={{ textAlign: "justify", color: "black" }}>
                        <h2>Insights to Optimize Your Deal</h2>
                        <br />
                        <p>Empower your sales strategy with tailored data solutions—turn insights into action and see your deals flourish. With Boulou  you can identify high-value prospects faster and engage them with precision. Our data isn’t just accurate—it’s built for action, helping you close more deals in less time. Say goodbye to generic lists and wasted outreach. Instead, leverage custom-built data filters, from industry and job level to email and mobile contact counts, giving your team the tools they need to connect, convert, and grow. Let your sales efforts thrive with smarter, data-driven decisions.</p>
                        <br />
                        <Link to="/demo"><button className="demo-btn">Request a Demo</button></Link>
                    </div>

                    <div className='col-lg-6'>
                        <img src={img3} className="" alt="Login" style={{ width: '100%' }} />
                    </div>

                </div>
            </div>
            <WebFooter />
        </div>

    );
};

export default Website;