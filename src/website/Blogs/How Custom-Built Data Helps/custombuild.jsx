import React, { useEffect } from 'react';
import WebNavbar from '../../navbar';
import WebFooter from '../../footer';
import card1 from "../../../assets/Blogs/card5more.png";

const CustomBuiltData = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <WebNavbar />
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', textAlign: "center" }}>
                    How Custom-Built Data Helps Your B2B Strategy Win
                </h1>
                <br />
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    In a competitive B2B landscape, generic data just doesn’t cut it anymore. Custom-built data gives businesses an edge by providing precise, relevant, and actionable insights tailored to their exact target audience. Let’s explore how custom data transforms your strategy—from lead generation to conversion.
                </p>

                <img
                    src={card1}
                    alt="Custom Built Data"
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '30px' }}
                />

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    1. Pinpoint Your Ideal Customer Profile (ICP)
                </h2>
                <p style={{ marginBottom: '20px' }}>
                    Custom-built data lets you define and refine your ICP with laser precision. Instead of relying on broad filters, you can layer in specific attributes—tech stack, hiring trends, recent funding, intent signals—that align with your best customers. This helps your outreach hit the mark every time.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    2. Increase Campaign Personalization
                </h2>
                <p style={{ marginBottom: '20px' }}>
                    Relevance drives engagement. With custom data, you can craft messages that speak directly to a prospect’s needs, pain points, and business context. Whether it’s industry-specific insights or account-level triggers, personalized campaigns get more opens, clicks, and replies.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    3. Reduce Wasted Spend
                </h2>
                <p style={{ marginBottom: '20px' }}>
                    Targeting the wrong accounts leads to wasted ad budget and sales effort. Custom data ensures you only invest in high-fit accounts that are more likely to convert. It sharpens your targeting for paid ads, email campaigns, and outbound efforts—so you maximize ROI.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    4. Accelerate Sales Conversations
                </h2>
                <p style={{ marginBottom: '20px' }}>
                    When your SDRs and AEs walk into a conversation armed with account-specific intelligence—like recent product launches, hiring activity, or tech adoption—they can tailor their pitch instantly. This shortens the sales cycle and builds trust faster.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    5. Unlock Market Expansion Opportunities
                </h2>
                <p style={{ marginBottom: '30px' }}>
                    Custom data isn’t just about narrowing your focus—it also uncovers new segments and whitespace opportunities. You can analyze patterns in your existing customers and replicate success in adjacent markets or verticals you hadn’t considered before.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Bonus: Fuel AI & Predictive Models
                </h2>
                <p style={{ marginBottom: '30px' }}>
                    Quality data is the foundation for any AI-driven tool—whether it's lead scoring, routing, or churn prediction. The more relevant your data inputs, the smarter your tools become. Custom data feeds predictive models with exactly what they need to deliver better decisions, automatically.
                </p>

                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Final Thoughts
                </h2>
                <p>
                    In the age of personalization and precision marketing, custom-built data is your competitive advantage. It helps you find better leads, connect faster, and close smarter. Don’t settle for off-the-shelf lists—invest in data that works as hard as you do.
                </p>
            </div>
            <WebFooter />
        </>
    );
};

export default CustomBuiltData;
