import React, { useEffect } from "react";
import bar from '../../assets/bar.png'
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import append from '../../assets/append.png'
import { Link } from "react-router-dom";
import cleansing from '../../assets/cleansing.png'
import enrich from '../../assets/enrich.png'
import rocket from '../../assets/rocket.png'
import setting from '../../assets/setting.png'
import withs from '../../assets/withs.png'
import puzzle from '../../assets/puzzle.png'

const Enrichment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-fluid" style={{ backgroundColor: "black", color: "#fff", padding: "0px 40px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-3">Seamless CRM Enrichment with tailor-made solutions</h2>
                        <p className="mb-4">
                            Don’t settle for half-baked information. Enrich your CRM with our exclusive, tailor-made solutions designed to deliver accurate, up-to-date, and actionable insights. Whether you're looking to fill in missing data, verify existing records, or gain a 360-degree view of your customers, our enrichment tools ensure your CRM becomes a powerful engine for smarter decision-making and stronger customer relationships.
                        </p>

                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src={enrich}
                            alt="Hiring managers"
                            className="img-fluid rounded shadow" style={{ width: "85%" }}
                        />
                    </div>
                </div>
            </div>

            <div className="container text-light py-5">
                <h2 className="fw-bold mb-4" style={{ color: "black" }}>CRM Enrichment Solutions</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>

                            <h4>We Solve your Puzzle - Piece by Piece</h4>
                            <br />
                            Incomplete CRM data can hinder your business decisions. Contact and account information changes frequently. Companies undergo acquisitions, office expansions, or people may switch job roles or move to different cities.
                            ‍
                            To keep your CRM database accurate with up-to-date information, regular updates are crucial. At Boulou, we specialize in providing B2B data enrichment solutions to enhance your CRM database with an accurate and complete view.
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={puzzle}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={setting}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ width: "65%" }}
                        />
                    </div>

                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Prevent Data Decay with  CRM Enrichment Solutions</h4>
                            <br />
                            <p>
                                Data decay undermines CRM accuracy due to job changes, relocations, and company shifts. With Boulou B2B data enrichment tool, we ensure your data remains accurate and up-to-date, enhance data insights, segmentation, and targeting.
                                <br /><br />
                                Keep your CRM current to prevent data decay and make informed decisions that personalize customer engagement.Ready to improve your data? Contact Boulou today for customised CRM data enrichment solution and a free consultation.
                            </p>
                        </p>
                    </div>

                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <p style={{ color: "black" }}>
                            <h4>Transform Missed Details into Golden Opportunities</h4>
                            <br />
                            <p>
                                Say goodbye to incomplete CRM data. Sign up for a demo with our experts and let us showcase the transformative power of our CRM enrichment solutions. Take the first step towards a data-driven future with Boulou.
                                <br /><br />
                                With our B2B data enrichment tool, it is easy for you to enrich your database and utilize some golden opportunities to reach your business growth.
                                <br /><br />
                                Book your free live demo now and reach out to us to get a customised CRM data enrichment solution that meets your business requirements.
                            </p>
                        </p>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={withs}
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

export default Enrichment;
