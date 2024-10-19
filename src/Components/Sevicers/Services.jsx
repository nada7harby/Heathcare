import {  Col, Container, Row } from "react-bootstrap";
import Service from "./Service";

function Services() {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-evenly m-0 pt-5 pb-5">
          <Col lg={4}>
            <h4>Services</h4>
            <h1>Innovative Health Service, Exceptional Care</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the or randomised words which don’t look even slightly
              believable
            </p>
            <div>
              <button className="sevicessbtn"> All services</button>
            </div>
          </Col>
          <Col lg={8} className="allServices mt-3">
            <Service></Service>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Services;
