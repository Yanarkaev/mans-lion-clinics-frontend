import React from "react";
import s from "./Doctor.module.scss";
import icon from "../../../assets/PersonalAccounts/icon.svg";
import { motion } from "framer-motion";
function Doctor() {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      className={s.container}
    >
      <div className={s.card}>
        <div className={s.doctorInfo}>
          <div className={s.photo}>
            <img src="/" alt="" />
          </div>
          <div className={s.description}>
            <h4>Жатланханов Жатланхан Жатланханович</h4>
            <h5>Практолог</h5>
            <div className={s.icon}>
              <img src={icon} alt="" /> <span>Клиника Хас Лев</span>
            </div>
          </div>
        </div>
        <div className={s.jobInfo}>
          <div className={s.infoGroup}>
            <span>График работы:</span>
            <span>9:00 - 16:00</span>
          </div>
          <div className={s.infoGroup}>
            <span>Стаж работы:</span>
            <span>20 лет</span>
          </div>
          <div className={s.infoGroup}>
            <span>Возраст:</span>
            <span>20 лет</span>
          </div>
        </div>
      </div>
      <div className={s.records}>
        <div className={s.recordsTitle}>
          <h5>Дата</h5>
          <input type="date" />
          <span>&times;</span>
        </div>
        <table>
          <tr>
            <th>№</th>
            <th>ФИО</th>
            <th>Время записи</th>
            <th>Дата</th>
            <th>Кончание</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Жалмурзбек Картофанович Гаджимурадов</td>
            <td>13:30</td>
            <td>Тахан 1уьйран</td>
            <td>
              <button>Кончить</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Жалмурзбек Картофанович Гаджимурадов</td>
            <td>13:30</td>
            <td>Тахан 1уьйран</td>
            <td>
              <button>Кончить</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Жалмурзбек Картофанович Гаджимурадов</td>
            <td>13:30</td>
            <td>Тахан 1уьйран</td>
            <td>
              <button>Кончить</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Жалмурзбек Картофанович Гаджимурадов</td>
            <td>13:30</td>
            <td>Тахан 1уьйран</td>
            <td>
              <button>Кончить</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Жалмурзбек Картофанович Гаджимурадов</td>
            <td>13:30</td>
            <td>Тахан 1уьйран</td>
            <td>
              <button>Кончить</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Жалмурзбек Картофанович Гаджимурадов</td>
            <td>13:30</td>
            <td>Тахан 1уьйран</td>
            <td>
              <button>Кончить</button>
            </td>
          </tr>
        </table>
      </div>
    </motion.div>
  );
}

export default Doctor;
