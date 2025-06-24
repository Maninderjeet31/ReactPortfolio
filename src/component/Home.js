import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

function Home(){
    return (
        <div>
            <Container>
                <Row className="mx-auto p-5 gap-2 justify-content-evenly">
                    <Col className='d-flex align-items-center justify-content-center' xs="12" md="5">
                        <img
                            alt="Profile Picture"
                            src="profilePicture.png"
                            className='img-fluid rounded mx-auto d-block'
                            style={{
                                borderRadius: "50%",
                                transform: "scale(1.5)",
                            }}
                        />
                    </Col>
                    <Col xs="12" md="6" className='text-start'>
                        <h1 className="display-3 fw-bolder mt-4 text-secondary">Maninderjeet Singh</h1>
                        <h5 className="fw-medium mb-4 text-info">Full Stack Developer</h5>
                        <p className="text-body-secondary text-wrap fw-light mt-4 fs-6">
                            Results-driven Full Stack Developer with 8+ years of experience in Java, Spring Boot, SQL, and JavaScript. Skilled in building scalable, high-performance applications and translating complex requirements into user-focused solutions. Proven ability in troubleshooting, code optimization, and maintaining clean, efficient code. Certified in Azure and AWS with a solid foundation in cloud technologies. Strong collaborator with a track record of delivering end-to-end solutions across teams. Committed to continuous learning and solving complex problems with analytical precision.
                        </p>
                        <Col className="mx-auto gap-5 justify-content-evenly">
                            <Button color="primary" href="https://www.linkedin.com/in/maninderjeet-singh-3110ca?">
                                LinkedIn
                            </Button>{' '}
                            <Button color="secondary" href="https://github.com/Maninderjeet31">
                                Github
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;