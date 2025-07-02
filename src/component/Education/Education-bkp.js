import { TabView, TabPanel } from 'primereact/tabview';
import { Col, Container, Row } from 'reactstrap';
import { useEffect } from 'react';

function Education1({ education }){

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .p-tabview-nav-link {
            text-decoration: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const EducationTemplate = ({ education }) => {
        return (
                <Container>
                <Row className="mx-auto p-3 gap-2 justify-content-evenly">
                    <Col xs="12" md="12" className='text-start'>
                        <TabView>
                            {education?.map((edu, index) => (
                                <TabPanel TabPanel key={index} header={edu.abv} >
                                    <Row className="mx-auto p-5 gap-2 justify-content-evenly">
                                        <Col xs="12" md="5">
                                            <img
                                                alt="Education Picture"
                                                src={`${process.env.PUBLIC_URL}/${edu.logo}`}
                                                className='img-fluid justify-content-center rounded mx-auto d-block mt-2 m-2 text-center py-5 px-3'
                                                style={{ 
                                                    width: '100%',
                                                    maxWidth: '300px', 
                                                    height: 'auto',
                                                    maxHeight: '500px', 
                                                    objectFit: 'fill',
                                                    borderRadius: "50%",
                                                    transform: "scale(1.3)",
                                                }}
                                            />
                                        </Col>
                                        <Col xs="12" md="5" mt="5" className='text-start'>
                                            <div className=" justify-content-center surface-border border-round m-2 mt-5 ml-5 text-center py-5 px-3">
                                                <div className="mb-3">
                                                <h2 className="fw-bolder">{edu.degree}</h2>
                                                <h3 className='fw-bold'>{edu.domain}</h3>
                                                </div>
                                                <div>
                                                    <h5 className="mb-4 fw-lighter">{edu.school} | {edu.address}</h5>
                                                    <h6 className="mt-0">{edu.duration}</h6>
                                                </div>
                                            </div>    
                                        </Col>
                                    </Row>      
                                </TabPanel>
                            ))}
                        </TabView>
                    </Col>
                </Row>
            </Container>
        );
    };

    return(
        <div>
            <EducationTemplate education={education} />
        </div>
    )
}

export default Education1;