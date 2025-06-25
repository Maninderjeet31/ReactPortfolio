import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'reactstrap';
import { SkillSet } from "../../data/SkillSet";
import Skill from "./Skill";

function AllSkills(){

    const [skillSet, setSkillSet] = useState([]);

    useEffect(() => {
        SkillSet.getSkillSet().then((data) => setSkillSet(Array.isArray(data) ? data.slice(0, 9) : []));
    }, []);

    return(
        <Container>
            <Row className="mx-auto p-5 gap-2 justify-content-evenly">
                {/* <Col className="d-flex align-items-center justify-content-center" xs="12" md="2">
                    <img
                        alt="Profile Picture"
                        src="profilePicture.png"
                        className='img-fluid rounded mx-auto d-block'
                        style={{
                            borderRadius: "50%",
                            transform: "scale(1.5)",
                        }}
                    />
                </Col> */}
                <Col xs="12" md="12" className='text-start'>
                    <div className="pt-3">
                        <Skill skillSet={skillSet} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AllSkills;