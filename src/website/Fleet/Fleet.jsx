import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import flight from '../../assets/flight.png'
import data from '../../assets/data.png'
import cup from '../../assets/cup.png'

export default function Fleet() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid bg-dark text-light py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <h2 className="fw-bold mb-4">Streamlined Sales Prospecting for Fleet Services</h2>
                        <p>
                            Discover and engage your ideal audience with our comprehensive fleet services data lists. Strengthen your sales pipeline and generate high-quality leads that drive conversions.
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={flight}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Why Boulou is Your Best Choice for Marketing Fleet Management Services</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>A Massive Bundle of Efficiency and Variety</h4>
                            <br/>
                            Everyone loves personalization. Our US fleet data list delivers a tailored B2B database of fleet services, empowering you to prospect more effectively and achieve your desired outcomes.
                            <br/><br/>
                            With our extensive database, running out of new leads is a rare event—giving you complete data intelligence and access to the latest businesses in the field.


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
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Why should I consider Boulou?</h2>

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
                           <h4>Improved Lead Generation</h4>
                           <br/>
                           <p>Boulou’s comprehensive US database of verified and up-to-date contacts enables fleet management companies to generate high-quality leads with greater efficiency. With direct access to the contact information of key decision-makers in their target industries, businesses can connect with prospects quickly and build strong relationships with potential customers.</p>
                        </p>
                    </div>

                </div>
            </div>


            <WebFooter />
        </>
    )
}