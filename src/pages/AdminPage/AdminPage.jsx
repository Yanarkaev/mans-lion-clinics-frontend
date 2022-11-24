import React, { useState } from "react";
import s from "./adminPage.module.scss";
import AdminChat from "./../../components/AdminChat/AdminChat";
import { useDispatch } from 'react-redux';
import { addCode } from "../../features/userSlice";

const AdminPage = () => {
  const [job, setJob] = useState("6373435d725a07b0fb7bfc7d");
  const [invCode, setInvCode] = useState("");
const dispatch = useDispatch()
  const generCode = () => {
    const symbols =
      "123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let password = "";
    for (var i = 0; i <= 10; i++) {
      const randomNumber = Math.floor(Math.random() * symbols.length);
      password += symbols.substring(randomNumber, randomNumber + 1);
    }
    setInvCode(password);
  };
const handleAdd = () => {
  console.log(1);
dispatch(addCode({id: job, code : invCode }))
}
  return (
    <div className={s.wrapper}>
      <div className={s.adminCard}>
        <div className={s.avatar}>
          <img src="" alt="твоя ава, бро" />
        </div>
        <div className={s.adminInfo}>
          <div>ты админ, бро</div>
        </div>
      </div>
      <div className={s.invationWrapper}>
        <div className={s.invationInner}>
          <h5>Пригласительный код</h5>
          <input
            type="text"
            value={invCode}
            onChange={(e) => setInvCode(e.target.value)}
            placeholder="Введите код"
          />

          <div className={s.sendWrapper}>
            <button className={s.send} onClick={handleAdd} disabled={ invCode ? '' : 'disabled'}>Отправить</button>
            <button className={s.gener} onClick={generCode}>
              Сгенерировать
            </button>
          </div>
        </div>

        <div className={s.choiceWrapper}>
          <h5>Должность:</h5>
          <button
            className={s.toggleJob}
            onClick={() =>
              setJob(
                job === "6373435d725a07b0fb7bfc7d"
                  ? "63734488230a4b48a0f3a02f"
                  : "6373435d725a07b0fb7bfc7d"
              )
            }
          >
            {job === "6373435d725a07b0fb7bfc7d" ? "Админ" : "Доктор"}
          </button>
        </div>
      </div>
, 
      <AdminChat />
    </div>
  );
};

export default AdminPage;
