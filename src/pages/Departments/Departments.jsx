import React from "react";
import s from "./Departments.module.scss";
import icon from "../../assets/Departments/dep.svg";
import { motion } from "framer-motion";
function Departments() {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };
  const mainAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40 },
    },
  };
  return (
    <div className={s.container}>
      <motion.aside
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        className={s.aside}
      >
        <div className={s.logo}>
          <img src={icon} alt="" />
        </div>
        <div className={s.departmants}>
          <div className={s.name}>
            <span>я отдел 1</span>
          </div>
          <div className={s.name}>
            <span>я отдел 2</span>
          </div>
          <div className={s.name}>
            <span>я отдел 3</span>
          </div>
          <div className={s.name}>
            <span>я отдел 4</span>
          </div>
        </div>
      </motion.aside>
      <motion.main
        initial="hidden"
        whileInView="visible"
        variants={mainAnimation}
        className={s.main}
      >
        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}>
              <img
                src="https://bestclinic.ru/upload/resize_cache/iblock/451/480_320_2/v_tualet_po_bolshomu_s_krovyu2_1024x683.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>

        <div className={s.departmantCard}>
          <div className={s.photoContainer}>
            <div className={s.photo}></div>
          </div>
          <div className={s.doctorName}>
            <span>Dr.Жатланхан Артурпиевич</span>
          </div>
          <div className={s.jobTitle}>
            <span>Практолог</span>
          </div>
          <button>Записаться</button>
        </div>
      </motion.main>
    </div>
  );
}

export default Departments;
