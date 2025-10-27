import React, { useEffect } from "react";
import bar from '../../assets/bar.png'
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import append from '../../assets/append.png'
import { Link } from "react-router-dom";
import tool from '../../assets/tool.png'
import cube from '../../assets/cube.png'
import search from '../../assets/search.png'
import box from '../../assets/box.png'

const Custom = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "60px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Data that’s built for you, not just for everyone</h2>
                        <p className="mb-4">
                            Tired of dealing with messy, outdated, or inconsistent data? Our advanced B2B data cleansing services help you regain control by identifying and eliminating inaccuracies, removing duplicate records, and updating outdated information.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={tool}
                            alt="Hiring managers"
                            className="img-fluid rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Custom-built US B2B Database</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>Why does your business need B2B Custom Data?</h4>
                            <br />
                            Is your business focused on results more than reaching out to prospects? Then you need the custom b2b database.
                            ‍
                            Boulou custom-built UK B2B database will narrow your business scope and accelerate lead generation and ROI. Boulou can help you target your ideal and most perfect customers based on the focus of your marketing campaign or sales objective.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={cube}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={search}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Tell us your needs. We'll find your ideal customers.</h4>
                            <br />
                            <p>
                                Know exactly what your requirement is? Our Custom B2B database solutions can help. Share your requirements and get the exact database that you’re searching for.
                                <br /><br />
                                Grab your accurate custom-built US B2B database to do your B2B prospecting, connect with the right audience, and convert them into leads to meet your sales targets. What’s special about custom-built data solutions? You can get your customized database that aligns with your specific requirements. Also, ensure high-quality verified data for your marketing and sales. Custom Build B2B Contact Database helps you to find out the right prospects at the Right time.
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Requirements Gathering</h4>
                            <br />
                            <p>
                                We get it—you need the right data fast. Just share a few details like lead count, location, industry, or job role, and we'll deliver custom-built, ready-to-use prospect data tailored to your goals.
                                <br /><br />
                                We recognize the importance of accurate and targeted prospect data. By providing a few key details—such as desired lead volume, geographic focus, industry, and job titles—our team will curate a tailored data solution to meet your specific business objectives efficiently and reliably.
                            </p>
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={box}
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

export default Custom;
