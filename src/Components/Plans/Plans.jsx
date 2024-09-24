import { Col, Container, Row } from "react-bootstrap";
import Plan from "./Plan";
import "./plan.css";
function Plans() {
  return (
    <>
      <Container className="mt-5 mb-5 plans">
        <Row>
          <Col xs={12}>
            <h4 className="text-center">Working process</h4>
            <h1 className="text-center">How we Work?</h1>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "space-evenly",
            position: "relative",
            top: "2em",
          }}
        >
          <Plan></Plan>
          <Plan className="active"></Plan>
          <Plan></Plan>
        </Row>
      </Container>
    </>
  );
}
export default Plans;
