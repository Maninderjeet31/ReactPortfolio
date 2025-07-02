import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';

function Connect(){
    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <Container className="py-5">
            <Row className="mx-auto gap-2 mt-5 justify-content-evenly">
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
                <Col xs="12" md="6" className='text-start align-items-center'>
                    <h1 className="display-3 fw-bolder mt-5 text-secondary">Let's Connect</h1>
                    <p className=" text-info text-wrap fw-bold mt-4 mb-5 fs-6">
                        REACH ME AT:
                    </p>

                    <Container style={{ width: '95%'}}>
                        <FormGroup row>
                            <Label
                                className="d-flex justify-content-end align-items-center"
                                for="GitHub"
                                sm={2}
                            >
                                <img
                                    alt="GitHub logo"
                                    src={`${process.env.PUBLIC_URL}/github.png`}
                                    className='img-fluid rounded mx-auto d-block text-center'
                                    style={{
                                        width: "25px", // small icon size
                                        objectFit: "cover"
                                    }}
                                />
                            </Label>
                            <Col sm={10} style={{ alignContent: 'center' }}>
                                <a
                                    id="GitHub"
                                    href="https://github.com/yourusername"
                                    className="text-secondary text-decoration-none fs-5 fw-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Maninderjeet Singh : GitHub
                                </a>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label
                                className="d-flex justify-content-end align-items-center"
                                for="LinkedIn"
                                sm={2}
                            >
                                <img
                                    alt="LinkedIn logo"
                                    src={`${process.env.PUBLIC_URL}/linkedin.png`}
                                    className='img-fluid rounded mx-auto d-block text-center'
                                    style={{
                                        width: "25px", // small icon size
                                        objectFit: "cover"
                                    }}
                                />
                            </Label>
                            <Col sm={10} style={{ alignContent: 'center' }}>
                                <a
                                    id="LinkedIn"
                                    href="https://linkedin.com/in/maninderjeet-singh-3110ca"
                                    className="text-secondary text-decoration-none fs-5 fw-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Maninderjeet Singh : LinkedIn
                                </a>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label
                                className="d-flex justify-content-end align-items-center"
                                for="Email"
                                sm={2}
                            >
                                <img
                                    alt="Email logo"
                                    src={`${process.env.PUBLIC_URL}/email.png`}
                                    className='img-fluid rounded mx-auto d-block text-center'
                                    style={{
                                        width: "25px", // small icon size
                                        objectFit: "cover"
                                    }}
                                />
                            </Label>
                            <Col sm={10} style={{ alignContent: 'center' }}>
                                <h5
                                    id="Email"
                                    className="text-secondary text-decoration-none fs-5 fw-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    Maninderjeet Singh : Email
                                </h5>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label
                                className="d-flex justify-content-end align-items-center"
                                for="Location"
                                sm={2}
                            >
                                <img
                                    alt="Location logo"
                                    src={`${process.env.PUBLIC_URL}/location.png`}
                                    className='img-fluid rounded mx-auto d-block text-center'
                                    style={{
                                        width: "25px", // small icon size
                                        objectFit: "cover"
                                    }}
                                />
                            </Label>
                            <Col sm={10} style={{ alignContent: 'center' }}>
                                <h5
                                    style={{ alignContent: 'center' }}
                                    id="Location"
                                    className="text-secondary text-decoration-none fs-5 fw-medium"
                                    >
                                    Calgary, Alberta, Canada
                                </h5>
                            </Col>
                        </FormGroup>
                    </Container>
                </Col>
            </Row>
            </Container>
    </div>
    );
}
export default Connect;