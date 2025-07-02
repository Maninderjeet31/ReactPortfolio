import { TabView, TabPanel } from 'primereact/tabview';
import { Col, Container, Row } from 'reactstrap';
import { useEffect } from 'react';
import Responsibility from './Responsibility'

function Work({workExp}){

    const WorkExpTemplate = ({ data }) => {

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
                        <Col xs="12" md="12" className="d-flex justify-content-center">
                            
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
                                    {data.map((work, index) => (
                                        <TabPanel TabPanel key={index} header={work.abv} style={{justifyContent: 'space-around'}} >
                                            <Row className="mx-auto p-1 gap-2 justify-content-evenly">
                                                <Col xs="12" md="5">
                                                    <img
                                                        alt="Work Picture"
                                                        src={`${process.env.PUBLIC_URL}/Work.png`}
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
                                                            <h5 className="mb-3 fw-light text-info">{work.position}</h5>
                                                            <h6 className="mt-0 fw-light">{work.from} - {work.to}</h6>
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