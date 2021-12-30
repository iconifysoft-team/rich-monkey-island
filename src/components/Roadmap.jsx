import { Col, Row } from "react-bootstrap";
import road01 from "../assets/imgs/monkey-01.jpeg";
import road02 from "../assets/imgs/monkey-02.jpeg";
import road03 from "../assets/imgs/monkey-03.jpeg";
import road04 from "../assets/imgs/monkey-04.jpeg";
const Roadmap = () => {
  return (
    <>
      <section
        className="custom-container"
        id="roadmap"
        style={{ padding: "100px 0" }}
      >
        <div>
          <h2 className="roadmap-title mb-3">ROADMAP</h2>
          <h3 className="line line-text text-center mx-auto mb-5 w-50 text-center">
            Following the activation of the Road Map, a new roadmap for the
            Magical Island will begin.
          </h3>
          <Row>
            <Col className="col col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road04} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-white fw-bold">
                    Minting 7.5k Rich Monkey NFTs in the public sale 0.65 SOL.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road03} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-white fw-bold">
                    Free Minting 3000 vodoo potion NFTS for Rich monkey NFTs
                    holders according to the whitelist.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road02} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-white fw-bold">
                    Minting 7.5k Rich Monkey Wife NFTs by using the voodoo
                    potion NFTs.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col col-12 col-md-6 col-lg-3">
              <div className="card my-3">
                <img src={road01} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text text-white fw-bold">
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
