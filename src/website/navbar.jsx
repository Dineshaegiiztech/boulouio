// import React from 'react';
// import './navbar.css';
// import { Link } from 'react-router-dom';
// import icon from '../assets/navbar.png';

// const WebNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2d5da3' }}>
//       <div className="container-fluid">

//         {/* Logo */}
//         <div className="logo">
//           <Link to="/">
//             <img src={icon} style={{ width: "130px", margin: "8px", padding: "0px" }} alt="Logo" />
//           </Link>
//         </div>

//         {/* Bootstrap Toggler */}
//         <button
//           className="navbar-toggler text-white"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           style={{ padding: "12px" }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="nav-links navbar-nav ms-auto">

//             {/* Products Dropdown */}
//             <li className="nav-item dropdown">
//               <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
//                 Products
//               </span>
//               <ul className="dropdown-menu dropdown-menu-web">
//                 <li><Link className="dropdown-item" to="/health-care">Healthcare Intelligence Database</Link></li>
//                 <li><Link className="dropdown-item" to="/energy">Energy & Utilities Database</Link></li>
//                 <li><Link className="dropdown-item" to="/HiringManagers">Hiring Managers Database</Link></li>
//                 <li><Link className="dropdown-item" to="/companies">IT Companies Database</Link></li>
//                 <li><Link className="dropdown-item" to="/fleet">Fleet Database</Link></li>
//               </ul>
//             </li>

//             {/* Solutions Dropdown */}
//             <li className="nav-item dropdown">
//               <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
//                 Solutions
//               </span>
//               <ul className="dropdown-menu dropdown-menu-web">
//                 <li><Link className="dropdown-item" to="/us-data">US Data</Link></li>
//                 <li><Link className="dropdown-item" to="/appending">Data Appending</Link></li>
//                 <li><Link className="dropdown-item" to="/cleansing">Data Cleansing</Link></li>
//                 <li><Link className="dropdown-item" to="/enrichment">Data Enrichment</Link></li>
//                 <li><Link className="dropdown-item" to="/B2bleads">Get Free B2B Leads</Link></li>
//                 <li><Link className="dropdown-item" to="/sales">Boulou for Sales</Link></li>
//                 <li><Link className="dropdown-item" to="/marketing">Boulou for Marketing</Link></li>
//                 <li><Link className="dropdown-item" to="/recruitment">Boulou for Recruitment</Link></li>
//               </ul>
//             </li>

//             {/* <li className="nav-item dropdown">
//               <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
//                 Services
//               </span>
//               <ul className="dropdown-menu dropdown-menu-web">
//                 <li><Link className="dropdown-item" to="/upselling">Upselling and Cross</Link></li>
//                 <li><Link className="dropdown-item" to="/medical">Medical Billing</Link></li>
//                 <li><Link className="dropdown-item" to="/outsource">Telemarketing</Link></li>
//                 <li><Link className="dropdown-item" >Digital Marketing</Link></li>
//                 <li><Link className="dropdown-item" >Inbound Sales</Link></li>
//                 <li><Link className="dropdown-item" >IT Help Desk Services</Link></li>
//                 <li><Link className="dropdown-item" >Tech Support</Link></li>
//                 <li><Link className="dropdown-item" >Lead Generation B2C B2B</Link></li>
//                 <li><Link className="dropdown-item" >Appointment Setting Service B2C B2B</Link></li>
//               </ul>
//             </li> */}


//             <li className="nav-item">
//               <Link className="nav-link" to="/custom-data">Custom-Build Data</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/blogs">Blogs</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/pricing">Pricing</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/demo-videos">How it Works</Link>
//             </li>
//                <li className="nav-item">
//               <Link className="nav-link" to="/sample-data">Sample data</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login" target="_blank">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/demo">
//                 <button className="demo-btn">Book a Demo</button>
//               </Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default WebNavbar;


import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/navbar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHospital, faBolt, faCar, faUserTie } from '@fortawesome/free-solid-svg-icons';


import {
    FaFlagUsa,
    FaFileImport,
    FaHandshake,
    FaBroom,
    FaPlusCircle,
    FaBullhorn,
    FaUsers,
    FaUserCheck,
    FaPuzzlePiece,
    FaChrome
} from 'react-icons/fa';


