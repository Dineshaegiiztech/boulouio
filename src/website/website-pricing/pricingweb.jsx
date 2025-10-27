import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pricingweb.css';
import WebNavbar from '../navbar';
import WebFooter from '../footer';

function Webprice() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubscribe = () => {
        window.open('/login', '_blank');
    };

    const buttonStyle = {
        marginTop: '15px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px'
    };

    return (
        <>
            <WebNavbar />
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <h3>Everything you need to grow your business</h3>
                <p>"Build a stronger sales pipeline with powerful tools. Close more deals using AI-driven insights. Enrich your data with industry-leading B2B intelligence."</p>
            </div>
            <span style={{ color: 'red', fontSize: '14px', marginTop: '8px', display: 'block', textAlign:"center" }}>
                * Please login to app for subscribe
            </span>

            <div className="container-pricing">
                {[
                    { title: 'Free', price: '$0', credits: 50 },
                    { title: 'Basic', price: '$49', credits: 250 },
                    { title: 'Professional', price: '$79', credits: 500 },
                    { title: 'Organization', price: '$119', credits: 1000 }
                ].map((plan, idx) => (
                    <div
                        key={idx}
                        className={`card-pricing ${idx < 3 ? 'subscribed-pricing' : ''}`}
                    >
                        <h4>{plan.title}</h4>
                        <h2>{plan.price}</h2>
                        <h3>Credits: {plan.credits}</h3>
                        <ul>
                            <li>All features in Free Plan</li>
                            <li>Unlimited habit tracking</li>
                            <li>Calendar Integration</li>
                        </ul>
                        <button style={buttonStyle} onClick={handleSubscribe}>
                            Subscribe
                        </button>
                    </div>
                ))}
            </div>
            <WebFooter />
        </>
    );
}

export default Webprice;
