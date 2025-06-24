import { TabView, TabPanel } from 'primereact/tabview';
import { Button, Col, Container, Row } from 'reactstrap';
import { useEffect } from 'react';
import Responsibility from './Responsibility'

function Work({workExp}){

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

    const WorkExpTemplate = ({ data }) => {
        return (
                <Container>
                <Row className="mx-auto p-5 gap-2 justify-content-evenly">
                    <Col xs="12" md="12" className='text-start'>
                        <TabView>
                            {data.map((work, index) => (
                                <TabPanel TabPanel key={index} header={work.abv} >
                                    <Row className="mx-auto p-5 gap-2 justify-content-evenly">
                                        <Col xs="12" md="5">
                                            <img
                                                alt="Work Picture"
                                                src="Work.png"
                                                className='img-fluid rounded mx-auto d-block mt-2 m-2 text-center py-5 px-3'
                                                style={{
                                                    borderRadius: "50%",
                                                    transform: "scale(1.3)",
                                                }}
                                            />
                                        </Col>
                                        <Col xs="12" md="5" mt="5" className='text-start'>
                                            <div className=" justify-content-center surface-border border-round m-2 mt-5 ml-5 text-center py-5 px-3">
                                                <div className="mb-3">
                                                <h2 className="fw-bolder">{work.company}</h2>
                                                </div>
                                                <div>
                                                    <h5 className="mb-3">{work.position}</h5>
                                                    <h6 className="mt-0">{work.from} - {work.to}</h6>
                                                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                                                        <Responsibility company={work.company} location={work.location} responsibilities={work.description}/>
                                                    </div>
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
            <WorkExpTemplate data={workExp} />
        </div>
    )
}

export default Work;