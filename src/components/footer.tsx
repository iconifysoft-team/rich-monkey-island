import { Button, FormControl, InputGroup } from "react-bootstrap";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => (
  <div className="footer">
    <h2>GET ON THE LIST</h2>

    <InputGroup className="mb-3 footer-row">
      <FormControl
        placeholder="Email Address"
        aria-label="Email"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Send
      </Button>
    </InputGroup>
    <p>
      <a href="https://twitter.com/richmonkeisland">
        <i>
          <BsTwitter />
        </i>
      </a>
      &nbsp;
      <a href="https://discord.gg/DxQSMfm6F3">
        <i>
          <BsDiscord />
        </i>
      </a>{" "}
      &nbsp;
      <a href="https://www.instagram.com/richmonkeyisland/">
        <i>
          <BsInstagram />
        </i>
      </a>
    </p>

    <div className="text-center">COPY &copy;2021 all rights reserved.</div>
  </div>
);

export default Footer;
