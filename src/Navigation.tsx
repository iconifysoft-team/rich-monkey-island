import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';
import { Button, Container, Row, Image, Offcanvas, Nav, NavDropdown, Form, FormControl, Col, Carousel } from 'react-bootstrap';
import logo from './assets/imgs/logo.png';
import monkey01 from './assets/imgs/monkey01.jpeg';
import monkey02 from './assets/imgs/monkey02.jpeg';
import monkey03 from './assets/imgs/monkey03.jpeg';
import monkey04 from './assets/imgs/monkey04.jpeg';

import monkey05 from './assets/imgs/monkey05.jpeg';
import monkey06 from './assets/imgs/monkey06.jpeg';
import monkey07 from './assets/imgs/monkey07.jpeg';
import monkey08 from './assets/imgs/monkey08.jpeg';
import monkey10 from './assets/imgs/monkey10.jpeg';

import road01 from './assets/imgs/monkey-01.jpeg';
import road02 from './assets/imgs/monkey-02.jpeg';
import road03 from './assets/imgs/monkey-03.jpeg';
import road04 from './assets/imgs/monkey-04.jpeg';

import  Navbar  from 'react-bootstrap/Navbar';
import Footer from './footer';
import { BsTwitter, BsFacebook, BsDiscord, BsInstagram } from "react-icons/bs";
import team from './assets/imgs/team.webp';
import profile01 from './assets/imgs/profile01.jpeg';
import profile02 from './assets/imgs/profile02.jpeg';
import profile03 from './assets/imgs/profile03.jpeg';
import profile04 from './assets/imgs/profile04.jpeg';
import profile05 from './assets/imgs/profile05.jpeg';



export const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <Container fluid>
       <Navbar bg="black" expand={false}> 
       <Container fluid>
         <Navbar.Brand href="#"><Image src={logo} width="48" height="54"/></Navbar.Brand>
         <Row>  
         <Col md="auto">
         <WalletMultiButton className="wallet-btn" /> 
       {wallet && <WalletDisconnectButton />}
       </Col>
       <Col md="auto">
       <div className="vr" />
         <Navbar.Toggle aria-controls="offcanvasNavbar" className="toggle-btn"  />
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
               <Nav.Link href="https://richmonkeyisland.com#home">Home</Nav.Link>
               <Nav.Link href="https://richmonkeyisland.com#roadmap">Buy Rich Monkey</Nav.Link>
               <Nav.Link href="#">Rarity (soon)</Nav.Link>
               <Nav.Link href="https://richmonkeyisland.com#roadmap">Roadmap</Nav.Link>
               <Nav.Link href="https://richmonkeyisland.com#discord">United are us</Nav.Link>
               <Nav.Link href="https://richmonkeyisland.com#team">Team</Nav.Link>
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
       </Container>
     </Navbar>
     <Container fluid>
       <div id="home"></div>
	          	<section className='precious'>
              <div className="cafe">
                <p></p>
              <div className="cafe-inner title-shine">Welcome <br></br> To The Rich Monkey Island &nbsp; </div>
      <p></p><p></p>
       </div>
                 <div className="cafe-inner text-orange"><p><b>RMI NFTs</b> is a collection of Unique 7,500 <b>NFTs</b> living forever on the solana network.<br></br>
 Your NFT will not be only a great piece of art but also utility for the future free mints 
 of the potions and also an access to members-only benefits that will be revealed with roadmap activation.
 <br></br>
 <b>NFT SALE</b> Plan will be announced early January/ 2022.
 Minting a Rich Monkey <b>NFT</b> will cost <b>0.65 SOL</b> .
 The whole process will be even and the lucky ones will get the rarest ones .
 The marketplaces that will host our collection will be announced before the public sale .
 There is no maximum mints in the public sale but you can mint one <b>NFT</b> every time .
 </p> </div> 
    
	            </section>
	</Container>
     <Carousel fade>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey05}
         alt="First slide"
       />
       <Carousel.Caption>
     {/*    <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey06}
         alt="Second slide"
       />
   
       <Carousel.Caption>
         {/* <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey07}
         alt="Third slide"
       />
   
       <Carousel.Caption>
         {/* <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
       </Carousel.Caption>
     </Carousel.Item>
      <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey08}
         alt="Third slide"
       />
   
       <Carousel.Caption>
         {/* <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src={monkey10}
         alt="Third slide"
       />
   
       <Carousel.Caption>
         {/* <h3>Third slide label</h3>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   <section className="roadmap-style">
     <div id="ownership">
       <h2 className='roadmap-title'>OWNERSHIP</h2>
       <hr></hr>
       <ul className="list-text">
    <li className="event" data-date="1">
      <p>Ownership of the NFT is mediated entirely by the Smart Contract and the Solana Network .</p>
    </li>
    <li className="event" data-date="2">
      <p>At no point we can freeze, or modify the ownership of any Rich Monkey NFT .</p>    
    </li>
    <li className="event" data-date="3">
      <p>Once you purchase an original Rich Monkey NFT you will have a worldwide, free license to use your NFT/s along with ownership and commercial usage rights given to the owners over their NFTs</p>    
    </li>
  </ul>
     </div>
   </section>
   <section className="roadmap-style">
   <a id="history">
  <h2 className='roadmap-title'>STORY</h2>
  <hr></hr>
    <div className="container book-open">
    </div> 
    </a>
</section>
<section className="roadmap-style">
  <div id="discord">
  <h2 className='roadmap-title'>UNITED ARE US</h2>
  <hr></hr>
  <div className="text-center">
  We are stronger when we are united!
  Join now and reserve your seat for a solid project!
  <br></br>
  <a href="https://discord.gg/DxQSMfm6F3">
Join our discord for latest news & get on the whitelist .
</a>
</div>
  </div>
</section>
  <section className='roadmap-style'>
  <div id="roadmap">
  <h2 className='roadmap-title'>ROADMAP</h2>
  <hr></hr>
  <Row>
    <Col>
  <ul className="timeline">
    <li className="event" data-date="1">
      <p>Minting 7.5k Rich Monkey NFTs in the public sale 0.65 SOL.</p>
    </li>
    <li className="event" data-date="2">
      <p>Free Minting 3000 vodoo potion NFTS for Rich monkey NFTs holders according to the whitelist.</p>    
    </li>
    <li className="event" data-date="3">
      <p>Minting 7.5k Rich Monkey Wife NFTs by using the voodoo potion NFTs.</p>    
    </li>
    <li className="event" data-date="4">
      <p>Minting 15k Rich Monkey Kid NFTs by using the voodoo potion NFTs.</p>    
    </li>
  </ul>
  </Col>
  <Col>
  <img src={road04} className="roadmap-image"/>
  <img src={road03} className="roadmap-image"/>
  <img src={road02} className="roadmap-image"/>
  <img src={road01} className="roadmap-image"/>
  </Col>
  </Row>
<h3 className='line line-text'>Following the activation of the Road Map, a new roadmap for the Magical Island will begin. </h3>
 
  </div>
  </section>
  <section className="team-style">
    <div id="team">
    <h2 className='team-title'>TEAM</h2>
  <hr></hr>
<div className="row">
  <div className='col'>
  <div className="profile-card">
   <div className="img">
      <img src={profile01} width="140px" height="145px" />
   </div>
   <div className="caption">
     <h3>The Founder</h3>
     <p><b>Nosir JR</b> // a squeamish doctor, traveller, art collector, 11 years management, and the most important thing a fatherr</p>
   {/* <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
        </div> */}
  </div>
