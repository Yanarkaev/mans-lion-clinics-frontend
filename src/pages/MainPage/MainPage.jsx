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
          Небитый не крашенный приор ю юхкш, связи довл &#160;
        </p>
      </div>
      <MainFooter />
    </div>
  );
}

export default MainPage;
