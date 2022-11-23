import React from "react";
import s from "./adminPage.module.scss";

const AdminPage = () => {
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
    </div>
  );
};

export default AdminPage;
