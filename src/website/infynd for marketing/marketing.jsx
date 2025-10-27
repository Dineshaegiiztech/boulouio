import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import salesrocket from '../../assets/salesrocket.png'
import marketing from '../../assets/marketing.png'
import celebrate from '../../assets/celebrate.png'
import speak from '../../assets/speak.png'
import people from '../../assets/people.png'

const Marketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">B2B Data Solutions For Marketing</h2>
                        <p className="mb-4">
                            Drive more qualified leads and effortlessly win more marketing opportunities with reliable B2B email data lists of key decision-makers, using B2B Data Solutions for Marketing.  The trusted B2B marketing data providers and get accurate B2B data solutions to achieve your targets.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
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

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>How can you hit your target with Boulou</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Supercharge Your Marketing Campaign</h4>
                            <br />
                            tilize our B2B email marketing database to accelerate your marketing initiatives with Boulou.Leverage your marketing strategy to the potential buyers based on their intent through email list for marketing.
                            Generate 7X more qualified leads
                            Super charge your marketing pipeline.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={people}
                            alt="Healthcare Folder"
                            className=""
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={speak}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>

                    <div className="col-lg-6 px-5" >
                        <p style={{ color: "black" }}>
                            <h4>Advanced Email Marketing</h4>
                            <br />
                            <p>
                                Get access to advanced email marketing database with funding information, tech stacks adoption, investments and centralize your B2B email marketing database.
                                Unleash the full potential of ABM strategy by using our marketing prospecting tool.
                                Maximize B2B email data lists leads and experience hyper-growth in short durations.
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Achieve Targeted Growth with Boulou</h4>
                            <br />
                            <p>
                            Boulou is designed to help businesses grow smarter, not harder. By combining data-driven insights with strategic marketing tools, Boulou ensures your message reaches the right audience at the perfect time. Whether you're aiming to expand your customer base, increase engagement, or boost conversions, Boulou provides the precision and support needed to make it happen.
                            </p>
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={celebrate}
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

export default Marketing;
