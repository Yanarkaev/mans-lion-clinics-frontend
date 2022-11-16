import React from "react";
import s from "./MainFooter.module.scss";
import svg from "../../assets/MainPage/call.svg";
import { motion } from "framer-motion";

function MainFooter() {
  const FooterAnimationRight = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };
  const FooterAnimationLeft = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };

  const FooterAnimationTop = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 20 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={FooterAnimationTop}
      className={s.container}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FooterAnimationLeft}
        className={s.numbers}
      >
        <div className={s.icon}>
          <img src={svg} alt="" />
        </div>
        <h3>Для экстренных вызовов</h3>
        <h1>+7 (977)-777-77-77</h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FooterAnimationRight}
        className={s.city}
      >
        <div className={s.cityInfo}>
          <h3>Чечня</h3>
          <p>chosh@mail.ru</p>
          <p>Леева 208</p>
          <p>142459 Хас</p>
        </div>
        <div className={s.cityInfo}>
          <h3>Дагестан</h3>
          <p>chosh@mail.ru</p>
          <p>Леева 208</p>
          <p>142459 Хас</p>
        </div>
        <div className={s.cityInfo}>
          <h3>Ростов на Дону</h3>
          <p>chosh@mail.ru</p>
          <p>Леева 208</p>
          <p>142459 Хас</p>
        </div>
        <div className={s.cityInfo}>
          <h3>Ингушетия </h3>
          <p>chosh@mail.ru</p>
          <p>Леева 208</p>
          <p>142459 Хас</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MainFooter;
