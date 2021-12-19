import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';
import { Button, Container, Row, Image, Offcanvas, Nav, NavDropdown, Form, FormControl, Col, Carousel } from 'react-bootstrap';
import logo from './assets/imgs/logo.png';
import monkey01 from './assets/imgs/monkey01.jpeg';
import monkey02 from './assets/imgs/monkey02.jpeg';
import monkey03 from './assets/imgs/monkey03.jpeg';
import  Navbar  from 'react-bootstrap/Navbar';
import Footer from './footer';
import { BsTwitter, BsWallet } from 'react-icons/bs';

export const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <Container fluid>
       <Navbar bg="light" expand={false}> 
       <Container fluid>
         <Navbar.Brand href="#"><Image src={logo} width="48" height="54"/></Navbar.Brand>
         <Row>  
         <Col md="auto">
         <WalletMultiButton className="wallet-btn" /> 
       {wallet && <WalletDisconnectButton />}
       </Col>
       <Col md="auto">
       <div className="vr" />
         <Navbar.Toggle aria-controls="offcanvasNavbar" />
         </Col>
       </Row>
         <Navbar.Offcanvas
           id="offcanvasNavbar"
           aria-labelledby="offcanvasNavbarLabel"
           placement="end"
          
           >
           <Offcanvas.Header className="bg-dark" closeButton>
             <Offcanvas.Title id="offcanvasNavbarLabel" className="text-center"></Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body className="bg-dark">
             <Nav className="text-center mt-4 mb-4 items-menu">
               <Nav.Link href="#action1">Home</Nav.Link>
               <Nav.Link href="#action2">Buy Rich Monkey</Nav.Link>
               <Nav.Link href="#action2">Rarity</Nav.Link>
               <Nav.Link href="#action2">Roadmap</Nav.Link>
               <Nav.Link href="#action2">Team</Nav.Link>
               <Nav.Link href="#action2">Provenance</Nav.Link>
               <Nav.Link href="#action2">Members Only</Nav.Link>
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
       </Container>
     </Navbar>
     <div className="panel-center">
	          	<div >
		            <h2 className="welcome">Welcome</h2>
		            <h3 className="welcome">To The Rich Monkey Island</h3>
	            </div>
	</div>
     <Carousel fade>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey01}
         alt="First slide"
       />
       <Carousel.Caption>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey02}
         alt="Second slide"
       />
   
       <Carousel.Caption>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey03}
         alt="Third slide"
       />
   
       <Carousel.Caption>
         <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>

   <Footer /> 
    </Container>
  
    );
};
