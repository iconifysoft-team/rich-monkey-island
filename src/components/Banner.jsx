import Slider from "./Slider";

const Banner = () => {
  return (
    <>
      <div className="banner_img" id="home">
        <section className="custom-container banner-wrapper mb-5">
          <div className="row ">
            <div className="col-12 col-md-6">
              <div
                className="d-flex flex-column  justify-content-center h-100"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <p
                  style={{ textAlign: "left", marginBottom: "6px" }}
                  className="roadmap-title"
                >
                  Welcome To The
                </p>
                <p
                  className="fs-1 mb-4"
                  style={{
                    fontFamily: "Streetwear",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "#fac962" }}>Rich Monkey Island</span>
                </p>

                <p
                  style={{
                    // textAlign: "justify",
                    fontSize: "20px",
                    color: "#fff",
                    padding: "5px",
                  }}
                >
                  <b>RMI NFTs</b> is a collection of Unique <b>5252</b>{" "}
                  <b>NFTs</b>
                  living forever on the solana network. Your NFT will not be
                  only a great piece of art but also utility for the future free
                  mints of the potions and also an access to members-only
                  benefits that will be revealed with roadmap activation.
                  <br></br>
                </p>
                <p
                  style={{
                    // textAlign: "justify",
                    fontSize: "20px",
                    color: "#fff",
                    padding: "5px",
                  }}
                >
                  <b>NFT SALE</b> Plan will be announced early January/ 2022.
                  Minting a Rich Monkey <b>NFT</b> will cost <b>0.65 SOL</b>.
                  The whole process will be even and the lucky ones will get the
                  rarest ones. The marketplaces that will host our collection
                  will be announced before the public sale. There is no maximum
                  mints in the public sale but you can mint one <b>NFT</b> every
                  time.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-md-6"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Slider />
            </div>
          </div>
          <div className=""></div>
        </section>
      </div>
    </>
  );
};

export default Banner;
