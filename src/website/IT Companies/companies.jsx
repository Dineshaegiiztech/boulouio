import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import code from '../../assets/code.png'
import data from '../../assets/data.png'
import Outreach  from '../../assets/Outreach.png'

export default function Companies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid bg-dark text-light py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <h2 className="fw-bold mb-4">Access Millions of US IT Company Data That Match Your Requirements</h2>
                        <p>
                            Boulou finds the top B2B databases on IT firms in the US. Gain access to millions of IT business data points and supercharge your B2B sales lead generation.
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={code}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Real-Time Company Data That Drives Sales Leads</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            Our IT contact data lists are updated regularly to ensure accuracy and deliver maximum results for our clients’ campaigns.
                            <br /><br />
                            Boulou enhances your IT contacts database in the US with high-level professionals from the IT industry—such as CEOs, CTOs, and other key decision-makers. These influential profiles empower greater integration and partnerships for clients seeking data intelligence from the US.
                            <br /><br />
                            Find companies by preferred states and Total Addressable Markets (TAMs) to maximize the impact of your outreach programs.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={data}
                            alt="Healthcare Folder"
                            className="img-fluid"

                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Data Fields That Deepen Your Outreach Process</h2>

                <div className="row align-items-center">


                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={Outreach}
                            alt="Healthcare Folder"
                            className="img-fluid"

                        />
                    </div>

                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            Looking to kickstart new IT business deals but struggling to find a reliable and accurate IT contacts database in the US? Boulou’s US IT company database is the solution you need.
                            <br /><br />
                            Boulou’s IT company database helps you connect with verified B2B contacts from IT firms across the US. Access decision-maker information using our IT contact data lists and reach out directly to close more high-value deals with ease.
                        </p>
                    </div>

                </div>
            </div>


            <WebFooter />
        </>
    )
}