import { Col, Container, Row } from 'reactstrap';
import { TabPanel, TabView } from 'primereact/tabview';
import { useEffect } from 'react';

function Education({ education }){

    const EducationTemplate = ({ edu }) => {

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

        return (
            <Container>
                <Row className="mx-auto p-4 gap-2 justify-content-evenly">
                    <Col xs="12" md="12" className='d-flex justify-content-center'>
                        <Row className="mx-auto mt-3 p-1 gap-2 justify-content-evenly">
                            
                            <TabView pt={{
                                navContainer: {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        width: '100%'
                                    },
                                },
                                headerAction: ({ context }) => ({
                                    style: {
                                        color: context.selected ? 'cyan' : 'gray', 
                                        padding: '0.75rem 2rem',
                                        textDecoration: 'none',
                                        fontWeight: context.selected ? 'bold' : 'normal',
                                        borderBottom: context.selected ? '2px solid cyan' : 'none',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    },
                                }),
                            }}>
                            {edu.map((ed, index) => (
                                <TabPanel TabPanel key={index} header={ed.abv} style={{justifyContent: 'space-around'}} >
                                    <Row className="mx-auto p-1 gap-2 justify-content-evenly">
                                        <Col xs="12" md="5" mt="6" className='text-start'>
                                            <div className=" justify-content-center surface-border border-round m-2 mt-5 ml-5 text-center py-5 px-3">
                                                <div className="mb-3">
                                                <h2 className="fw-bolder">{ed.degree}</h2>
                                                <h4 className='fs-5 mb-4 mt-2 fw-light'>{ed.domain}</h4>
                                                </div>
                                                <div>
                                                    <h5 className="fs-6 mb-1 fw-lighter">{ed.school} | {ed.address}</h5>
                                                    <h6 className="mt-0 fw-lighter">{ed.duration}</h6>
                                                </div>
                                            </div>    
                                        </Col>
                                        <Col xs="12" md="5">
                                            <img
                                                alt="Education Picture"
                                                src={`${process.env.PUBLIC_URL}/${ed.logo}`}
                                                className='img-fluid rounded mx-auto d-block mt-2 m-2 text-center py-5 px-3'
                                                style={{
                                                    borderRadius: "50%",
                                                    transform: "scale(1.2)",
                                                    height: '50vh' 
                                                }}
                                            />
                                        </Col>
                                    </Row>      
                                </TabPanel>
                            ))}
                            </TabView>  
                        </Row>   
                    </Col>
                </Row>
            </Container>
        );
    };

    return(
        <div>
            <EducationTemplate edu={education} />
        </div>
    )
}

export default Education;