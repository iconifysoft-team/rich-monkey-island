// import Swiper core and required modules
import SwiperCore, {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import profile01 from "../assets/imgs/profile01.jpeg";
import profile03 from "../assets/imgs/profile03.jpeg";
import profile04 from "../assets/imgs/profile04.jpeg";
import profile05 from "../assets/imgs/profile05.jpeg";

SwiperCore.use([Keyboard, Scrollbar, Navigation, Pagination]);

const Team = () => {
  const data = [
    {
      img: profile01,
      heading: "The Founder",
      name: "Nosir JR",
      desc: "A squeamish doctor, traveller, art collector, 11 years management, and the most important thing a fatherr",
    },
    {
      img: profile03,
      heading: "Digital Artist",
      name: "TK Muhamed",
      desc: "One in a million digital artist with 10 years experience and art running in his blood and genetics.",
    },
    {
      img: profile04,
      heading: "Marketing Manager",
      name: "M. Yusuf Tığlı",
      desc: "The caucasian price is his nick name physics specialist originally with great experience in games marketing.",
    },
    {
      img: profile05,
      heading: "COPY RIGHTS",
      name: "R.KARMA",
      desc: "Copyright registration for the artwork, IPR issues,legal documents, disclaimer, terms of use.",
    },
  ];
  return (
    <>
      <section
        id="team"
        className="custom-container"
        style={{ padding: "100px 0" }}
      >
        <h2 className="roadmap-title" style={{ color: "#FAC962" }}>
          TEAM
        </h2>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1160: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            996: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
          }}
          // scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="profile-item mb-3"
            >
              <div className="profile-card">
                <div className="profile">
                  <img src={data[0].img} alt="Profile img" />
                </div>
                <div className="caption ">
                  <div>
                    <h5>{data[0].heading}</h5>
                    <h4>{data[0].name}</h4>
                  </div>
                </div>
              </div>
              <div>
                <p>{data[0].desc}</p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="profile-item "
            >
              <div className="profile-card">
                <div className="profile">
                  <img src={data[1].img} alt="Profile img" />
                </div>
                <div className="caption ">
                  <div>
                    <h5>{data[1].heading}</h5>
                    <h4>{data[1].name}</h4>
                  </div>
                </div>
              </div>
              <div>
                <p>{data[1].desc}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="profile-item mb-3"
            >
              <div className="profile-card">
                <div className="profile">
                  <img src={data[2].img} alt="Profile img" />
                </div>
                <div className="caption ">
                  <div>
                    <h5>{data[2].heading}</h5>
                    <h4>{data[2].name}</h4>
                  </div>
                </div>
              </div>
              <div>
                <p>{data[2].desc}</p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="profile-item"
            >
              <div className="profile-card">
                <div className="profile">
                  <img src={data[3].img} alt="Profile img" />
                </div>
                <div className="caption ">
                  <div>
                    <h5>{data[3].heading}</h5>
                    <h4>{data[3].name}</h4>
                  </div>
                </div>
              </div>
              <div>
                <p>{data[3].desc}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Team;
//  {/* <div className="social-links">
//                       <a href="https://twitter.com/richmonkeisland">
//                         <i>
//                           <BsTwitter />
//                         </i>
//                       </a>
//                       <a href="https://discord.gg/DxQSMfm6F3">
//                         <i>
//                           <BsDiscord />
//                         </i>
//                       </a>
//                       <a href="https://www.instagram.com/richmonkeyisland/">
//                         <i>
//                           <BsInstagram />
//                         </i>
//                       </a>
//                     </div> */}
