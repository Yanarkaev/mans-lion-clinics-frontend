import React, { useEffect } from "react";
import s from "./MainPage.module.scss";
import desc1 from "../../assets/MainPage/desc1.svg";
import desc2 from "../../assets/MainPage/desc2.svg";
import desc3 from "../../assets/MainPage/desc3.svg";
import desc4 from "../../assets/MainPage/desc4.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/userSlice";
import { getDepartments } from "../../features/departments/departmentsSlice";
import Lottie from "lottie-react";
import preloader from "./Preloader/loader.json";
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
  const users = useSelector((state) => state.user.users);
  const departments = useSelector((state) => state.departments.departments);
  const loadingDep = useSelector((state) => state.departments.loading);
  const loadingUser = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDepartments());
  }, [dispatch]);
  if (loadingDep || loadingUser) {
    return (
      <Lottie
        animationData={preloader}
        style={{ width: "25vw", margin: "auto" }}
      />
    );
  }
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
          <h1>{users.length}</h1>
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
          <h1>{users.filter((item) => item.role === "user").length}</h1>
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
          <h1>{departments.length}</h1>
        </div>
        <div className={s.descriptionTitle}>
          <h4>Отделений</h4>
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
          <h1>{users.filter((item) => item.role === "doctor").length}</h1>
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
