import React from "react";
import s from "./MainPage.module.scss";
import desc1 from "../../assets/MainPage/desc1.svg";
import desc2 from "../../assets/MainPage/desc2.svg";
import desc3 from "../../assets/MainPage/desc3.svg";
import desc4 from "../../assets/MainPage/desc4.svg";
import { motion } from "framer-motion";

function Description() {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      className={s.description}
    >
      <div className={s.descriptionGroup}>
        <div className={s.iconContainer}>
          <img src={desc1} alt="" />
        </div>
        <div className={s.count}>
          <h1>376</h1>
        </div>
        <div className={s.descriptionTitle}>
          <h4>Доноры</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            distinctio? Officia est perspiciatis iusto rem beatae nostrum.
          </p>
        </div>
      </div>
      <div className={s.descriptionGroup}>
        <div className={s.iconContainer}>
          <img src={desc2} alt="" />
        </div>
        <div className={s.count}>
          <h1>1298</h1>
        </div>
        <div className={s.descriptionTitle}>
          <h4>Пациенты</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            distinctio? Officia est perspiciatis iusto rem beatae nostrum.
          </p>
        </div>
      </div>
      <div className={s.descriptionGroup}>
        <div className={s.iconContainer}>
          <img src={desc3} alt="" />
        </div>
        <div className={s.count}>
          <h1>23</h1>
        </div>
        <div className={s.descriptionTitle}>
          <h4>Специальности</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            distinctio? Officia est perspiciatis iusto rem beatae nostrum.
          </p>
        </div>
      </div>
      <div className={s.descriptionGroup}>
        <div className={s.iconContainer}>
          <img src={desc4} alt="" />
        </div>
        <div className={s.count}>
          <h1>97</h1>
        </div>
        <div className={s.descriptionTitle}>
          <h4>Врачи</h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            distinctio? Officia est perspiciatis iusto rem beatae nostrum.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Description;
