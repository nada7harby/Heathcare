import { Button, Col, Container, Row } from "react-bootstrap";
import "./Main.css";
function MainSection(props) {
  return (
    <>
      
        <Container>
          <Row>
            <Col className="contentMain">
              <h5>We Provide All Health Care Solution</h5>
              <h1>{props.title}
                {/* Protect Your Health And Take Care To Of Your Health */}
                </h1>
              <div>
                {" "}
                <Button>Read More</Button>
              </div>
            </Col>
            <Col>
              <div className="img-banner">
                <img src={props.image} alt="Doctor" />
              </div>
            </Col>
          </Row>
        </Container>
      
    </>
  );
}
export default MainSection;
