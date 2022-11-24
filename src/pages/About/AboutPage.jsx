import React from "react";
import styles from "./aboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.title}>
        <h1>О нас</h1>
      </div>

      <div className={styles.main}>
        <div>
          <h1>Наша организация</h1>
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
        </div>

        <div>
          <h1>Не наша организация</h1>
          <p>
            Клиника АндрейЕнот – сеть частных медицинских центров, которая
            является одной из крупнейших на Юге России и включает в себя 6
            многопрофильных медицинских клиник в Краснодаре и один
            лечебно-диагностический центр в Сочи. В стенах Клиники
            Екатерининская более 700 узкопрофильных квалифицированных
            специалистов с помощью современного медицинского оборудования
            ежедневно заботятся о здоровье наших пациентов. Мы оказываем
            медицинскую помощь экспертного уровня взрослым и детям с первых дней
            жизни.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
