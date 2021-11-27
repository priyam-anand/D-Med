import React from 'react'
import "./Services.css";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const Services = () => {
    return (
        <>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>We offer a variety of services. Some of them are even open for the public to see and test out themselves. Some of the key functionalities include getting the data of patient securely, getting all the record of the patient. Hospitals can add new patients and their records.
                        </p>
                    </div>

                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            Details of Patients
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Medical Records of Patients
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            Details of Hospitals
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">
                                            Details of Organizations
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="col-lg-8 details">
                                            <h3>Details of Patients</h3>
                                            <p className="fst-italic">
                                                Get the details of the patient using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                Each patient is assigned an unique id which can be used to get the details of the patient. Aside from the id, if the authorized person knows the address of the patient, then it can also access it's details.
                                                To Access the details of any patient, the patient itself must give the person authority, only registerd Medical institues can access the data without the authorization.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="col-lg-8 details">
                                            <h3>Medical Records of Patients</h3>
                                            <p className="fst-italic">
                                                Get the medical records of the patient using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                The authorized and registerd medical institue can only get the details of the all the medical records of the patient.Each patient is assigned an unique id which can be used to get the details of the patient. Aside from the id, if the authorized person knows the address of the patient, then it can also access it's details. It's rules are same the details of a patient
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="col-lg-8 details">
                                            <h3>Details of Hospitals</h3>
                                            <p className="fst-italic">
                                                Get the details of a Medical Institute using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                This is a public feature. It is availiable to anyone who has a crypto wallet and is ready to do some transactions. If the person trying to access this funtion knows the registerd Id of the Hospital or it's Ehtereum address. Then it can be accessed. This can be tried in the public dashboard section of the dashboards. Give it a try. Try to enter 1 as the Id to know the details of the first registerd Hospital.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="col-lg-8 details">
                                            <h3>Details of Organizations</h3>
                                            <p className="fst-italic">
                                                Get the details of a registerd Organization using its Id or Ethereum Address.
                                            </p>
                                            <p>
                                                This is a public feature. It is availiable to anyone who has a crypto wallet and is ready to do some transactions. If the person trying to access this funtion knows the registerd Id of the Organization or it's Ehtereum address. Then it can be accessed. This can be tried in the public dashboard section of the dashboards. Give it a try. Try to enter 1 as the Id to know the details of the first registerd Organization.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <img src="" alt="" className="img-fluid" />
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default Services
