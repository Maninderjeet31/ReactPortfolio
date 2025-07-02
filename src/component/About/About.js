import { Button, Col, Container, Row } from 'reactstrap';

function About(){
    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Row className="mx-auto gap-2 mt-5 justify-content-evenly">
                    <Col xs="12" md="6" className='text-start align-items-center'>
                        <h1 className="display-3 fw-bolder mb-5 mt-5 text-secondary">&lt;/About Me&gt;</h1>
                        <p style={{textAlign: "justify"}}
                            className="text-body-secondary text-wrap fw-light mt-4 fs-6">
                            Results-driven Full Stack Developer with 8+ years of experience in Java, Spring Boot, SQL, and JavaScript. Skilled in building scalable, high-performance applications and translating complex requirements into user-focused solutions. Proven ability in troubleshooting, code optimization, and maintaining clean, efficient code. Certified in Azure and AWS with a solid foundation in cloud technologies. Strong collaborator with a track record of delivering end-to-end solutions across teams. Committed to continuous learning and solving complex problems with analytical precision.
                        </p>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center' xs="12" md="5">
                        <img
                            alt="Profile"
                            src={`${process.env.PUBLIC_URL}/profilePicture.png`}
                            className='img-fluid rounded my-auto mx-auto my-auto d-block'
                            style={{
                                borderRadius: "50%",
                                transform: "scale(1.0)",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;