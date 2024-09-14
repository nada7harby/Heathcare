import { Button, Col, Container, Row } from "react-bootstrap";
import pic1 from "../../assets/pic-1.jpg";
import pic2 from "../../assets/pic-2.jpg";
import pic3 from "../../assets/h3-about-002.webp";
import "./About.css";
function About() {
  return (
    <>
      <div className="about">
        <Container fluid>
          <Row>
            <Col className="contentMain" lg={5} md={6}>
              <Row className="align-items-end">
                <Col lg={5} md={5} sm={5} xs={6}>
                  <img src={pic1} className="image1" />
                </Col>
                <Col lg={6} md={5} sm={5} xs={6}>
                  <img src={pic2} className="image2" />
                </Col>
              </Row>
              <Row className="mt-2 mb-2 justify-content-around">
                <Col lg={5} md={5} sm={5} xs={6}>
                  <img src={pic3} className="image3" />
                </Col>
                <Col
                  lg={5}
                  md={5}
                  sm={5}
                  xs={6}
                  className="d-flex justify-content-center align-items-center flex-column num"
                >
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "65px",
                      color: "#6f4c5b",
                    }}
                  >
                    20
                  </span>
                  <br />
                  Experience Years
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} className="about-content">
              <h4 style={{ color: "rgb(198 162 117)" }}>About us</h4>
              <h1 style={{ fontSize: "55px", color: "#6f4c5b" }}>
                Dedicated to Delivering Exceptional Care
              </h1>
              <p style={{ width: "80%" }}>
                Welcome to our medical center, where your health and well-being
                are our top priorities. We are committed to providing
                comprehensive care with a compassionate approach,
              </p>
              <Row className="justify-content-evenly">
                <Col lg={5} md={5} sm={5} xs={5} className="mb-3">
                  <Row
                    style={{
                      border: "1px solid rgb(6 180 189 /82%)",
                      borderRadius: "10px",
                    }}
                  >
                    <Col
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      className="icon "
                      style={{ backgroundColor: "rgb(6 180 189/19%)" }}
                    >
                      <i
                        className="fa-solid fa-truck-medical"
                        style={{ color: "rgb(6 180 189)", fontSize: "50px" }}
                      ></i>
                    </Col>
                    <Col
                      lg={8}
                      md={8}
                      sm={8}
                      xs={8}
                      className="d-flex justify-content-center align-items-center p-3"
                    >
                      <span className="name-icon">Emergency help</span>
                    </Col>
                  </Row>
                </Col>
                <Col lg={5} md={5} sm={5} xs={5} className="mb-3">
                  <Row
                    style={{
                      border: "1px solid #2196F3",
                      borderRadius: "10px",
                    }}
                  >
                    <Col
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      className="icon "
                      style={{ backgroundColor: "rgb(33 150 243 / 18%)" }}
                    >
                      <i
                        className="fa-solid fa-bed-pulse"
                        style={{ color: "#2196F3", fontSize: "50px" }}
                      ></i>
                    </Col>
                    <Col
                      lg={8}
                      md={8}
                      sm={8}
                      xs={8}
                      className="d-flex justify-content-center align-items-center p-3"
                    >
                      <span className="name-icon">Qulified Doctors</span>
                    </Col>
                  </Row>
                </Col>
                <Col lg={5} md={5} sm={5} xs={5} className="mb-3">
                  <Row
                    style={{
                      border: "1px solid rgb(241 23 58/62%)",
                      borderRadius: "10px",
                    }}
                  >
                    <Col
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      className="icon "
                      style={{ backgroundColor: "rgb(241 23 58 / 19%)" }}
                    >
                      <i
                        className="fa-solid fa-droplet"
                        style={{ color: "rgb(241 23 58)", fontSize: "50px" }}
                      ></i>
                    </Col>
                    <Col
                      lg={8}
                      md={8}
                      sm={8}
                      xs={8}
                      className="d-flex justify-content-center align-items-center p-3"
                    >
                      <span className="name-icon">BestProfesseional</span>
                    </Col>
                  </Row>
                </Col>
                <Col lg={5} md={5} sm={5} xs={5} className="mb-3">
                  <Row
                    style={{
                      border: "1px solid rgb(190 64 255/82%)",
                      borderRadius: "10px",
                    }}
                  >
                    <Col
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      className="icon "
                      style={{ backgroundColor: "rgb(190 64 255/19%)" }}
                    >
                      <i
                        className="fa-solid fa-syringe"
                        style={{ color: "rgb(190 64 255)", fontSize: "50px" }}
                      ></i>
                    </Col>
                    <Col
                      lg={8}
                      md={8}
                      sm={8}
                      xs={8}
                      className="d-flex justify-content-center align-items-center p-3"
                    >
                      <span className="name-icon">Emergency help</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div style={{margin:"24px"}}>
                <Button >Read more</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default About;
