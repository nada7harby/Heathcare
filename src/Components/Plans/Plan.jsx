import { Col } from "react-bootstrap";
import "./plan.css";
function Plan({ className }) {
  return (
    <>
      <Col lg={3} md={3} sm={4} xs={10} className={`plan ${className}`}>
        <h1>01</h1>
        <h3>Make appointment</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the or randomised words which don’t look even slightly believable
        </p>
        <div>
          view more
          <span>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </Col>
    </>
  );
}
export default Plan;
