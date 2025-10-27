import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebNavbar from '../navbar';
import WebFooter from '../footer';
import health from '../../assets/health.png'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HealthcareIntelligence = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const cards = [
        {
            title: "Drive ROI",
            text: "Boost the acquisition and retention of your target healthcare prospects with Boulou’s highly accurate and updated marketing database. Our B2B healthcare data solutions are designed to elevate lead generation and maximize your return on investment.",
            icon: "📈"
        },
        {
            title: "Optimize Care",
            text: "Boulou’s B2B healthcare data solutions help you understand your healthcare buyer personas and map their journeys, enabling you to reach your ideal audience. Our precise prospect data ensures targeted and impactful connections.",
            icon: "❤️"
        },
        {
            title: "Enrich Healthcare Reach",
            text: "Plan service line expansions and improve forecasting with Boulou’s reliable B2B healthcare prospect data — all without added overhead. As one of the leading healthcare database providers in the US, we ensure you stay ahead with up-to-date insights.",
            icon: "📝"
        },
        {
            title: "Prioritize Strategically",
            text: "Accelerate strategic growth in the healthcare space with Boulou’s dependable and precise data. As the US’s trusted B2B healthcare database provider, we help you compete effectively and achieve your business goals.",
            icon: "🧭"
        },
    ];



    return (
        <>
            <WebNavbar />
            <div className="container-fluid bg-dark text-light py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 px-5">
                        <h2 className="fw-bold mb-4">Healthcare Intelligence</h2>
                        <p>
                            InFynd healthcare marketing database transforms billions of healthcare information into meaningful
                            conversations which helps you explore more into healthcare business opportunities.
                        </p>
                        <Link to="/demo"><button className="btn btn-danger mt-3">
                            Book a Demo <span className="ms-2">&rarr;</span>
                        </button>
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={health}
                            alt="Healthcare Folder"
                            className="img-fluid"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                </div>
            </div>

            <Container className="py-5">
                <h2 className="text-center mb-5" style={{ color: "black" }}>
                    Strategic Growth with Boulou's Healthcare Data
                </h2>
                <Row>
                    {cards.map((card, idx) => (
                        <Col lg={6} className="mb-4" key={idx}>
                            <Card className="h-100 shadow-sm border-0" style={{ background: "#f8fafd" }}>
                                <Card.Body>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                        {card.icon}
                                    </div>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text style={{ fontSize: '0.95rem' }}>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <WebFooter />
        </>

    );
};

export default HealthcareIntelligence;
