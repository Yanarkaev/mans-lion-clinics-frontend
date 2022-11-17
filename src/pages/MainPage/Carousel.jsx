import Carousel from "react-bootstrap/Carousel";

import slider2 from "../../assets/MainPage/slider2..jpg";
import slider3 from "../../assets/MainPage/slider3.jpg";

import s from "./MainPage.module.scss";

function UncontrolledExample() {
  return (
    <div>
      <Carousel className={s.carouselContainer}>
        <Carousel.Item className={s.carouselContainer}>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption className={s.carouselCaption}>
            <h3 className={s.sliderTitle}>Современное оборудование</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={s.carouselContainer}>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption className={s.carouselCaption}>
            <h3 className={s.sliderTitle}>Высококвалифицированные врачи</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
