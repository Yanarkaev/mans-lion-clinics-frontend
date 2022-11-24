import React, { useEffect, useState } from "react";
import s from "./Departments.module.scss";
import icon from "../../assets/Departments/dep.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../features/departments/departmentsSlice";
import header from "../../assets/Departments/header.png";
import { getUsers } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import preloader from "./animation/preloader.json";
function Departments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingUser = useSelector((state) => state.user.loading);
  const loadingDep = useSelector((state) => state.departments.loading);
  console.log(loadingUser, loadingDep);
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
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  if (loadingUser || loadingDep) {
    return (
      <div>
        <Lottie
          animationData={preloader}
          style={{ width: "50vw", margin: "auto", paddingTop: "10rem" }}
        ></Lottie>
      </div>
    );
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
              if (item.name !== "Администрация") {
                return (
                  <div
                    onClick={() => setFilter(item._id)}
                    key={item._id}
                    className={s.name}
                  >
                    <span>{item.name}</span>
                  </div>
                );
              }
              return "";
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
