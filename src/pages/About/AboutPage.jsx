import React from "react";
import styles from "./aboutPage.module.scss";
import { motion } from "framer-motion";

const AboutPage = () => {
  const textAnimationLeft = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40, duration: 2 },
    },
  };
  const textAnimationRight = {
    hidden: {
      x: 1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40, duration: 5 },
    },
  };
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.title}>
        <h1>О нас</h1>
      </div>

      <div className={styles.main}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textAnimationLeft}
          viewport={{ once: true }}
          className={styles.titleContainer}
        >
          <h1>Заголовок 1</h1>
          <p>
            Клиника МансурЛев – сеть частных медицинских центров, которая
            является одной из крупнейших на Юге России и включает в себя 6
            многопрофильных медицинских клиник в Краснодаре и один
            лечебно-диагностический центр в Сочи. В стенах Клиники
            Екатерининская более 700 узкопрофильных квалифицированных
            специалистов с помощью современного медицинского оборудования
            ежедневно заботятся о здоровье наших пациентов. Мы оказываем
            медицинскую помощь экспертного уровня взрослым и детям с первых дней
            жизни.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textAnimationRight}
          viewport={{ once: true }}
          className={styles.titleContainer}
        >
          <h1>Заголовок 1</h1>
          <p>
            Клиника МансурЛев – сеть частных медицинских центров, которая
            является одной из крупнейших на Юге России и включает в себя 6
            многопрофильных медицинских клиник в Краснодаре и один
            лечебно-диагностический центр в Сочи. В стенах Клиники
            Екатерининская более 700 узкопрофильных квалифицированных
            специалистов с помощью современного медицинского оборудования
            ежедневно заботятся о здоровье наших пациентов. Мы оказываем
            медицинскую помощь экспертного уровня взрослым и детям с первых дней
            жизни.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
