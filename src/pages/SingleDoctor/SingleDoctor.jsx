import React, { useEffect } from "react";
import s from "./singleDoctor.module.scss";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfoDoctor } from "../../features/userSlice";
import moment from "moment";

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
  const { id } = useParams();
  const doctor = useSelector((state) => state.user.doctorById);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoDoctor(id));
  }, [dispatch, id]);

  if (loading || !doctor) {
    return "";
  }

  console.log(doctor);

  const handleTime = () => {
    const times = [];
    let time = moment(doctor.schedule.split("-")[0], "HH:mm")
      .add(30, "m")
      .format("HH:mm");
    while (
      moment(time, "HH:mm").isBetween(
        moment(doctor.schedule.split("-")[0], "HH:mm"),
        moment(doctor.schedule.split("-")[1], "HH:mm")
      )
    ) {
      times.push(moment(time, "HH:mm").format("HH:mm"));
      time = moment(time, "HH:mm").add(30, "m");
    }
    return times.map((item) => {
      return <button>{moment(item, "HH:mm").format("HH:mm")}</button>;
    });
  };

  return (
    <div className={s.wrapper}>
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
          <div>{doctor.fullName}</div>
          <div>{doctor.jobTitle}</div>
          <div>В компании с {doctor.birthDay.split("-")[0]} года</div>
          <div>
            График работы: с {doctor.schedule.split("-")[0]} до{" "}
            {doctor.schedule.split("-")[1]}
          </div>
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

            <div className={s.timeBtns}>{handleTime()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
