import React, { useEffect } from 'react';
import WebNavbar from '../website/navbar';
import WebFooter from '../website/footer';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <WebNavbar />
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '2rem',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                color: '#333'
            }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '0.5rem', textAlign:"center" }}>
                    🍪 Cookie Policy for Boulou.io
                </h1>
                <br/>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '1.5rem' }}>
                    Effective Date: 23/04/2025
                </p>

                <p>
                    At <strong>Boulou.io</strong>, we believe in being transparent about how we collect and use data.
                    This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
                </p>

                <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.5rem' }}>What Are Cookies?</h2>
                <p>
                    Cookies are small text files stored on your device when you visit a website. They help websites remember
                    information about your visit, like your preferred language or settings, and can make your next visit easier
                    and the site more useful to you.
                </p>

                <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.5rem' }}>How We Use Cookies</h2>
                <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for the website to function. Without them, certain services cannot be provided.</li>
                    <li><strong>Performance & Analytics Cookies:</strong> Help us understand how visitors interact with the website to improve user experience.</li>
                    <li><strong>Functionality Cookies:</strong> Remember your preferences and choices to provide a more personalized experience.</li>
                    <li><strong>Third-Party Cookies:</strong> May be set by services like embedded videos or chat widgets.</li>
                </ul>

                <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.5rem' }}>Your Choices</h2>
                <p>
                    You can control and manage cookies through your browser settings. You can also:
                </p>
                <ul>
                    <li><strong>Accept or Decline:</strong> Use our cookie banner to accept or reject cookies.</li>
                    <li><strong>Clear Cookies:</strong> You can clear cookies manually from your browser at any time.</li>
                    <li><strong>Disable Cookies:</strong> Disabling cookies might affect site functionality.</li>
                </ul>
                <p>
                    Learn more at <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">All About Cookies</a>.
                </p>

                <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.5rem' }}>Updates to This Policy</h2>
                <p>
                    We may update this Cookie Policy occasionally. Changes will be posted on this page with a new effective date.
                </p>

                <h2 style={{ fontSize: '20px', marginTop: '2rem', marginBottom: '0.5rem' }}>Contact Us</h2>
                <p>If you have any questions about this Cookie Policy, contact us at:</p>
                <ul>
                    <li><strong>Email:</strong> support@boulou.io</li>
                    <li><strong>Website:</strong> <a href="https://boulou.io" target="_blank" rel="noopener noreferrer">https://boulou.io</a></li>
                </ul>
            </div>
            <WebFooter />
        </>

    );
};

export default CookiePolicy;
