import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import certified from '../../assets/certified.png'
import contact from '../../assets/contact.png'
import celebrate from '../../assets/celebrate.png'
import verified from '../../assets/verified.png'
import iconcontact from '../../assets/iconcontact.png'

const Recruitment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Find your perfect hire with the Verified HR Email Database</h2>
                        <p className="mb-4">
                            Boulou US recruitment database software allows recruiters, HR managers, and staffing agencies to place talented resources efficiently. Access our verified HR email databases and B2B Hiring managers database to make this happen easily.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={certified}
                            alt="Hiring managers"
                            className="rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Hire Qualified Talents and Close Your Job Opening</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Contact Insights</h4>
                            <br />
                            Gain direct access to decision-makers with our verified HR Email Database. Instantly unlock active email addresses and direct-dial phone numbers of HR professionals across industries. Whether you're recruiting, promoting services, or building B2B connections, our database helps you cut through the noise and reach the right people fast.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={contact}
                            alt="Healthcare Folder"
                            className=""
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={iconcontact}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>

                    <div className="col-lg-6 px-5" >
                        <p style={{ color: "black" }}>
                            <h4>Candidate Info</h4>
                            <br />
                            <p>
                            Gain in-depth insights into potential hires with our comprehensive US recruitment database. Access key details such as job title, job function, seniority level, and years of professional experience.
                            Whether you're targeting top talent or building a strategic talent pipeline, our database helps you identify the right candidates faster and with greater precision. 
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Prioritize Hiring</h4>
                            <br />
                            <p>
                            Streamline your recruitment strategy with our B2B Hiring Managers Database. Instantly access organizational charts, key skills, office locations, and professional certifications to better understand hiring needs and decision-making structures.
                            </p>
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={verified}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

            </div>

            <WebFooter />
        </>

    );
};

export default Recruitment;
