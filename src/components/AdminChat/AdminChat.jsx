import React from "react";
import s from "./adminChat.module.scss";

const AdminChat = () => {
  return (
    <div className={s.chatWrapper}>
      <div className={s.usersWrapper}>
        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>
        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>
        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>
        <div className={s.user}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>
      </div>

      <div className={s.chatInner}>
        <div className={s.chatHeader}>
          <span className={s.avatar}>u</span>
          <span className={s.username}>user</span>
        </div>

        <div className={s.messages}>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.reciever}>mucha gracias afishol</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
          <p className={s.myself}>siuuuuuuuuuu</p>
        </div>

        <div className={s.inputs}>
          <form action="">
            <input type="text" />
            <button>
              <span>➜</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
