import { Col, Container, Form, Row } from "react-bootstrap";
import "./ContactHome.css";
import formimg from "../../assets/Wall post-cuate.png";
function ContactHome() {
  return (
    <>
      <Container fluid>
        <Row className="m-4 pt-5 ContactHome">
          <Col md={6} sm={7} xs={10}>
            <div>
              <Form.Group className="mb-3">
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder="Disabled input" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select>
                  <option>Disabled select</option>
                  <option>Disabled select</option>
                  <option>Disabled select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Can't check this" />
              </Form.Group>
            </div>
          </Col>
          <Col md={5}  sm={7} xs={10}>
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
