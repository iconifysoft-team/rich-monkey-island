import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { Col, Image, Nav, Offcanvas, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/imgs/logo.png";

const NewNavbar = () => {
  const { wallet } = useWallet();
  return (
    <div style={{ backgroundColor: "#ffd0a61a" }}>
      <div className="custom-container">
        <Navbar expand={false}>
          <Navbar.Brand href="#">
            <Image src={logo} width="48" height="54" />
          </Navbar.Brand>
          <Row>
            {/* <Col md="auto">
              <WalletMultiButton className="wallet-btn" />
              {wallet && <WalletDisconnectButton />}
            </Col> */}
            <Col md="auto">
              <div className="vr" />
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className="toggle-btn"
              />
            </Col>
          </Row>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="aside-bar"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="text-center"
              ></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="text-center mt-4 mb-4 items-menu">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#roadmap">Buy Rich Monkey</Nav.Link>
                <Nav.Link href="#">Rarity (soon)</Nav.Link>
                <Nav.Link href="#roadmap">Roadmap</Nav.Link>
                <Nav.Link href="#discord">United are us</Nav.Link>
                <Nav.Link href="#team">Team</Nav.Link>
                <Nav.Link href="#">Provenance (soon)</Nav.Link>
                <Nav.Link href="#">Members Only (soon)</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                 <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action5">
                   Something else here
                 </NavDropdown.Item>
    </NavDropdown>*/}
              </Nav>
              {/* <Form className="d-flex">
               <FormControl
                 type="search"
                 placeholder="Search"
                 className="me-2"
                 aria-label="Search"
/>
               <Button variant="outline-success">Search</Button>
             </Form>*/}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>
    </div>
  );
};

export default NewNavbar;
