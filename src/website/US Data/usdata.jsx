import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import usdata from '../../assets/usdata.png'
import us1 from '../../assets/us1.png'
import cup from '../../assets/cup.png'
import web3 from '../../assets/web3.png'
import lap from '../../assets/lap.png'

export default function USdata() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid bg-dark text-light py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <h2 className="fw-bold mb-4">Boost Sales with GDPR-Compliant US B2B Data Solutions</h2>
                        <p>
                            Maximize your marketing potential with GDPR-compliant US contact data from Boulou. Our solutions deliver accurate leads, direct dials, and verified email addresses to empower your revenue team to meet and exceed performance goals.
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={usdata}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Why Boulou is used for US B2B data solutions</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>Get Personalized, Reliable, and Accurate Data</h4>
                            <br />
                            By understanding your unique targeting requirements, Boulou delivers tailored US business email database solutions to support your specific marketing, sales, and recruitment goals. Leverage 25+ advanced filters to identify prospects by location, revenue, and more—enabling hyper-personalized outreach that drives results.


                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={us1}
                            alt="Healthcare Folder"
                            className="img-fluid"

                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={cup}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>How B2B Data Insights Help You Reach Key Prospects</h4>
                            <br />
                            <p>Today, many businesses, sales, and marketing teams struggle to connect with the right B2B prospects. With Boulou – a leading B2B data provider in the US – you can access accurate data insights to directly engage decision-makers and uncover high-potential leads. Reach the right people faster and drive smarter growth with precision targeting.

                            </p>
                        </p>
                    </div>

                </div>

                <h2 className="fw-bold" style={{ color: "black" }}>Why Boulou is used for US B2B data solutions</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <p style={{ color: "black" }}>

                            <h4>Get Personalized, Reliable, and Accurate Data</h4>
                            <br />
                            By understanding your unique targeting requirements, Boulou delivers tailored US business email database solutions to support your specific marketing, sales, and recruitment goals. Leverage 25+ advanced filters to identify prospects by location, revenue, and more—enabling hyper-personalized outreach that drives results.


                        </p>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={web3}
                            alt="Healthcare Folder"
                            className="img-fluid"

                        />
                    </div>
                </div>

                {/* <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                        <img
                            src={lap}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6">
                        <p style={{ color: "black" }}>
                            <h4>Intelligent Data for Intelligent Business</h4>
                            <p>
                                "Boulou B2B data intelligence empowers you to connect directly with key business decision-makers, paving the way for successful and profitable deals."
                            </p>
                        </p>
                    </div>

                </div> */}

            </div>

            {/* <div className="container text-light py-5">
                
            </div> */}

            {/* <div className="container text-light py-5">
                
            </div> */}

            {/* <div className="container text-light py-5">
                
            </div> */}

            <WebFooter />
        </>
    )
}