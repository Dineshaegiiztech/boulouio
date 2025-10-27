import React, { useEffect } from "react";
import bar from '../../assets/bar.png'
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import append from '../../assets/append.png'
import { Link } from "react-router-dom";
import cleansing from '../../assets/cleansing.png'
import rocket from '../../assets/rocket.png'
import star from '../../assets/star.png'
import direction from '../../assets/direction.png'

const Cleansing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Turn Disorganized Data into Actionable Insights</h2>
                        <p className="mb-4">
                            Tired of dealing with messy, outdated, or inconsistent data? Our advanced B2B data cleansing services help you regain control by identifying and eliminating inaccuracies, removing duplicate records, and updating outdated information.
                            <br /><br />
                            We ensure your business data is reliable, up-to-date, and optimized for smarter decision-making, enhanced marketing performance, and improved customer engagement. Say goodbye to data chaos—and hello to clean, consistent, and high-quality data that drives results.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={cleansing}
                            alt="Hiring managers"
                            className="img-fluid rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Advantages of Data Cleansing</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>Boost Operational Efficiency</h4>
                            <br />
                            Inaccurate or outdated data drains valuable time and resources. Boulou’s advanced data scrubbing services remove errors and inconsistencies to streamline your workflows—saving you time, reducing operational costs, and enhancing overall productivity.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={rocket}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={star}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Drive Customer Satisfaction</h4>
                            <br />
                            <p>
                                Boulou offers powerful email list cleaning and CRM data cleansing services tailored for US businesses. By ensuring access to accurate, up-to-date B2B data, you can connect with your target audience more effectively and deliver better customer experiences.
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Make Smarter Business Decisions</h4>
                            <br />
                            <p>
                                Accurate data leads to informed decisions. With clean, reliable data from Boulou, your business can confidently take strategic actions, improve forecasting, and achieve greater results. Data-driven insights empower you to scale faster and maximize your ROI.
                            </p>
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={direction}
                            alt="Healthcare Folder"
                            className="img-fluid"
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

export default Cleansing;
