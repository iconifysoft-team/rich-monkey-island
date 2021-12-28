import { Carousel } from "react-bootstrap";
import monkey05 from "../assets/imgs/monkey05.jpeg";
import monkey06 from "../assets/imgs/monkey06.jpeg";
import monkey07 from "../assets/imgs/monkey07.jpeg";
import monkey08 from "../assets/imgs/monkey08.jpeg";
import monkey10 from "../assets/imgs/monkey10.jpeg";

const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={monkey05} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={monkey06} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={monkey07} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={monkey08} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={monkey10} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
