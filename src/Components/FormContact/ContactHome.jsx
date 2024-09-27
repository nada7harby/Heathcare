import { Col, Container, Form, Row } from "react-bootstrap";
import "./ContactHome.css";
import formimg from "../../assets/Wall post-cuate.png";
function ContactHome() {
  return (
    <>
      <Container fluid>
        <Row className="m-4 pt-5 pb-5 ContactHome">
          <Col md={4} sm={7} xs={11}>
            <div className="containForm">
              <div className="FormContactHome">
                <h2>Book Appointment</h2>
                <Form.Group className="mb-4">
                  <Form.Select>
                    <option value="" disabled selected hidden>
                      Select a Department
                    </option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Dermatology</option>
                    <option>Pediatrics</option>
                    <option>Radiology</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Select>
                    <option value="" disabled selected hidden>
                      Select a Doctor
                    </option>
                    <option>Ahmed</option>
                    <option>Nour</option>
                    <option>Iyad</option>
                    <option>Moagmed</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control placeholder="your Phone" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control placeholder="dd/mm/yy" type="date" />
                </Form.Group>
                <div className="text-center">
                  <button className="btn">Appointment Now</button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} sm={7} xs={10}>
            <div>
              <img src={formimg} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ContactHome;
