// import Swiper core and required modules
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
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
import profile02 from "../assets/imgs/profile02.jpeg";
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
      img: profile02,
      heading: "Blockchain Developer",
      name: "Richard Cibernetic",
      desc: "A blockchain developer, full-stack developer with 15 years web developing experience",
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
      desc: "copyright registration for the artwork, IPR issues,legal documents, disclaimer, terms of use.",
    },
  ];
  return (
    <>
      <section className="custom-container py-5">
        <h2 className="roadmap-title">TEAM</h2>
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
              slidesPerView: 3,
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
          {data.map((member, ind) => (
            <SwiperSlide key={ind + "fdsf"}>
              <div className="profile-item">
                <div className="profile-card">
                  <div className="profile">
                    <img src={member.img} alt="Profile img" />
                  </div>
                  <div className="caption ">
                    <div>
                      <h5>{member.heading}</h5>
                      <h4>{member.name}</h4>
                    </div>
                    <div className="social-links">
                      <a href="https://twitter.com/richmonkeisland">
                        <i>
                          <BsTwitter />
                        </i>
                      </a>
                      <a href="https://discord.gg/DxQSMfm6F3">
                        <i>
                          <BsDiscord />
                        </i>
                      </a>
                      <a href="https://www.instagram.com/richmonkeyisland/">
                        <i>
                          <BsInstagram />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <p>{member.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Team;
