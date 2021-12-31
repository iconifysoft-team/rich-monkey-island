import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Footer = () => (
  <div className="container-fluid" style={{ paddingTop: "100px" }}>
    <h2 className="text-center mb-4">GET ON THE LIST</h2>

    <InputGroup className="footer-row w-25 mx-auto">
      <FormControl
        placeholder="Email Address"
        aria-label="Email"
        aria-describedby="basic-addon2"
        className="message-input"
      />
      <Button
        className="message-btn"
        variant="outline-secondary"
        id="button-addon2"
      >
        Send
      </Button>
    </InputGroup>
    <p className="text-center">
      <a href="https://twitter.com/richmonkeisland">
        <i className="text-white fs-2 mx-2">
          <BsTwitter />
        </i>
      </a>
      &nbsp;
      <a href="https://discord.gg/DxQSMfm6F3">
        <i className="text-white fs-2 mx-2">
          <FaDiscord />
        </i>
      </a>{" "}
      &nbsp;
      <a href="https://www.instagram.com/richmonkeyisland/">
        <i className="text-white fs-3 mx-2">
          <BsInstagram />
        </i>
      </a>
    </p>

    <div className="text-center mb-3">
      Copyright &copy;2021 all rights reserved.
    </div>
    <div className="text-center mb-3">Developed by IconifySoft</div>
  </div>
);

export default Footer;
