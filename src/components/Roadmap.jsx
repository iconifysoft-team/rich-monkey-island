import { Col, Row } from "react-bootstrap";
import road01 from "../assets/imgs/monkey-01.jpeg";
import road02 from "../assets/imgs/monkey-02.jpeg";
import road03 from "../assets/imgs/monkey-03.jpeg";
import road04 from "../assets/imgs/monkey-04.jpeg";
const Roadmap = () => {
  return (
    <>
      <section className="custom-container roadmap-style">
        <div id="roadmap" data-spy="roadmap" data-target="#roadmap">
          <h2 className="roadmap-title">ROADMAP</h2>
          <Row>
            <Col>
              <ul className="timeline">
                <li className="event" data-date="1">
                  <p>
                    Minting 7.5k Rich Monkey NFTs in the public sale 0.65 SOL.
                  </p>
                </li>
                <li className="event" data-date="2">
                  <p>
                    Free Minting 3000 vodoo potion NFTS for Rich monkey NFTs
                    holders according to the whitelist.
                  </p>
                </li>
                <li className="event" data-date="3">
                  <p>
                    Minting 7.5k Rich Monkey Wife NFTs by using the voodoo
                    potion NFTs.
                  </p>
                </li>
                <li className="event" data-date="4">
                  <p>
                    Minting 15k Rich Monkey Kid NFTs by using the voodoo potion
                    NFTs.
                  </p>
                </li>
              </ul>
            </Col>
            <Col>
              <img className="img-fluid" src={road04} alt="road04" />
              <img className="img-fluid" src={road03} alt="road03" />
              <img className="img-fluid" src={road02} alt="road02" />
              <img className="img-fluid" src={road01} alt="road01" />
            </Col>
          </Row>
          <h3 className="line line-text">
            Following the activation of the Road Map, a new roadmap for the
            Magical Island will begin.{" "}
          </h3>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
