import React, { useEffect, useState } from "react";
import s from "./singleDoctor.module.scss";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  getInfoDoctor,
  getRecordsByDoctor,
} from "../../features/userSlice";
import moment from "moment";
import Lottie from "lottie-react";
import errorAnim from "./animation/errorAnim.json";

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
  const records = useSelector((state) => state.user.recordByDoctor);
  const acceptOrder = useSelector((state) => state.user.acceptOrder);
  const error = useSelector((state) => state.user.error);
  const [recordDay, setRecordDay] = useState(
    moment().add(1, "d").format("YYYY.MM.DD")
  );

  // const user = useSelector((state) => state.user);

  const [recordTime, setRecordTime] = useState("");
  const [show, setShow] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getInfoDoctor(id));
    dispatch(getRecordsByDoctor(id));
  }, [dispatch, id]);

  const handleTime = () => {
    const closeDay = records.map((item) => {
      return { date: item.date, time: item.time };
    });
    if (
      closeDay.filter(
        (elem) =>
          elem.date === recordDay &&
          elem.time === moment(recordTime, "HH:mm").format("HH:mm")
      ).length
    ) {
      setRecordTime("");
    }
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
      let isActive =
        moment(item, "HH:mm").format("HH:mm") === recordTime
          ? { background: "rgb(47, 71, 131)" }
          : {};
      let isDisabled = closeDay.filter(
        (elem) =>
          elem.date === recordDay &&
          elem.time === moment(item, "HH:mm").format("HH:mm")
      ).length
        ? "Disabled"
        : "";

      return (
        <button
          key={item}
          onClick={() => setRecordTime(moment(item, "HH:mm").format("HH:mm"))}
          disabled={isDisabled}
          style={isActive}
        >
          {moment(item, "HH:mm").format("HH:mm")}
        </button>
      );
    });
  };
  const handleSchedule = () => {
    let checkDay = moment().add(1, "d").format("YYYY.MM.DD");
    let days = [];
    while (
      moment(checkDay, "YYYY.MM.DD").isBetween(
        moment().format("YYYY.MM.DD"),
        moment().add(8, "d").format("YYYY.MM.DD")
      )
    ) {
      days.push(moment(checkDay, "YYYY.MM.DD").format("YYYY.MM.DD"));
      checkDay = moment(checkDay, "YYYY.MM.DD").add(1, "d");
    }
    return days.map((item) => {
      let isActive =
        moment(item, "YYYY.MM.DD").format("YYYY.MM.DD") === recordDay
          ? { background: "rgb(47, 71, 131)" }
          : {};

      return (
        <button
          key={item}
          onClick={() =>
            setRecordDay(moment(item, "YYYY.MM.DD").format("YYYY.MM.DD"))
          }
          style={isActive}
        >
          {moment(item, "YYYY.MM.DD").format("DD.MM")}
        </button>
      );
    });
  };
  const handleOrder = () => {
    dispatch(addOrder({ _doctorId: id, time: recordTime, date: recordDay }));
  };
  if (acceptOrder) {
    navigate("/account");
  }
  if (loading || !doctor || acceptOrder.length === 0) {
    return "";
  }

  return (
    <div className={s.wrapper}>
      {show && (
        <div className={s.modal}>
          <div className={s.order}>
            <h2>Проверьте данные</h2>
            <table>
              <tbody>
                <tr>
                  <td>ФИО врача</td>
                  <td>{doctor.fullName}</td>
                </tr>
                <tr>
                  <td>Должность</td>
                  <td>{doctor.jobTitle}</td>
                </tr>
                <tr>
                  <td>Время записи</td>
                  <td>
                    {recordDay} в {recordTime}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s.btns}>
              <button onClick={() => setShow(false)}>Изменить</button>
              <button onClick={handleOrder}>Подтвердить</button>
            </div>
            <div>
              {error ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Lottie
                    animationData={errorAnim}
                    style={{ width: "10rem" }}
                  ></Lottie>
                  <div style={{ color: "red" }}>{error}</div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      )}
      {!show && (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardAnimation}
            className={s.cardWrapper}
          >
            <div className={s.avatar}>
              <img
                src={`http://localhost:3001/${doctor.avatarImg}`}
                alt="Фото"
              />
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
                <div className={s.dateBtns}>{handleSchedule()}</div>
              </div>

              <div className={s.timeBlock}>
                <h2>Время: </h2>

                <div className={s.timeBtns}>{handleTime()}</div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <button
                style={{ margin: "auto" }}
                onClick={() => setShow(true)}
                disabled={recordTime ? "" : "disabled"}
              >
                Подтвердить запись
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleDoctor;
