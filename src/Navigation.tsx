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
import { BsTwitter, BsFacebook, BsDiscord } from "react-icons/bs";
import team from './assets/imgs/team.webp';

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
               <Nav.Link href="#roadmap">Roadmap</Nav.Link>
               <Nav.Link href="#team">Team</Nav.Link>
               <Nav.Link href="#action2">Provenance</Nav.Link>
               <Nav.Link href="#members">Members Only</Nav.Link>
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
     <Container>
	          	<section className='precious'>
              <div id="app">
  <div className="title">
    <div className="title-inner">
      <div className="cafe">
        <div className="cafe-inner title-shine">Welcome</div>
      </div>
      <div className="mozart">
        <div className="mozart-inner title-shine">To The Rich Monkey Island</div>
      </div>
      <div className='cafe'>
        <div className="image">
          
 RMI NFTs is a collection of Unique 7,500 NFTs living forever on the solana network .
 Your NFT will not be only a great piece of art but also utility for the future free mints of the potions and also an access to members-only benefits that will be revealed with roadmap activation
        </div>
      </div>
    </div>
  </div>
</div>
	            </section>
	</Container>
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

  <section className='roadmap-style'>
  <a id="roadmap">
  <h2 className='roadmap-title'>ROADMAP</h2>
  <hr></hr>
  <ol className='roadmap-list'>
  <li>Minting 7.5k Rich Monkey NFTs in the public sale 0.65 each .</li>
  <li>Free Minting 3000 vodoo potion NFTS for Rich monkey NFTs holders.</li>
  <li>Minting 7.5k Rich Monkey Wife NFTs by using the voodoo potion NFTs.</li>
  <li>Minting 15k Rich Monkey Kid NFTs by using the voodoo potion NFTs.</li>
</ol>
<h3 className='line line-text'>Following the activation of the Road Map, a new roadmap for the Magical Island will begin. </h3>
 
  </a>
  </section>
  <section className="team-style">
    <a id="team">
    <h2 className='team-title'>TEAM</h2>
  <hr></hr>

<div className="profile-card">
   <div className="img">
      <img src={team} width="160px" height="155px" />
   </div>
   <div className="caption">
     <h3>Richard Cyber</h3>
     <p>Blockchain Developer</p>
    <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
    </div>
  </div>
</div>
    </a>
  </section>
  
   <Footer /> 
    </Container>
  
    );
};
