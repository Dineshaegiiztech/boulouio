import React, { useEffect } from 'react';
import './Privacy.css';
import WebNavbar from '../website/navbar';
import WebFooter from '../website/footer';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <WebNavbar />
            <div className='terms-container'>
                <div class="privacy-policy">
                    <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>
                    <br />
                    <p><strong>Last Updated:</strong> 04/03/2025</p>
                    <p>Welcome to Boulou.io. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect information at Boulou.io, a B2B database company that collects publicly available data and provides it to businesses. We are committed to compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>

                    <hr />

                    <h4>1. Information We Collect</h4>
                    <p>Boulou.io collects and processes publicly available business data, which may include:</p>
                    <ul>
                        <li>Company details: Name, registration number, business category, and headquarters location.</li>
                        <li>Business contact information: Names, professional email addresses, phone numbers, job titles, and LinkedIn or company profiles.</li>
                        <li>Industry classifications: Business sector, size, revenue estimates, and company structure.</li>
                        <li>Publicly available records: Press releases, regulatory filings, and government records.</li>
                        <li>Professional and trade organization data: Memberships, certifications, and industry affiliations.</li>
                    </ul>
                    <p>We do not knowingly collect sensitive personal data such as financial details, health-related data, or personally identifiable information beyond what is publicly accessible.</p>

                    <hr />

                    <h4>2. How We Use Your Information</h4>
                    <ul>
                        <li>Provide and enhance our B2B database services by offering accurate and relevant business intelligence.</li>
                        <li>Facilitate business connections and networking to help companies discover and engage with potential clients or partners.</li>
                        <li>Conduct analytics and improve our offerings to enhance user experience and optimize our database accuracy.</li>
                        <li>Ensure legal and regulatory compliance by following applicable data protection laws and regulations.</li>
                        <li>Prevent fraud and ensure security by monitoring potential misuse of our database and protecting against malicious activities.</li>
                    </ul>

                    <hr />

                    <h4>3. Legal Basis for Processing (GDPR Compliance)</h4>
                    <ul>
                        <li><strong>Legitimate Interest:</strong> We collect and process publicly available data to provide businesses with verified and structured business intelligence.</li>
                        <li><strong>Legal Compliance:</strong> We adhere to GDPR and other applicable data protection regulations.</li>
                        <li><strong>Consent (where applicable):</strong> In cases where explicit consent is required, we obtain prior consent before processing data.</li>
                    </ul>

                    <hr />

                    <h4>4. Your Rights Under GDPR</h4>
                    <p>If you are an EU/EEA resident, you have the following rights:</p>
                    <ul>
                        <li>Right to Access</li>
                        <li>Right to Rectification</li>
                        <li>Right to Erasure (“Right to Be Forgotten”)</li>
                        <li>Right to Restriction of Processing</li>
                        <li>Right to Object</li>
                        <li>Right to Data Portability</li>
                        <li>Right to Lodge a Complaint</li>
                    </ul>
                    <p>To exercise these rights, contact us at <a href="mailto:support@boulou.io">support@boulou.io</a>.</p>

                    <hr />

                    <h4>5. Your Rights Under CCPA</h4>
                    <p>If you are a California resident, you have the following rights:</p>
                    <ul>
                        <li>Right to Know</li>
                        <li>Right to Delete</li>
                        <li>Right to Opt-Out of Data Sales</li>
                        <li>Right to Non-Discrimination</li>
                    </ul>
                    <p>To exercise these rights, contact us at <a href="mailto:support@boulou.io">support@boulou.io</a> or use our opt-out mechanism at <a href="#">[URL]</a>.</p>

                    <hr />

                    <h4>6. Data Security</h4>
                    <p>We implement industry-standard security measures to protect data from unauthorized access, alteration, or disclosure. These include:</p>
                    <ul>
                        <li>Encryption</li>
                        <li>Access controls</li>
                        <li>Regular audits</li>
                    </ul>
                    <p>However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>

                    <hr />

                    <h4>7. Data Sharing and Disclosure</h4>
                    <p>We may share data with:</p>
                    <ul>
                        <li>Clients who purchase our B2B database services</li>
                        <li>Service providers and partners under strict confidentiality agreements</li>
                        <li>Legal authorities when required by law</li>
                    </ul>
                    <p>We do not sell personal data to third parties without proper compliance with applicable laws and opt-out mechanisms.</p>

                    <hr />

                    <h4>8. Data Retention</h4>
                    <ul>
                        <li>Periodic data reviews to ensure accuracy</li>
                        <li>Deletion of outdated or irrelevant data</li>
                        <li>Secure disposal methods</li>
                    </ul>

                    <hr />

                    <h4>9. Third-Party Links and Services</h4>
                    <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage users to review their privacy policies.</p>

                    <hr />

                    <h4>10. International Data Transfers</h4>
                    <p>Boulou.io may transfer data internationally using GDPR-approved mechanisms such as:</p>
                    <ul>
                        <li>Standard Contractual Clauses (SCCs)</li>
                        <li>Adequacy decisions by the European Commission</li>
                    </ul>

                    <hr />

                    <h4>11. Children’s Privacy</h4>
                    <p>Our services are intended for businesses and professionals. We do not knowingly collect data from individuals under 16. If you believe a minor’s data has been collected, please contact us for immediate removal.</p>

                    <hr />

                    <h4>12. Changes to This Policy</h4>
                    <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated date.</p>

                    <hr />

                    <h4>13. Contact Us</h4>
                    <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:support@boulou.io">support@boulou.io</a></li>
                        <li><strong>Phone:</strong>+1 844 967 8545</li>
                        <li><strong>Address:</strong> 4400 N Federal Highway, Ste 8 Boca Raton, FL 33431</li>
                    </ul>
                    <br />
                    <p style={{ textAlign: "center" }}><strong>By using our services, you acknowledge that you have read and understood this Privacy Policy.</strong></p>
                </div>

            </div>
            <WebFooter />
        </>

    );
};

export default Privacy;
