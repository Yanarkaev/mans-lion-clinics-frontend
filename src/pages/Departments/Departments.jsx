import React, { useEffect } from "react";
import s from "./Departments.module.scss";
import icon from "../../assets/Departments/dep.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../features/departments/departmentsSlice";
import header from "../../assets/Departments/header.png";
function Departments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  const departments = useSelector((state) => state.departments.departments);

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
    <>
      <div className={s.headerBack}>
        <img src={header} alt="" />
      </div>
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
            {departments.map((item) => {
              return (
                <div key={item._id} className={s.name}>
                  <span>{item.name}</span>
                </div>
              );
            })}
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
    </>
  );
}

export default Departments;
