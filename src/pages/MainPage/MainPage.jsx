import React from "react";
import UncontrolledExample from "./Carousel";
import Description from "./Description";
import s from "./MainPage.module.scss";
import MainFooter from "./MainFooter";

function MainPage() {
  return (
    <div className={s.container}>
      <UncontrolledExample />
      <Description />

      <div className={s.marqueeContainer}>
        <p className={s.marquee}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          distinctio? Officia est perspiciatis iusto rem beatae nostrum.
        </p>
      </div>
      <MainFooter />
    </div>
  );
}

export default MainPage;
