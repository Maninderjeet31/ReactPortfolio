import { useState } from 'react';
import {Col, Container, Row,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Skill({skillSet}){

  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const SkillSetTemplate = ({ data }) => {
    return (
        <Container>
                <Row className="mx-auto p-5 gap-2 justify-content-evenly">
                    {/* <Col xs="12" md="2">
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
                        <Accordion flush open={open} toggle={toggle}>
                            {data.map((skill, index) => (
                                <AccordionItem key={index}>
                                    <AccordionHeader className='text-secondary' targetId={skill.id}>
                                        {skill.abv}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={skill.id}>
                                        <Row className="mx-auto p-4 gap-2 justify-content-evenly">
                                            <Col className='d-flex align-items-center justify-content-center' xs="12" md="4">
                                                <img
                                                    alt="Profile Picture"
                                                    src={skill.logo}
                                                    className='img-fluid rounded mx-auto d-block'
                                                    style={{ 
                                                        width: '100%',
                                                        maxWidth: '300px', 
                                                        height: 'auto',
                                                        maxHeight: '300px', 
                                                        objectFit: 'contain',
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </Col>
                                            <Col xs="12" md="7" className='text-start text-secondary'>
                                                <dl className="mb-3">
                                                    <dt className="col-sm-3 pb-3 mt-3 text-info"> {skill.title} </dt>
                                                    <dd className="col-sm-9 text-secondary">{skill.description}</dd>
                                                </dl>
                                            </Col>
                                        </Row>
                                    </AccordionBody>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Col>
                </Row>    
        </Container>
    )
  }

  return (
    <div>
        <SkillSetTemplate data={skillSet} />
    </div>
  )
};

export default Skill;