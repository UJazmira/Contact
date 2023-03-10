import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ handleShow }) => {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              width={30}
              src="https://www.flaticon.com/svg/vstatic/svg/9856/9856295.svg?token=exp=1678352374~hmac=4d859814d1882fd6f677b90f17e756ce"
              alt="error"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="dark" onClick={handleShow}>
            Add Contact
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
