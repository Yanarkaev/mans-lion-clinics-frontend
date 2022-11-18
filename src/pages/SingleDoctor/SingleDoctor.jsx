import React from "react";
import s from "./singleDoctor.module.scss";
import { motion } from "framer-motion";

const SingleDoctor = () => {
  const cardAnimation = {
    hidden: {
      y: -300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };
  return (
    <div
      // initial="hidden"
      // whileInView="visible"
      // variants={textAnimation}
      className={s.wrapper}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardAnimation}
        className={s.cardWrapper}
      >
        <div className={s.avatar}>
          <img src="asdd" alt="Фото" />
        </div>
        <div className={s.doctorInfo}>
          <div>Доктор докторович</div>
          <div>Кардиология</div>
          <div>40 лет</div>
          <div>Стаж: 15 лет</div>
          <div>График работы: с 10:00 до 18:00</div>
        </div>
      </motion.div>

      <div className={s.entryBlock}>
        <h1>Запись</h1>

        <div className={s.entryBtns}>
          <div className={s.dateBlock}>
            <h2>Дата: </h2>
            <div className={s.dateBtns}>
              <button>17 ноября</button>
              <button>18 ноября</button>
              <button>19 ноября</button>
              <button>20 ноября</button>
            </div>
          </div>

          <div className={s.timeBlock}>
            <h2>Время: </h2>

            <div className={s.timeBtns}>
              <button disabled>10:00</button>
              <button>10:30</button>
              <button>11:00</button>
              <button>11:30</button>
              <button>13:00</button>
              <button>13:30</button>
              <button>14:00</button>
              <button>15:00</button>
              <button>15:30</button>
              <button>16:00</button>
              <button>16:30</button>
              <button>17:00</button>
              <button>17:30</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
