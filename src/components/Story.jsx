import book from "../assets/imgs/book.png";

const Story = () => {
  return (
    <>
      <div className="custom-container" style={{ padding: "100px 0" }}>
        <div className="d-flex align-item-center justify-content-center flex-column">
          <h2 className="roadmap-title">STORY</h2>
          <img src={book} alt="" />
        </div>
      </div>
      <div
        id="discord"
        className="custom-container"
        style={{ position: "relative" }}
      >
        <div className="are-us px-2" style={{ padding: "100px 0" }}>
          <h2 className="roadmap-title">UNITED ARE US</h2>
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
