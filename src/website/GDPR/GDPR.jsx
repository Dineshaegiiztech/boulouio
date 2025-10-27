import React,{useEffect} from 'react';
import './GdprCompliancePolicy.css';
import WebNavbar from '../navbar';
import WebFooter from '../footer';

const GdprCompliancePolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <WebNavbar />
            <div className="gdpr-container">
                <h1 style={{textAlign:"center", fontWeight:"bold"}}>GDPR Compliance Policy for Boulou.io</h1>
                <br/>
                <p className="last-updated">Last Updated: 04/01/2024</p>

                <p>
                    At Boulou.io, we are committed to protecting the privacy and data rights of individuals in accordance with the General Data Protection Regulation (GDPR). This GDPR Compliance Policy outlines how we collect, use, process, and protect personal data, and the rights individuals have under the GDPR.
                </p>

                <div title="1. Who We Are">
                    <p>Boulou.io is a B2B database company that collects and processes publicly available business data. We operate as a data controller when determining the purposes and means of processing such data.</p>
                    <ul style={{listStyle:"none"}}>
                        <li><strong>Data Controller:</strong> Boulou.io</li>
                        <li><strong>Email: </strong>support@boulou.io</li>
                        <li><strong>Address:</strong> 4400 N Federal Highway, Ste 8 Boca Raton, FL 33431</li>
                        <li><strong>Phone:</strong> +1(866) 611-6943</li>
                        <li><strong>Business contact information:</strong> (e.g., names, job titles, work email addresses, phone numbers)</li>
                        <li><strong>Company information:</strong> (e.g., business name, address, industry, size)</li>
                        <li><strong>Online presence and professional profiles :</strong> (e.g., LinkedIn, company websites)</li>
                    </ul>
                </div>

                <div title="2. Personal Data We Process">
                    <ul style={{listStyle:"none"}}>
                       
                    </ul>
                    <p>We do not intentionally collect sensitive personal data such as financial, biometric, or health-related information.</p>
                </div>

                <div title="3. Legal Basis for Processing">
                    <ul style={{listStyle:"none"}}>
                        <li><strong>Legitimate Interests:</strong> To provide B2B intelligence and facilitate business growth.</li>
                        <li><strong>Consent:</strong> Obtained where legally required.</li>
                        <li><strong>Legal Obligations:</strong> Compliance with applicable laws.</li>
                    </ul>
                </div>

                <div title="4. Data Subject Rights">
                    <ul style={{listStyle:"number", paddingLeft: "35px"}}>
                        <li>Right to Access</li>
                        <li>Right to Rectification</li>
                        <li>Right to Erasure</li>
                        <li>Right to Restriction</li>
                        <li>Right to Object</li>
                        <li>Right to Data Portability</li>
                        <li>Right to Lodge a Complaint</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us at <strong><a href='mailto:support@boulou.io'>support@boulou.io</a></strong>.</p>
                </div>

                <div title="5. Data Retention">
                    <p>We retain personal data only as long as needed for its purpose, including legal, regulatory, and operational reasons. We regularly review and update our data for relevance and accuracy.</p>
                </div>

                <div title="6. Data Security">
                    <ul style={{listStyle:"number", paddingLeft: "35px"}}>
                        <li>Encryption during storage and transmission</li>
                        <li>Access control systems</li>
                        <li>Regular audits and risk assessments</li>
                        <li>Standard Contractual Clauses (SCCs)</li>
                        <li>Transfers to countries with adequate protections</li>
                        <li>Clients purchasing our B2B services (under strict terms)</li>
                        <li>Service providers under agreements</li>
                        <li>Legal authorities as required</li>
                    </ul>
                </div>   

                <div title="9. Automated Decision-Making">
                    <p>We do not use data for automated decisions or profiling with legal or significant effects.</p>
                </div>

                <div title="10. Policy Updates">
                    <p>We may update this policy periodically. Changes will be posted with an updated date. Continued use implies acceptance of the revised policy.</p>
                </div>

                <p>For any GDPR-related inquiries, please contact us at <strong><a href='mailto:support@boulou.io'>support@boulou.io</a></strong>.</p>
                <p><strong>By interacting with Boulou.io, you acknowledge and agree to this GDPR Compliance Policy.</strong></p>
            </div>
            <WebFooter />
        </>

    );
};

export default GdprCompliancePolicy;
