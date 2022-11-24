import React, { useEffect } from "react";
import s from "./User.module.scss";
import icon from "../../../assets/PersonalAccounts/icon.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsByRole, getUsers } from "../../../features/userSlice";
import moment from "moment/moment";
import "moment/locale/ru";
import Lottie from "lottie-react";
import avatar from "./animation/userAv.json";

function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRecordsByRole());
  }, [dispatch]);

  const token = useSelector((state) => state.user.token);
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const records = useSelector((state) => state.user.userRecords);
  const parseJwt = (token) => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };
  if (loading) {
    return "";
  }
  const parsedJwt = parseJwt(token);

  console.log(records);
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
      {users.map((item) => {
        if (item._id === parsedJwt.id && item.role === "user") {
          return (
            <div key={item._id}>
              <div className={s.card}>
                <div className={s.doctorInfo}>
                  <div className={s.photo}>
                    <Lottie animationData={avatar} />
                  </div>
                  <div className={s.description}>
                    <h4>{item.fullName}</h4>
                    <h5>Пациент</h5>
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
                    <span>Наш адресс:</span>
                    <span>Хасавюртар базар</span>
                  </div>
                </div>
              </div>
              <div className={s.records}>
                <div className={s.recordsTitle}>
                  <h5>Мои записи</h5>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>ФИО Врача</th>
                      <th>Должность</th>
                      <th>Время записи</th>
                      <th>Дата</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((item, index) => {
                      return (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item._doctorId.fullName}</td>
                          <td>{item._doctorId.jobTitle}</td>
                          <td>{item.time}</td>
                          <td>
                            {moment(item.date, "YYYY.MM.DD")
                              .locale("RU")
                              .format("LL")}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
        return "";
      })}
    </motion.div>
  );
}

export default User;
