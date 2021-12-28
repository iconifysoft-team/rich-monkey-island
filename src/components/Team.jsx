import profile01 from "../assets/imgs/profile01.jpeg";
import profile02 from "../assets/imgs/profile02.jpeg";
import profile03 from "../assets/imgs/profile03.jpeg";
import profile04 from "../assets/imgs/profile04.jpeg";
import profile05 from "../assets/imgs/profile05.jpeg";
const Team = () => {
  return (
    <>
      <section className="team-style">
        <div id="team" data-spy="team" data-target="#team">
          <h2 className="team-title">TEAM</h2>
          <hr></hr>
          <div className="row">
            <div className="col">
              <div className="profile-card">
                <div className="img">
                  <img
                    src={profile01}
                    alt="profile01"
                    width="140px"
                    height="145px"
                  />
                </div>
                <div className="caption">
                  <h3>The Founder</h3>
                  <p>
                    <b>Nosir JR</b> &#x2f;&#x2f; a squeamish doctor, traveller,
                    art collector, 11 years management, and the most important
                    thing a fatherr
                  </p>
                  {/* <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
        </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="profile-card">
                <div className="img">
                  <img
                    src={profile02}
                    alt="profile01"
                    width="140px"
                    height="145px"
                  />
                </div>
                <div className="caption">
                  <h3>Blockchain Developer</h3>
                  <p>
                    <b>Richard Cibernetic</b> &#x2f;&#x2f; a blockchain
                    developer, full-stack developer with 15 years web developing
                    experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="profile-card">
                <div className="img">
                  <img
                    src={profile03}
                    alt="profile01"
                    width="140px"
                    height="145px"
                  />
                </div>
                <div className="caption">
                  <h3>Digital Artist</h3>
                  <p>
                    <b>TK Muhamed </b>&#x2f;&#x2f; one in a million digital
                    artist with 10 years experience and art running in his blood
                    and genetics .
                  </p>
                  {/* <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
        </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="profile-card">
                <div className="img">
                  <img
                    src={profile04}
                    alt="profile01"
                    width="140px"
                    height="145px"
                  />
                </div>
                <div className="caption">
                  <h3>Marketing Manager</h3>
                  <p>
                    <b>M. Yusuf Tığlı </b>&#x2f;&#x2f; the caucasian price is
                    his nick name physics specialist originally with great
                    experience in games marketing.
                  </p>
                  {/*   <div className="social-links">
      <a href="#"><i><BsTwitter /></i></a>
      <a href="#"><i><BsFacebook /></i></a>
      <a href="#"><i><BsDiscord /></i></a>
      </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="profile-card">
                <div className="img">
                  <img
                    src={profile05}
                    alt="profile01"
                    width="140px"
                    height="145px"
                  />
                </div>
                <div className="caption">
                  <h3>COPY RIGHTS</h3>
                  <p>
                    <b>R.KARMA</b>&#x2f;&#x2f; copyright registration for the
                    artwork, IPR issues,legal documents, disclaimer, terms of
                    use.{" "}
                  </p>
                  {/*<div className="social-links">
      <a href="https://twitter.com/richmonkeisland"><i><BsTwitter /></i></a>
      <a href="https://discord.gg/DxQSMfm6F3"><i><BsDiscord /></i></a>
      <a href="https://www.instagram.com/richmonkeyisland/"><i><BsInstagram /></i></a>
    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