const WebNavbar = () => {
    const navStyle = {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '12px 6px',
        backgroundColor: 'white',
        background: 'linear-gradient(360deg, #87ABDF 0%, #6F95CA 100%)',
        fontWeight: '500'
    };

    const dropdownMenuStyle = {
        display: 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        padding: '2rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        zIndex: 1000,
        width: "850px"
    };

    const dropdownContainerStyle = {
        position: 'relative',
        marginTop: '8px'
    };

    const showDropdown = (e) => {
        e.currentTarget.querySelector('.mega-menu').style.display = 'block';
    };

    const hideDropdown = (e) => {
        e.currentTarget.querySelector('.mega-menu').style.display = 'none';
    };

    const titleStyle = {
        color: '#5b42f3',
        fontWeight: '600',
        fontSize: '1rem',
        marginBottom: '1rem',
    };

    const sectionTitle = {
        fontWeight: '600',
    };

    const smallText = {
        fontSize: '0.875rem',
        color: '#6c757d',
    };

    return (
        <nav className="navbar navbar-expand-lg" style={navStyle}>
            {/* <Link className="navbar-brand fw-bold" to="/">Boulou.Io</Link> */}

            <Link to="/" className="logos-link">
                <div className="logos">
                    <img src={icon} style={{ width: "130px", margin: "8px", padding: "0px" }} alt="Logo" />
                </div>
            </Link>



            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">

                <div className="d-flex justify-content-between align-items-center w-100">

                    <div className="d-flex justify-content-between align-items-center w-100">
                        <ul className="navbar-nav d-flex flex-column flex-md-row gap-3 w-100" style={{ paddingLeft: "20px" }}>
                            <li
                                className="nav-item dropdown  d-block"
                                style={dropdownContainerStyle}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >
                                <span className="nav-link dropdown-toggle" role="button" style={{ fontSize: "16px" }}>
                                    Product
                                </span>
                                <div className="dropdown-menu mega-menu" style={dropdownMenuStyle}>
                                    <div className="row">
                                        {/* Column 1 */}
                                        <div className="col-md-4">
                                            <Link to="/health-care" className='no-underline'>
                                                <div style={sectionTitle}>
                                                    <FontAwesomeIcon icon={faHospital} className="custom-icon" />
                                                    HealthCare Intelligence Database
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={smallText}>
                                                InFynd healthcare marketing database transforms billions of healthcare information
                                            </div>

                                            <Link to="/companies" className='no-underline'>
                                                <div className="mt-3" style={sectionTitle}>
                                                    <FontAwesomeIcon icon={faDatabase} className="custom-icon" />
                                                    IT Companies DataBase
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={smallText}>
                                                Boulou finds the top B2B databases on IT firms in the US. Gain access to millions of IT business data points and supercharge your B2B sales lead generation.
                                            </div>
                                        </div>

                                        {/* Column 2 */}
                                        <div className="col-md-4">
                                            <Link to="/energy" className='no-underline'>
                                                <div style={sectionTitle}>
                                                    <FontAwesomeIcon icon={faBolt} className="custom-icon" />
                                                    Energy & Utilities Industry Database
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={smallText}>
                                                Discovering top global energy providers has never been easier
                                            </div>

                                            <Link to="/fleet" className='no-underline'>
                                                <div className="mt-3" style={sectionTitle}>
                                                    <FontAwesomeIcon icon={faCar} className="custom-icon" />
                                                    Fleet DataBase
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={smallText}>
                                                Streamlined Sales Prospecting for Fleet Services
                                            </div>
                                        </div>

                                        {/* Column 3 */}
                                        <div className="col-md-4">
                                            <Link to="/HiringManagers" className='no-underline'>
                                                <div style={sectionTitle}>
                                                    <FontAwesomeIcon icon={faUserTie} className="custom-icon" />
                                                    Hiring Managers DataBase
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={smallText}>
                                                Find your ideal recruitment decision makers with the US, #1 database and fuel your business growth
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-block" style={{ marginTop: "8px" }}>
                                <Link className="nav-link no-underline" to="/pricing">Pricing</Link>
                            </li>
                            <li
                                className="nav-item dropdown d-block"
                                style={dropdownContainerStyle}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >
                                <span className="nav-link dropdown-toggle" role="button" style={{ fontSize: "16px" }}>
                                    Solutions
                                </span>
                                <div className="dropdown-menu mega-menu" style={dropdownMenuStyle}>

                                    <div className="row">
                                        {/* Column 1 */}
                                        <div className="col-md-4">
                                            <Link to="/us-data" className="no-underline">
                                                <div style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaFlagUsa className="custom-icon" />
                                                    US Data
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Maximize your marketing potential with GDPR-compliant US contact data from Boulou.
                                            </div>

                                            <Link to="/appending" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaFileImport className="custom-icon" />
                                                    Data Appending
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Join thousands of businesses that trust InFynd for accurate B2B data appending services to enhance their sales and marketing strategies.
                                            </div>

                                            <Link to="/sales" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaHandshake className="custom-icon" />
                                                    Boulou for Sales
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Discover your ideal prospect, understand their buyer persona, and connect with the right decision makers to close more B2B sales and power up your revenue.
                                            </div>
                                        </div>

                                        {/* Column 2 */}
                                        <div className="col-md-4">
                                            <Link to="/cleansing" className="no-underline">
                                                <div style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaBroom className="custom-icon" />
                                                    Data Cleansing
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                We ensure your business data is reliable, up-to-date, and optimized for smarter decision-making, enhanced marketing performance, and improved customer engagement.
                                            </div>

                                            <Link to="/enrichment" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaPlusCircle className="custom-icon" />
                                                    Data Enrichment
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Enrich your CRM with our exclusive, tailor-made solutions designed to deliver accurate, up-to-date, and actionable insights.
                                            </div>

                                            <Link to="/marketing" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaBullhorn className="custom-icon" />
                                                    Boulou for Marketing
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Drive more qualified leads and effortlessly win more marketing opportunities with reliable B2B email data lists of key decision-makers, using B2B Data Solutions for Marketing.
                                            </div>
                                        </div>

                                        {/* Column 3 */}
                                        <div className="col-md-4">
                                            <Link to="/B2bleads" className="no-underline">
                                                <div style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaUsers className="custom-icon" />
                                                    Get Free B2B Leads
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Identify key decision makers from 15M+ compliant B2B contacts in the US. All set to generate leads in the pipeline.
                                            </div>

                                            <Link to="/marketing" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaUserCheck className="custom-icon" />
                                                    Boulou for Marketing
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Boulou US recruitment database software allows recruiters, HR managers, and staffing agencies to place talented resources efficiently.
                                            </div>

                                            {/* New: Chrome Extension */}
                                            <Link to="/chrome-extension" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaChrome className="custom-icon" />
                                                    Chrome Extension
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Use our Chrome extension to access lead insights directly from LinkedIn and websites while browsing.
                                            </div>

                                            {/* New: API Access */}
                                            <Link to="/api-access" className="no-underline">
                                                <div className="mt-3" style={{ fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                                                    <FaPuzzlePiece className="custom-icon" />
                                                    API Integration
                                                </div>
                                            </Link>
                                            <div className="mt-2" style={{ fontSize: '14px', color: '#555' }}>
                                                Integrate our powerful data into your apps and workflows with secure and easy-to-use APIs.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>

                            <li className="nav-item " style={{ marginTop: "8px" }}>
                                <Link className="nav-link" to="/custom-data">Custom-Build Data</Link>
                            </li>

                            <li className="nav-item" style={{ marginTop: "8px" }}>
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>

                            <li className="nav-item" style={{ marginTop: "8px" }}>
                                <Link className="nav-link" to="/demo-videos">How it Works</Link>
                            </li>

                            <li className="nav-item" style={{ marginTop: "8px" }}>
                                <Link className="nav-link" to="/sample-data">Sample data</Link>
                            </li>


                            {/* <div className="d-flex gap-2">
                                <button className="btn" style={{ fontWeight: "500" }} >Login</button>
                                <button className="btn" style={{ background: "#ff8817", fontWeight: "500" }}>Book a Demo</button>
                            </div> */}

                            <li className="nav-item mt-3 mt-md-0 ms-md-auto">
                                <div className="d-flex gap-2" style={{ marginTop: "8px" }}>
                                    <button onClick={() => window.open('/login', '_blank')} className="btn" style={{ fontWeight: "500" }}>Login</button>
                                    <button
                                        onClick={() => window.location.href = '/demo'}
                                        className="btn"
                                        style={{ background: "#ff8817", fontWeight: "500" }}
                                    >
                                        Book a Demo
                                    </button>

                                </div>
                            </li>

                        </ul>
                        {/* 
                        <div className="d-flex gap-2 mt-3 mt-md-0">
                            <button className="btn" style={{ fontWeight: "500" }}>Login</button>
                            <button className="btn" style={{ background: "#ff8817", fontWeight: "500" }}>Book a Demo</button>
                        </div> */}

                        {/* Buttons aligned to right */}

                    </div>



                </div>

            </div>
        </nav >
    );
};

export default WebNavbar;
