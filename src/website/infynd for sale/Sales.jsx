import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import salesrocket from '../../assets/salesrocket.png'
import security from '../../assets/security.png'
import speaker from '../../assets/speaker.png'
import stats from '../../assets/stats.png'
import filter from '../../assets/filter.png'

const Sales = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Build Your Sales Pipeline Today with Boulou B2B sales prospecting!</h2>
                        <p className="mb-4">
                            Discover your ideal prospect, understand their buyer persona, and connect with the right decision makers to close more B2B sales and power up your revenue.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={filter}
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
                            <h4>Access Accurate Insights</h4>
                            <br />
                            Discover the decision-making and purchasing authority. Connect with key stakeholders like CEOs, CFOs, and Directors. Filter by:
                            Job functions & responsibilities
                            Professional qualifications & experience
                            Reporting hierarchy
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={stats}
                            alt="Healthcare Folder"
                            className=""
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={speaker}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>

                    <div className="col-lg-6 px-5" >
                        <p style={{ color: "black" }}>
                            <h4>Reach the right B2B sales leads</h4>
                            <br />
                            <p>
                                Enhance your sales leads database by acquiring authentic B2B leads of the prospects you seek. Shorten sales discovery by acquiring detailed sales prospecting database. Engage with such potential prospects and close more B2B sales deals.
                                Seamlessly identify and engage with ideal buyers.
                                Get real time data insights to seal the deal.
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Supercharge your sales equilibrium</h4>
                            <br />
                            <p>
                                boulou global database of 400M B2B sales leads and 9M Companies helps sales representatives to find B2B sales prospecting opportunities by using 100+ firmographic and contact filters - to uncover and close actionable deals today.
                            </p>
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={salesrocket}
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

export default Sales;
