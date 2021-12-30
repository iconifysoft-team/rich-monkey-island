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
          <h2 className="roadmap-title mb-3">ROADMAP</h2>
          <h3 className="line line-text text-center mb-5">
            Following the activation of the Road Map, a new roadmap for the
            Magical Island will begin.
          </h3>
          <Row>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road04} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-white fw-bold">
                    Minting 7.5k Rich Monkey NFTs in the public sale 0.65 SOL.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road03} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-white fw-bold">
                    Free Minting 3000 vodoo potion NFTS for Rich monkey NFTs
                    holders according to the whitelist.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road02} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-white fw-bold">
                    Minting 7.5k Rich Monkey Wife NFTs by using the voodoo
                    potion NFTs.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road01} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text text-white fw-bold">
                    Minting 15k Rich Monkey Kid NFTs by using the voodoo potion
                    NFTs.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
