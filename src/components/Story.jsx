import book from "../assets/imgs/book.png";

const Story = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="custom-container"
        style={{ padding: "100px 0" }}
      >
        <div className="d-flex align-item-center justify-content-center flex-column">
          <h2 className="roadmap-title" style={{ color: "#FAC962" }}>
            STORY
          </h2>
          <img className="w-75 mx-auto book" src={book} alt="" />
        </div>
      </div>
      <div
        id="unitedWeAre"
        className="custom-container"
        style={{ position: "relative" }}
      >
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="are-us px-2"
          style={{ padding: "100px 0" }}
        >
          <h2 className="roadmap-title" style={{ color: "#FAC962" }}>
            UNITED WE ARE
          </h2>
          <div className="text-center fs-5">
            We are stronger when we are united! Join now and reserve your seat
            for a solid project!
            <br></br>
            <a href="https://discord.gg/DxQSMfm6F3" className="text-white">
              Join our discord for latest news & get on the whitelist.
            </a>
          </div>
        </div>
        <div className="circle"></div>
      </div>
    </>
  );
};

export default Story;
