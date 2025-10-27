import React, { useEffect } from 'react';
import './DoNotSellMyInfo.css';
import WebFooter from '../footer';
import WebNavbar from '../navbar';

const DoNotSellMyInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className="container-donot" style={{ padding: '40px 20px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: "center" }}>Do Not Sell My Personal Information</h1>
                <br />
                <p style={{ fontSize: '14px', color: '#666' }}>Effective Date: 04/01/2025</p>

                <p>
                    At <strong>Boulou.io</strong>, we respect your privacy and your rights under the California Consumer Privacy Act (CCPA).
                    If you are a California resident, you have the right to opt out of the sale of your personal information.
                </p>

                <p>
                    While Boulou.io only processes publicly available business data, we are committed to honoring opt-out requests
                    in accordance with applicable privacy laws.
                </p>

                <h2> Your Right to Opt-Out</h2>
                <p>
                    Under the CCPA, “selling” includes sharing personal information with third parties in exchange for value.
                    Although we do not sell personal data in the traditional sense, if any of our data processing activities are
                    considered a “sale” under the CCPA, you have the right to direct us not to sell your personal information.
                </p>

                <h2>How to Submit a “Do Not Sell” Request</h2>
                <ul>
                    <li>
                        <strong>Online Form:</strong> <a href="#">[Link to “Do Not Sell My Info” form]</a>
                    </li>
                    <li>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:privacy@boulou.io?subject=Do Not Sell">[Insert email address with “Do Not Sell” in the subject line]</a>
                    </li>
                    <li>
                        <strong>Mail:</strong> [Insert physical mailing address]
                    </li>
                </ul>

                <p>
                    Upon receiving your request, we will confirm your identity and process your opt-out as required by law.
                    We will not discriminate against you for exercising your privacy rights.
                </p>

                <h2>Verification Process</h2>
                <p>
                    To ensure your privacy and security, we may need to verify your identity before processing your request.
                    This may include confirming your name, email address, or other relevant details associated with our data.
                </p>

                <h2>Authorized Agents</h2>
                <p>
                    You may designate an authorized agent to submit a request on your behalf.
                    The authorized agent must provide proof of authorization and verification of identity.
                </p>

                <h2>Updates to This Policy</h2>
                <p>
                    We may update this “Do Not Sell My Info” policy from time to time to reflect changes in our practices or legal requirements.
                    Please review this page periodically for the latest information.
                </p>

                <h2>Contact Us</h2>
                <p>If you have questions about this policy or your rights, please contact us at:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:support@boulou.io">support@boulou.io</a></li>
                    <li><strong>Phone:</strong> +1 (866) 611-6943</li>
                    <li><strong>Address:</strong> 4400 N Federal Highway, Ste 8, Boca Raton, FL 33431</li>
                </ul>
            </div>
            <WebFooter />
        </>

    );
};

export default DoNotSellMyInfo;
