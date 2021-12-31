const Ownership = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="custom-container"
        style={{ position: "relative" }}
      >
        <div className="are-us" style={{ padding: "100px 0" }}>
          <div data-spy="row">
            <div className="col px-md-5 pe-2">
              <h2 className="roadmap-title" style={{ color: "#FAC962" }}>
                OWNERSHIP
              </h2>
              <ul className="list-text">
                <li className="event" data-date="1">
                  <p className="fs-5">
                    Ownership of the NFT is mediated entirely by the Smart
                    Contract and the Solana Network.
                  </p>
                </li>
                <li className="event" data-date="2">
                  <p className="fs-5">
                    At no point we can freeze, or modify the ownership of any
                    Rich Monkey NFT.
                  </p>
                </li>
                <li className="event" data-date="3">
                  <p className="fs-5">
                    Once you purchase an original Rich Monkey NFT you will have
                    a worldwide, free license to use your NFT/s along with
                    ownership and commercial usage rights given to the owners
                    over their NFTs
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Ownership;
