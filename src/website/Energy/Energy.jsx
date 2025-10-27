import React, { useEffect } from "react";
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import energy from '../../assets/energy.png'
import wall from '../../assets/wall.png'

export default function Energy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid bg-dark text-light py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <h2 className="fw-bold mb-4">Energy & Utilities Industry Database</h2>
                        <p>
                            Discovering top global energy providers has never been easier. Gain access to millions of verified energy and utilities contacts from the US to power up your prospecting efforts. Book a free demo today and explore one of the most comprehensive databases in the energy and utilities sector.
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={energy}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>Energy & Utilities Industry Database</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            Boulou offers a real-time, human-verified energy and utilities database across the UK that serves as a dependable resource for your marketing campaigns. We deliver customized data on nearly every energy provider, including insights such as company revenue and employee count.
                            <br /> <br />
                            Our commitment to accuracy and adherence to strict data protocols ensures a trusted and high-quality energy utilities database. Recognized as one of the top providers in the UK, Boulou is dedicated to meeting your unique requirements through tailored data solutions.
                            <br /> <br />
                            Additionally, Boulou helps you access region-specific data, offering Energy and Utilities Data Lists built through meticulous processes—making us one of the most reliable and comprehensive data providers in the industry.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={wall}
                            alt="Healthcare Folder"
                            className="img-fluid"

                        />
                    </div>
                </div>
            </div>
            <WebFooter />
        </>
    )
}