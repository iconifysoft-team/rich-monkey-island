import React from "react"
import { BsTwitter, BsFacebook, BsDiscord, BsInstagram } from "react-icons/bs";
//import { Row,Col } from "./FooterStyles";
import { Button,Row, Col, Container, Form, FormControl, InputGroup } from "react-bootstrap";


const Footer = () => (
    <div className="footer">
       
            <h2>GET ON THE LIST</h2>
        
            <InputGroup className="mb-3 footer-row">
    <FormControl
      placeholder="Email Address"
      aria-label="Email"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2" >
      Send
    </Button>
  </InputGroup>
<p> 
<a href="https://twitter.com/richmonkeisland"><i><BsTwitter /></i></a>
      &nbsp;
      <a href="https://discord.gg/DxQSMfm6F3"><i><BsDiscord /></i></a> &nbsp;
      <a href="https://www.instagram.com/richmonkeyisland/"><i><BsInstagram /></i></a>
   </p>
  
     <div className="">
     <Row >
    <Col >
      &nbsp;
    </Col>
    <Col >
    COPY 2021 RIGHTS : R.KARMA.
    </Col>
    <Col>
    copyright registration for the artwork, IPR issues .<br></br>
    legal documents, disclaimer, terms of use .<br></br>
    </Col>
  </Row>
  </div>
  
    </div>
    
);

export default Footer