import React, { useEffect, useState } from "react";
import s from "./Doctor.module.scss";
import icon from "../../../assets/PersonalAccounts/icon.svg";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../features/userSlice";
function Doctor() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
import {
  getRecordsByRole,
  getUsers,
  removeRecord,
} from "../../../features/userSlice";
import moment from "moment";
import "moment/locale/ru";

function Doctor() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRecordsByRole());
  }, [dispatch]);

  const token = useSelector((state) => state.user.token);
  const users = useSelector((state) => state.user.users);
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

  const parsedJwt = parseJwt(token);

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

  const handleRemove = (id) => {
    dispatch(removeRecord(id));
  };

return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      className={s.container}
    >
      {users.map((item) => {
        if (item._id === parsedJwt.id && item.role === "doctor") {
          return (
            <div key={item._id}>
              <div className={s.card}>
                <div className={s.doctorInfo}>
                  <div className={s.photo}>
                    <img
                      src={`http://localhost:3001/${item.avatarImg}`}
                      alt=""
                    />
                  </div>
                  <div className={s.description}>
                    <h4>{item.fullName}</h4>
                    <h5>{item.jobTitle}</h5>
                    <div className={s.icon}>
                      <img src={icon} alt="" /> <span>Клиника Хас Лев</span>
                    </div>
                  </div>
                </div>
                <div className={s.jobInfo}>
                  <div className={s.infoGroup}>
                    <span>График работы:</span>
                    <span>{item.schedule}</span>
                  </div>
                  <div className={s.infoGroup}>
                    <span>В компании с</span>
                    <span>
                      {moment(item.birthDay, "YYYY-MM-DD").format("YYYY.MM.DD")}
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.records}>
                <div className={s.recordsTitle}>
                  <h5>Дата</h5>
                  <input type="date" />
                  <span>&times;</span>
                  <input
                    type="date"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <span onClick={() => setFilter("")}>&times;</span>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>ФИО</th>
                      <th>Время записи</th>
                      <th>Дата</th>
                      <th>Кончание</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Жалмурзбек Картофанович Гаджимурадов</td>
                      <td>13:30</td>
                      <td>Тахан 1уьйран</td>
                      <td>
                        <button>Кончить</button>
                      </td>
                    </tr>
                      <th>Закончить</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records
                      ? records
                          .filter((item) =>
                            filter.length
                              ? item.date ===
                                filter.split("-").join(".").toString()
                              : item
                          )
                          .map((item, index) => {
                            return (
                              <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item._patientId.fullName}</td>
                                <td>{item.time}</td>
                                <td>
                                  {moment(item.date, "YYYY.MM.DD")
                                    .locale("RU")
                                    .format("LL")}
                                </td>
                                <td>
                                  <button
                                    onClick={() => handleRemove(item._id)}
                                  >
                                    Закончить
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                      : ""}
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

export default Doctor;
