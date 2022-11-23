import React, { useEffect, useState } from "react";
import s from "./Departments.module.scss";
import icon from "../../assets/Departments/dep.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../features/departments/departmentsSlice";
import header from "../../assets/Departments/header.png";
import { getUsers } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
function Departments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDepartments());
    dispatch(getUsers());
  }, [dispatch]);

  const departments = useSelector((state) => state.departments.departments);

  const users = useSelector((state) => state.user.users);

  const [filter, setFilter] = useState("");

  const doctors = users.filter((user) =>
    filter
      ? user.role === "doctor" && user.department === filter
      : user.role === "doctor"
  );
  const loading = useSelector((state) => state.departments.loading);

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

  const departmentsAnimation = {
    hidden: {
      // y: 300,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      // y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return "загрузка";
  }

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
          <div onClick={() => setFilter("")} className={s.logo}>
            <img src={icon} alt="" />
          </div>
          <div className={s.departmants}>
            {departments.map((item) => {
              return (
                <div
                  onClick={() => setFilter(item._id)}
                  key={item._id}
                  className={s.name}
                >
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
          {doctors.map((item, index) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={departmentsAnimation}
                viewport={{ amount: 1, once: true }}
                className={s.departmantCard}
                key={index}
              >
                <div className={s.photoContainer}>
                  <div className={s.photo}>
                    <img
                      src={`http://localhost:3001/${item.avatarImg}`}
                      alt="Аватар"
                    />
                  </div>
                </div>
                <div className={s.doctorName}>
                  <span>{item.fullName}</span>
                </div>
                <div className={s.jobTitle}>
                  <span>{item.jobTitle}</span>
                </div>
                <button onClick={() => navigate(`/entry/doctor/${item._id}`)}>
                  Записаться
                </button>
              </motion.div>
            );
          })}
        </motion.main>
      </div>
    </>
  );
}

export default Departments;
