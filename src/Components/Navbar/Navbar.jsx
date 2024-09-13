import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/download3.png";
import "./Navbar.css";

function NavbarComponent() {
  return (
    <Container className="NavConatiner">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto  ">
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>

              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Error 404
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Services Details
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#"><i className="fa-solid fa-magnifying-glass"></i></Nav.Link>
              <Nav.Link href="#">
                <i className="fa-solid fa-phone"></i> (09)01153648{" "}
              </Nav.Link>
              <Nav.Link href="#">
                <Button>contact Us</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;