</div>
  </div>
  <div className='col'>
  <div className="profile-card">
   <div className="img">
      <img src={profile02} width="140px" height="145px" />
   </div>
   <div className="caption">
     <h3>Blockchain Developer</h3>
     <p><b>Richard Cibernetic</b> // a blockchain developer, full-stack developer with 15 years web developing experience</p>
   
  </div>
</div>
  </div>
  <div className='col'>
  <div className="profile-card">
   <div className="img">
      <img src={profile03} width="140px" height="145px" />
   </div>
   <div className="caption">
     <h3>Digital Artist</h3>
     <p><b>TK Muhamed </b>// one in a million digital artist with 10 years experience and art running in his blood and genetics .</p>
   {/* <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
        </div> */}
  </div>
</div>
  </div>
  <div className='col'>
  <div className="profile-card">
   <div className="img">
      <img src={profile04} width="140px" height="145px" />
   </div>
   <div className="caption">
     <h3>Marketing Manager</h3>
     <p><b>M. Yusuf Tığlı </b>// the caucasian price is his nick name physics specialist originally with great experience in games marketing.</p>
 {/*   <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
      </div> */}
  </div>
</div>
  </div>
  <div className='col'>
  <div className="profile-card">
   <div className="img">
      <img src={profile05} width="140px" height="145px" />
   </div>
   <div className="caption">
     <h3>COPY RIGHTS</h3>
     <p><b>R.KARMA</b>// copyright registration for the artwork, IPR issues,legal documents, disclaimer, terms of use. </p>
    {/*<div className="social-links">
      <a href="https://twitter.com/richmonkeisland"><i><BsTwitter /></i></a>
      <a href="https://discord.gg/DxQSMfm6F3"><i><BsDiscord /></i></a>
      <a href="https://www.instagram.com/richmonkeyisland/"><i><BsInstagram /></i></a>
    </div> */}
  </div>
</div>
  </div>
</div>

    </div>
  </section>
  
   <Footer /> 
    </Container>
  
    );
};
