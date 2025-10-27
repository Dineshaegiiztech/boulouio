import React, { useEffect } from 'react';
import WebNavbar from '../navbar';
import WebFooter from '../footer';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        lineHeight: '1.6',
    };

    const heading1Style = {
        fontSize: '32px',
        marginBottom: '16px',
        textAlign: "center"
    };

    const heading2Style = {
        fontSize: '24px',
        marginTop: '24px',
        marginBottom: '12px',
    };

    const paragraphStyle = {
        marginBottom: '16px',
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '20px',
        marginBottom: '16px',
    };

    const listItemStyle = {
        marginBottom: '8px',
    };

    return (
        <>
            <WebNavbar />
            <div style={containerStyle}>
                <h1 style={heading1Style}>About Us</h1>
                <p style={paragraphStyle}>
                    At <strong>Boulou.io</strong>, we believe in the power of data to drive smart business decisions.
                    We are a B2B intelligence platform specializing in collecting and curating publicly available business
                    data to help companies discover new leads, deepen market understanding, and grow more strategically.
                </p>
                <p style={paragraphStyle}>
                    Our platform aggregates structured, high-quality information on businesses, professionals, and
                    industries—so you don’t have to. Whether you're looking to build sales pipelines, enhance marketing
                    accuracy, or conduct market research, Boulou.io gives you the insights you need, fast and reliably.
                </p>

                <h2 style={heading2Style}>What We Do</h2>
                <ul style={listStyle}>
                    <li style={listItemStyle}>
                        <strong>Data Aggregation:</strong> We collect, verify, and structure publicly available data from reliable sources.
                    </li>
                    <li style={listItemStyle}>
                        <strong>B2B Intelligence:</strong> We deliver accurate, actionable insights to help you identify and connect with potential clients and partners.
                    </li>
                    <li style={listItemStyle}>
                        <strong>Compliance First:</strong> We are fully compliant with GDPR and CCPA, ensuring privacy, transparency, and ethical data use.
                    </li>
                </ul>

                <h2 style={heading2Style}>Our Mission</h2>
                <p style={paragraphStyle}>
                    To empower businesses with transparent, accessible, and ethical data that fuels smarter connections and drives growth.
                </p>
            </div>
            <WebFooter />
        </>

    );
};

export default AboutUs;
