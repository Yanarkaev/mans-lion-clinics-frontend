import React, { useState } from "react";
import s from "./adminPage.module.scss";
import AdminChat from "./../../components/AdminChat/AdminChat";

const AdminPage = () => {
  const [job, setJob] = useState(false);
  const [invCode, setInvCode] = useState("");

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

  return (
    <div className={s.wrapper}>
      <div className={s.adminCard}>
        <div className={s.avatar}>
          <img src="" alt="твоя ава, бро" />
        </div>
        <div className={s.adminInfo}>
          <div>твоё имя, бро</div>
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
            <button className={s.send}>Отправить</button>
            <button className={s.gener} onClick={generCode}>
              Сгенерировать
            </button>
          </div>
        </div>

        <div className={s.choiceWrapper}>
          <h5>Должность:</h5>
          <button className={s.toggleJob} onClick={() => setJob(!job)}>
            {job ? "Врач" : "Админ"}
          </button>
        </div>
      </div>

      <AdminChat />
    </div>
  );
};

export default AdminPage;
