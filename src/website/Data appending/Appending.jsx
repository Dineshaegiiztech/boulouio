import React, { useEffect } from "react";
import bar from '../../assets/bar.png'
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import append from '../../assets/append.png'
import { Link } from "react-router-dom";
import boulou from '../../assets/boulou.png'

const Appending = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Discover New Possibilities with Data Appending</h2>
                        <p className="mb-4">
                            Join thousands of businesses that trust InFynd for accurate B2B data appending services to enhance their sales and marketing strategies.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={append}
                            alt="Hiring managers"
                            className="img-fluid rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>B2B Data Appending Services</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>More Data. More Choices. More Growth.</h4>
                            <br />
                            With access to a robust database of over 400 million records, InFynd simplifies your business operations by up to 40% through industry-leading B2B data appending services. Our customizable solutions are tailored to elevate your sales, marketing, and outreach strategies.


                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={bar}
                            alt="Healthcare Folder"
                            className="img-fluid"

                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={boulou}
                            alt="Healthcare Folder"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>How does Boulou Data Appending Work?</h4>
                            <br />
                            <p>
                                Boulou is a trusted leader in data appending, dedicated to enriching and updating your B2B database for smarter business decisions. We offer Email Appending, Phone Appending, and Contact Data Append services to strengthen your sales, marketing, and outreach strategies.
                            </p>
                        </p>
                    </div>

                </div>

            </div>

            {/* <div className="container text-light py-5">
                
            </div> */}

            <WebFooter />
        </>

    );
};

export default Appending;
