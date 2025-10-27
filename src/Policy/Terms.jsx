import React, { useEffect } from 'react';
import './Terms.css';
import WebNavbar from '../website/navbar';
import WebFooter from '../website/footer';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div className='terms-container'>
                <h1 style={{ textAlign: "center" }}>Terms and Conditions</h1>
                <br />
                <p><strong>Last Updated:</strong> 04/03/2025</p>
                <p>Welcome to Boulou.io. These Terms and Conditions ("Terms") govern your access to and use of our website and services. By using our services, you agree to be bound by these Terms. If you do not agree, please refrain from using our website and services.</p>

                <hr />

                <h4>1. Definitions</h4>
                <ul>
                    <li><strong>"Company"</strong> refers to Boulou.io, including its affiliates, subsidiaries, and related entities.</li>
                    <li><strong>"User"</strong> refers to any individual, business, or entity accessing or using Boulou.io, whether as a registered or unregistered user.</li>
                    <li><strong>"Services"</strong> refer to the business database services, website features, and related offerings provided by Boulou.io, including but not limited to data analytics, lead generation, and business intelligence solutions.</li>
                    <li><strong>"Content"</strong> refers to all text, images, data, software, and other materials available on the website or provided thr /ough our services, whether owned by Boulou.io or licensed from third parties.</li>
                </ul>

                <hr />

                <h4>2. Use of Services</h4>
                <ul>
                    <li>Our services are intended for businesses, professionals, and commercial use only. Individual consumers or non-business entities should not use our platform for personal purposes.</li>
                    <li>You agree to use our services only for lawful purposes and in compliance with all applicable local, national, and international laws and regulations.</li>
                    <li>You may not use our services for fraudulent activities, data scraping, spamming, hacking, or any other malicious or unauthorized actions.</li>
                    <li>Users must not attempt to reverse-engineer, modify, or otherwise interfere with our website or database systems.</li>
                    <li>Violation of these terms may result in immediate termination of access and potential legal action.</li>
                </ul>

                <hr />

                <h4>3. User Accounts</h4>
                <ul>
                    <li>Certain services may require users to create an account. By registering, you agree to provide accurate, current, and complete information.</li>
                    <li>Users are responsible for maintaining the confidentiality of their account credentials, including passwords and login information.</li>
                    <li>Users must promptly notify Boulou.io of any unauthorized access or security breaches.</li>
                    <li>Boulou.io reserves the right to suspend or terminate accounts that provide false information, engage in suspicious activities, or violate these Terms.</li>
                    <li>Account sharing is strictly prohibited. Each registered account is for individual use and should not be shared among multiple users.</li>
                </ul>

                <hr />

                <h4>4. Intellectual Property</h4>
                <ul>
                    <li>All content, databases, proprietary software, and trademarks displayed on Boulou.io are the exclusive property of Boulou.io or its licensors.</li>
                    <li>Users are not granted any ownership rights to our intellectual property and may only use our content within the scope of our services.</li>
                    <li>Unauthorized reproduction, redistribution, modification, or commercial exploitation of our content is strictly prohibited.</li>
                    <li>If you believe that your intellectual property rights have been infringed upon, please contact us with detailed information so we can investigate the matter.</li>
                </ul>

                <hr />

                <h4>5. Data Collection and Privacy</h4>
                <ul>
                    <li>Our data collection, processing, and privacy practices are governed by our Privacy Policy, which users must review and accept when using our services.</li>
                    <li>Boulou.io collects publicly available business data and does not engage in unlawful data harvesting.</li>
                    <li>Users who wish to request access, modification, or deletion of their personal information can contact us thr /ough the channels provided in our Privacy Policy.</li>
                    <li>We implement industry-standard security measures to protect stored data, but users acknowledge that no system is entirely immune to security risks.</li>
                </ul>

                <hr />

                <h4>6. Payment and Subscription</h4>
                <ul>
                    <li>Some of our services may require payment or a subscription plan. Pricing, payment terms, and renewal policies will be detailed at the time of purchase.</li>
                    <li>By subscribing, users agree to pay the applicable fees as outlined on our website or in contractual agreements.</li>
                    <li>Payments are non-refundable unless explicitly stated otherwise in a separate agreement.</li>
                    <li>Failure to make timely payments may result in suspension or termination of service access.</li>
                    <li>Users may cancel their subscriptions by following the cancellation process outlined on our website.</li>
                </ul>

                <hr />

                <h4>7. Disclaimers and Limitation of Liability</h4>
                <ul>
                    <li>Boulou.io provides its services and information on an "as is" and "as available" basis without warranties of any kind, either express or implied.</li>
                    <li>We do not guarantee the accuracy, completeness, or timeliness of the business data provided.</li>
                    <li>Users acknowledge that reliance on our services is at their own risk, and Boulou.io shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.</li>
                    <li>We do not guarantee uninterrupted or error-free operation of our website or services and may conduct maintenance or updates without prior notice.</li>
                </ul>

                <hr />

                <h4>8. Third-Party Links and Services</h4>
                <ul>
                    <li>Our website may contain links to third-party websites or services for user convenience.</li>
                    <li>Boulou.io does not endorse or assume responsibility for the content, security, or practices of third-party websites.</li>
                    <li>Users should review third-party terms and privacy policies before engaging with external services.</li>
                    <li>We are not liable for any damages or losses incurred due to interactions with third-party platforms.</li>
                </ul>

                <hr />

                <h4>9. Indemnification</h4>
                <p>Users agree to indemnify, defend, and hold harmless Boulou.io, its officers, employees, affiliates, and partners from any claims, damages, losses, or expenses arising from:</p>
                <ul>
                    <li>Violation of these Terms.</li>
                    <li>Unauthorized use of our services.</li>
                    <li>Breach of intellectual property rights.</li>
                    <li>Any disputes arising from user interactions with third-party services.</li>
                </ul>

                <hr />

                <h4>10. Termination</h4>
                <ul>
                    <li>Boulou.io reserves the right to suspend or terminate user accounts and access to our services at its sole discretion for reasons including but not limited to:</li>
                    <ul>
                        <li>Violation of these Terms.</li>
                        <li>Non-payment of required fees.</li>
                        <li>Engaging in fraudulent or unlawful activities.</li>
                    </ul>
                    <li>Upon termination, users must cease all use of our services, and any remaining obligations, such as outstanding payments, shall still be enforceable.</li>
                </ul>

                <hr />

                <h4>11. Governing Law and Dispute Resolution</h4>
                <ul>
                    <li>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction].</li>
                    <li>Any disputes arising under these Terms shall be resolved thr /ough arbitration or litigation in courts located in [Jurisdiction].</li>
                    <li>Users agree to waive any class-action claims and resolve disputes on an individual basis.</li>
                </ul>

                <hr />

                <h4>12. Changes to These Terms</h4>
                <ul>
                    <li>Boulou.io reserves the right to update or modify these Terms at any time.</li>
                    <li>Changes will be posted on our website, and continued use of our services after updates constitutes acceptance of the revised Terms.</li>
                    <li>Users are encouraged to periodically review these Terms for any changes.</li>
                </ul>

                <hr />

                <h4>13. Contact Us</h4>
                <p>If you have any questions regarding these Terms, please contact us at:</p>
                <ul>
                    <li><strong>Email:</strong> support@boulou.io</li>
                    <li><strong>Phone:</strong>+1 844 967 8545</li>
                    <li><strong>Address:</strong> 4400 N Federal Highway, Ste 8 Boca Raton, FL 33431</li>
                </ul>
                <br />
                <p style={{ textAlign: "center" }}><strong>By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</strong></p>
            </div>
            <WebFooter />
        </>

    );
};

export default TermsAndConditions;
