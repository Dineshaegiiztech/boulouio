import React, { useEffect } from 'react';
import WebNavbar from '../../navbar';
import WebFooter from '../../footer';
import card1 from "../../../assets/Blogs/card3more.png";

const B2BLeadGeneration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <WebNavbar />
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px',textAlign:"center" }}>
                    What is B2B Lead Generation?
                </h1>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    B2B lead generation is the process of identifying and attracting potential business customers (leads) who are likely to purchase your product or service. Unlike B2C, which focuses on individual consumers, B2B targets decision-makers within organizations.
                </p>

                <img
                    src={card1}
                    alt="B2B Lead Generation"
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '30px' }}
                />

                <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Why B2B Lead Generation Matters
                </h2>
                <p style={{ marginBottom: '20px' }}>
                    For B2B companies, lead generation fuels the sales pipeline. Without a consistent flow of qualified leads, growth stalls. The right strategy not only attracts prospects but ensures they match your ideal customer profile—resulting in higher conversions and better lifetime value.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Types of B2B Leads
                </h2>
                <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
                    <li>📩 <strong>Marketing Qualified Leads (MQLs):</strong> Leads that show interest through content downloads, form fills, or website engagement.</li>
                    <li>📞 <strong>Sales Qualified Leads (SQLs):</strong> Leads that have been vetted and are ready for a direct sales conversation.</li>
                    <li>🏢 <strong>Account-Based Leads:</strong> Specific organizations identified as high-value targets, usually pursued in account-based marketing (ABM).</li>
                </ul>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Common B2B Lead Generation Channels
                </h2>
                <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
                    <li>💡 <strong>Content Marketing:</strong> Blogs, whitepapers, and ebooks that educate and attract leads organically.</li>
                    <li>📢 <strong>Paid Advertising:</strong> LinkedIn Ads, Google Ads, and display advertising to reach targeted professionals.</li>
                    <li>📧 <strong>Email Marketing:</strong> Personalized email sequences for nurturing and converting prospects.</li>
                    <li>🔗 <strong>SEO:</strong> Optimizing your website to rank for relevant keywords and generate inbound traffic.</li>
                    <li>📱 <strong>Social Media:</strong> Platforms like LinkedIn for outreach, engagement, and authority building.</li>
                    <li>📞 <strong>Cold Outreach:</strong> Direct messages or calls to targeted businesses, especially useful in outbound strategy.</li>
                </ul>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    B2B Lead Generation Best Practices
                </h2>
                <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
                    <li>✅ <strong>Define your ideal customer profile (ICP)</strong> before running campaigns.</li>
                    <li>✅ <strong>Use gated content</strong> to capture leads while delivering value.</li>
                    <li>✅ <strong>Score and qualify leads</strong> to prioritize follow-ups and improve ROI.</li>
                    <li>✅ <strong>Align sales and marketing teams</strong> to ensure smooth lead handoff.</li>
                    <li>✅ <strong>Track and optimize campaigns</strong> using CRM and analytics tools.</li>
                </ul>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Final Thoughts
                </h2>
                <p>
                    B2B lead generation is both an art and a science. With the right tools, strategy, and mindset, your business can consistently attract high-value prospects, fill your pipeline, and drive long-term revenue. It all starts with understanding your audience and delivering value at every touchpoint.
                </p>
            </div>
            <WebFooter />
        </>
    );
};

export default B2BLeadGeneration;
