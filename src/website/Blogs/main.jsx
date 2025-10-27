import React, { useEffect } from "react";
import "./main.css"; // Optional CSS file
import WebNavbar from "../navbar";
import WebFooter from "../footer";
import { Link } from "react-router-dom";
import card1 from "../../assets/Blogs/card1.png";
import card2 from "../../assets/Blogs/card2.png";
import card3 from "../../assets/Blogs/card3.png";
import card4 from "../../assets/Blogs/card4.png";
import card5 from "../../assets/Blogs/card5.png";
import card6 from "../../assets/Blogs/card6.png";


const Blogsmain = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const cards = [
        {
            title: "Content Marketing Metrics to Track",
            text: "Discover key metrics like traffic, engagement, leads, and sales to evaluate and optimize your B2B content strategy for maximum ROI.",
            image: card1,
            link: "/blogs/content-marketing-metrics-to-track"
        },
        {
            title: "5 Common B2B Data Mistakes",
            text: "Avoid data issues like outdated info and duplicates. Learn how better data management enhances accuracy and boosts engagement.",
            image: card2,
            link: "/blogs/5-common-b2b-data-mistakes"
        },
        {
            title: "What is B2B Lead Generation?",
            text: "Learn how to attract and convert business clients using proven strategies and tools to drive predictable revenue.",
            image: card3,
            link: "/blogs/What-is-b2b-lead-generation"
        },
        {
            title: "Aligning Sales & Marketing",
            text: "Increase revenue by aligning your sales and marketing teams. Discover practical steps for better communication and results.",
            image: card4,
            link: "/blogs/aligning-sales-marketing"
        },
        {
            title: "How Custom-Built Data Helps",
            text: "Explore how tailored B2B data solutions improve ROI by enhancing your sales and marketing strategies.",
            image: card5,
            link: "/blogs/how-custom-built-data-helps"
        },
        {
            title: "B2B Marketing in 2025",
            text: "Get ahead with strategies for modern B2B marketing. Focus on personalization, data-driven decisions, and long-term relationships.",
            image: card6,
             link: "/blogs/b2b-marketing-in-2025"
        },
    ];


    return (

        <>
            <WebNavbar />
            <div className="container mt-4">
                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card fixed-card">
                                <img
                                    src={card.image}
                                    className="card-img-top"
                                    alt={card.title}
                                    style={{ width: "100%", height: "180px" }}
                                />

                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                    <Link to={card.link} className="btn mt-auto hoverchange">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <WebFooter />
        </>

    );
};

export default Blogsmain;
