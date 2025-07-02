import { Button, Col, Container, Row } from 'reactstrap';
import {motion} from "motion/react"

function Home(){
    return (
        <motion.div className="mt-5">
            <Container className='mt-5'>
                <Row className="mx-auto p-5 mt-5 gap-2 justify-content-evenly">
                    <Col className='mt-4 d-flex align-items-center justify-content-center' xs="12" md="5">
                        <img
                            alt="Profile"
                            src={`${process.env.PUBLIC_URL}/profilePicture.png`}
                            className='img-fluid rounded mx-auto d-block'
                            style={{
                                borderRadius: "50%",
                                transform: "scale(1.0)",
                            }}
                        />
                    </Col>
                    {/* text-start */}
                    <Col xs="12" md="6" className='my-auto d-flex flex-column align-items-center text-center'>
                        <h1 className="display-2 fw-bolder mt-4 text-secondary">Maninderjeet Singh</h1>
                        <h5 className="fw-medium mb-5 text-info">Full Stack Developer</h5>
                        <Col className="mx-auto gap-3 justify-content-evenly">
                            <Button color="primary" tag="a" href="https://www.linkedin.com/in/maninderjeet-singh-3110ca?">
                                LinkedIn
                            </Button>{' '}
                            <Button color="secondary" tag="a" href="https://github.com/Maninderjeet31">
                                Github
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Home;