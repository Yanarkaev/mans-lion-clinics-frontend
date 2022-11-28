import React, { useState } from "react";
import s from "./adminPage.module.scss";
import AdminChat from "./../../components/AdminChat/AdminChat";
import { useDispatch } from "react-redux";
import { addCode } from "../../features/userSlice";

const AdminPage = () => {
  const [job, setJob] = useState("6373435d725a07b0fb7bfc7d");
  const [invCode, setInvCode] = useState("");
  const dispatch = useDispatch();
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
    dispatch(addCode({ id: job, code: invCode }));
    setInvCode("");
  };
  return (
    <div className={s.wrapper}>
      <div className={s.adminCard}>
        <div className={s.avatar}>
          <img
            src="data:image/jpeg;base64,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"
            alt="твоя ава, бро"
          />
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
            <button
              className={s.send}
              onClick={handleAdd}
              disabled={invCode ? "" : "disabled"}
            >
              Отправить
            </button>
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
      <AdminChat />
    </div>
  );
};

export default AdminPage;
