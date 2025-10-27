import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import success from '../../assets/success.png'
import security from '../../assets/security.png'
import sales from '../../assets/sales.png'
import free from '../../assets/free.png'

const B2bLeads = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">One-step solution for all your Prospecting Needs</h2>
                        <p className="mb-4">
                            Identify key decision makers from 15M+ compliant B2B contacts in the US. All set to generate leads in the pipeline. Get B2B contact database free with our FREE CREDITS today!
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={free}
                            alt="Hiring managers"
                            className="img-fluid rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>B2B Contact Database Free</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>A Solution for any niche market</h4>
                            <br />
                            Does not matter what prospect you are after, Boulou The leading B2B data provider has it all. Find your targets with solutions that push your business forward and empower your ideas into the future. Start accessing our free business contacts database and drive your business growth with accurate, actionable B2B data.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={success}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0" style={{ paddingTop: "100px" }}>
                        <img
                            src={sales}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>

                    <div className="col-lg-6 px-5" style={{ paddingTop: "100px" }}>
                        <p style={{ color: "black" }}>
                            <h4>Marketing</h4>
                            <br />
                            <p>
                                Optimize campaigns and stay ahead with our accurate b2b email database US from Boulou - The accurate B2B Email List Providers.  Start your marketing with our free b2b email lists US and improve your marketing outreach.
                            </p>
                            <br /><br />
                            <h4>Sales</h4>
                            <br />
                            <p>
                                Identify major prospects from Boulou B2B leads database free to boost sales and close deals. With an accurate email list for B2B prospecting, finding high-quality leads turns easier. Boulou free b2b email lists US will be the perfect platform for connecting you with targeting prospects.
                            </p>
                            <br /><br />
                            <h4>Recruiting</h4>
                            <br />
                            <p>
                                Discover talent, target candidates and drive your company to succeed with our b2b email database US. Access our free b2b database with our 5 free credits for your recruitment needs.
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Committed to Data Privacy</h4>
                            <br />
                            <p>
                                Boulou follows the guidelines of GDPR, PECR and ICO as well. We have implemented strict security measures in order to ensure your data remains safe and secure.
                            </p>
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={security}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

            </div>

            {/* <div className="container text-light py-5">
                
            </div> */}

            <WebFooter />
        </>

    );
};

export default B2bLeads;
