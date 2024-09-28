import { Col, Row } from "react-bootstrap";
import "./Services.css";
function OneSevice() {
  return (
    <>
      <div className="oneService">
        <Row>
          <Col xl={12}>
            <div className="iconService">
              <span>
                <i className="fa-solid fa-stethoscope"></i>
              </span>
            </div>
          </Col>
          <Col xl={12}>
            <h2>Doctor</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the or randomised look even slightly believable
            </p>
          </Col>
          <Col xl={12}>
            <div>
              <button>view</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default OneSevice;
