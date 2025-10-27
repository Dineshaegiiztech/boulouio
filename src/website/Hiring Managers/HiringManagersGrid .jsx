import React, { useEffect } from "react";
import hiring from '../../assets/hiring.png'
import WebNavbar from "../navbar";
import WebFooter from "../footer";

import { FaUserTie, FaShieldAlt } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const HiringManagers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Reach the Top Hiring Managers</h2>
                        <p className="mb-4">
                            Find your ideal recruitment decision makers with the US, #1 database and fuel your business growth
                        </p>

                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="p-3 bg-dark rounded text-center">
                                    <h4 className="fw-bold">200K+</h4>
                                    <p className="mb-0">Hiring Managers</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="p-3 bg-dark rounded text-center">
                                    <h4 className="fw-bold">3M+</h4>
                                    <p className="mb-0">Active B2B Profiles</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 bg-dark rounded text-center">
                                    <h4 className="fw-bold">100%</h4>
                                    <p className="mb-0">GDPR Complaint</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 bg-dark rounded text-center">
                                    <h4 className="fw-bold">100%</h4>
                                    <p className="mb-0">Human Verified Data</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={hiring}
                            alt="Hiring managers"
                            className="img-fluid rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container py-5" style={{ backgroundColor: "white" }}>
                <div className="row text-center text-white justify-content-center">
                    <div className="col-lg-4 mb-4">
                        <div className="text-dark p-4 rounded shadow-sm h-100" style={{ background: "#2d5da3" }}>
                            <FaUserTie size={40} className="text-danger mb-3" />
                            <h5 style={{ color: "white" }} className="fw-bold">Specialised Recruitment Decision Makers</h5>
                            <p style={{ color: "white" }} className="mt-2">
                                Connect with the decision-makers in every industry with our advanced filter options and stay ahead of your competitors!
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="text-dark p-4 rounded shadow-sm h-100" style={{ background: "#2d5da3" }}>
                            <BiUserCheck size={40} className="text-danger mb-3" />
                            <h5 style={{ color: "white" }} className="fw-bold">Qualified HR Profiles</h5>
                            <p style={{ color: "white" }} className="mt-2">
                                Get access to highly qualified HR profiles with our in-house human-validated data.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="text-dark p-4 rounded shadow-sm h-100" style={{ background: "#2d5da3" }}>
                            <FaShieldAlt size={40} className="text-danger mb-3" />
                            <h5 style={{ color: "white" }} className="fw-bold">GDPR and CCPA Compliance Data</h5>
                            <p style={{ color: "white" }} className="mt-2">
                                With our 100% GDPR and CCPA-compliant data, you can achieve your business goals 2X faster.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <Link to="/demo">
                        <button className="btn btn-danger px-4 py-2">
                            Get a Custom Quote →
                        </button>
                    </Link>
                </div>
            </div>

            <WebFooter />
        </>

    );
};

export default HiringManagers;
